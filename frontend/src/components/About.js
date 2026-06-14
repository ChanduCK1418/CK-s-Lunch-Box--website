import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About CK Lunch Box</h2>

      <p className="about-text">
        Fresh homemade meals prepared daily with quality ingredients.
        We provide healthy, hygienic and affordable lunch box services
        for students, bachelors and working professionals.
      </p>

      <div className="about-container">

        <div className="about-card">
          <h3>⭐ Our Specialities</h3>

          <ul>
            <li>🍱 Fresh Homemade Food</li>
            <li>🚚 Daily Delivery</li>
            <li>🥗 Healthy & Hygienic Meals</li>
            <li>💰 Affordable Pricing</li>
            <li>❤️ Made With Care</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;