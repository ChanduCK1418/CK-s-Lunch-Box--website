import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FiShoppingBag } from "react-icons/fi";

function Navbar({ cartCount, toggleCart }) {
  return (
    <nav className="navbar">
      
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
         <li><a href="#menu">Menu</a></li>
         <li><a href="#contact">Contact</a></li>

        {/* ✅ CART ICON */}
        <li className="cart-icon" onClick={toggleCart}>
           <FiShoppingBag size={24} />
           <span className="cart-count">{cartCount}</span>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;