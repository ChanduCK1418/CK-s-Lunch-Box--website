import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="CK's Lunch Box" className="logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
        <li className="login-btn">Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;