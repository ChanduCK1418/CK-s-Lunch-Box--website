import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        We're happy to help with orders and subscriptions.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <h3>📞 Call Us</h3>

          <a href="tel:9515971814">
            +91 9515971814
          </a>
        </div>

        <div className="contact-card">
          <h3>💬 WhatsApp</h3>

          <a
            href="https://wa.me/919515971814"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>

          <p>Annojiguda,Ghateksar</p>
        </div>

        <div className="contact-card">
          <h3>🕒 Availability</h3>

          <p>Only For Lunch</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;