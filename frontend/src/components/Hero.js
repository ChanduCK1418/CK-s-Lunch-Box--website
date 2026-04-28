import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero" id="home">
      <h1>Fresh Home Style Meals</h1>
      <p>Simply, Homely Meals delivered daily</p>

      <div className="buttons">
        <button className="primary-btn" onClick={() => window.location.href="#menu"}>
            Order Now
        </button>

         <button className="secondary-btn" onClick={() => window.location.href="#menu"}>
               View Menu
         </button>
      </div>
    </div>
  );
}

export default Hero;