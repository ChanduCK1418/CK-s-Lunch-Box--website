import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ cartItems }) {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    name: "",
    phone: "",
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

    message += `%0ATotal: ₹${total}%0A`;
    message += `%0AName: ${form.name}%0A`;
    message += `Phone: ${form.phone}%0A`;
    message += `Address: ${form.address}`;

    window.open(`https://wa.me/919515971814?text=${message}`, "_blank");
  };

  return (
  <div className="checkout-container">

    <button className="back-btn" onClick={() => navigate(-1)}>
      ← Back
    </button>

    <h2>Checkout</h2>

    {/* Order Summary */}
    <div className="order-summary">
      {cartItems.map((item) => (
        <div key={item.id} className="summary-item">
          <span>{item.name} x{item.qty}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>

    {/* Form */}
    <div className="form">
      <input placeholder="Your Name" autoFocus  />
      <input placeholder="Phone Number" />
      <input placeholder="Address" />
    </div>

    <h3>Total: ₹{total}</h3>

    <button className="place-order">
      Place Order
    </button>

  </div>
);
}

export default Checkout;