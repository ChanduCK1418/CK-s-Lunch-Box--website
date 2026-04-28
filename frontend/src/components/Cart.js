import React, { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({
  cartItems,
  toggleCart,
  increaseQty,
  decreaseQty,
  removeItem
 }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    address: ""
  });

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.qty * parseInt(item.price.replace("₹", "")),
    0
  );

  const handleOrder = () => {
  let message = "Hello, I want to order:%0A%0A";

  cartItems.forEach((item) => {
    message += `${item.name} x${item.qty} - ${item.price}%0A`;
  });

  message += `%0ATotal: ₹${total}`;

  window.open(`https://wa.me/919515971814?text=${message}`, "_blank");


    // Save order history
    const history = JSON.parse(localStorage.getItem("orders")) || [];
    history.push({ cartItems, total, customer });
    localStorage.setItem("orders", JSON.stringify(history));
  };

  return (
    <div className="cart-overlay" onClick={toggleCart}>
  
       <div
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="back-btn" onClick={toggleCart}>
           ✕ Close
        </button>

         <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-left">
                  <p>{item.name}</p>
                  <span className="price">{item.price}</span>
                </div>

                <div className="cart-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                 <button
                   className="remove-btn"
                   onClick={() => removeItem(item.id)}
                 >
                    ✖
                 </button>
               </div>
            ))}

            <h3>Total: ₹{total}</h3>
            <div className="cart-form">
            <input placeholder="Your Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Address" />

            <button className="place-order">
               Place Order
            </button>

            <button className="place-order" onClick={handleOrder}>
                Order on WhatsApp
            </button>
          </div>
        
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;