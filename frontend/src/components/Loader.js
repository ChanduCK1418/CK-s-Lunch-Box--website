import React from "react";
import "./Loader.css";
import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} alt="CK Lunch Box" className="loader-logo" />

      <h2>CK Lunch Box</h2>

      <p>Loading Fresh Homemade Meals...</p>

      <div className="loader-spinner"></div>
    </div>
  );
}

export default Loader;