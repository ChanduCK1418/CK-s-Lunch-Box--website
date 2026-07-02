import React, { useState } from "react";
import "./Cart.css";

function Cart({
  cartItems,
  toggleCart,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  const [showForm, setShowForm] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "",
  });

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.qty * parseInt(item.price.replace("₹", "")),
    0
  );

  const handleOrder = () => {
    let message = "🛒 *New Order*%0A%0A";

    cartItems.forEach((item) => {
      const itemPrice = parseInt(item.price.replace("₹", ""));

      message += `🍱 ${item.name} x${item.qty} - ₹${
        itemPrice * item.qty
      }%0A`;
    });

    message += `%0A💰 *Total:* ₹${total}`;
    message += `%0A👤 Name: ${customer.name}`;
    message += `%0A📞 Phone: ${customer.phone}`;
    message += `%0A📍 Address: ${customer.address}`;
    message += `%0A💳 Payment Preference: ${customer.payment}`;

    const history =
      JSON.parse(localStorage.getItem("orders")) || [];

    history.push({
      cartItems,
      total,
      customer,
    });

    localStorage.setItem(
      "orders",
      JSON.stringify(history)
    );

    window.open(
      `https://wa.me/919515971814?text=${message}`,
      "_blank"
    );
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
          <div className="empty-cart">
            <h3>🛒 Your Cart is Empty</h3>
           
             <p>
               Looks like you haven't added any meals yet.
             </p>

            <button
              className="browse-menu-btn"
              onClick={toggleCart}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-left">
                  <p>{item.name}</p>
                  <span className="price">{item.price}</span>
                </div>

                <div className="cart-controls">
                  <button onClick={() => decreaseQty(item.id)}>
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    +
                  </button>
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

            {!showForm ? (
              <button
                className="place-order-btn"
                onClick={() => setShowForm(true)}
              >
                Place Order
              </button>
            ) : (
              <div className="customer-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      phone: e.target.value,
                    })
                  }
                />

                <textarea
                  placeholder="Delivery Address"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      address: e.target.value,
                    })
                  }
                />

                <select
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      payment: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Select Payment Preference
                  </option>

                  <option value="Cash on Delivery">
                    Cash on Delivery
                  </option>

                  <option value="Online Payment">
                    Online Payment
                  </option>
                </select>

                <button
                  className="submit-order-btn"
                  onClick={handleOrder}
                >
                  Submit Order
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;