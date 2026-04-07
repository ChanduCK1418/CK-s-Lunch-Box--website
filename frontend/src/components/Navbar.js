import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar" id="home">
      <div className="logo-section">
        <img src={logo} alt="CK's Lunch Box" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="login-btn">Login</li>
        <li className="cart-nav">
          Cart <span className="cart-count">{cartCount}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;