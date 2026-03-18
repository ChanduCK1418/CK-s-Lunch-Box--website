import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Fresh Home Style Meals</h1>
      <p>Simply, Homely Meals delivered daily</p>

      <div className="buttons">
        <button className="primary-btn">Order Now</button>
        <button className="secondary-btn">View Menu</button>
      </div>
    </div>
  );
}

export default Hero;