import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "🍱",
      title: "Fresh Homemade Food",
      desc: "Healthy and tasty meals prepared daily."
    },
    {
      icon: "🚚",
      title: "Daily Delivery",
      desc: "On-time delivery to your location."
    },
    {
      icon: "⏸",
      title: "Pause Anytime",
      desc: "Flexible subscriptions for your schedule."
    },
    {
      icon: "👨‍💻",
      title: "Bachelor Friendly",
      desc: "Affordable meal plans for students & employees."
    },
    {
      icon: "🧼",
      title: "Hygienic Kitchen",
      desc: "Prepared with cleanliness and care."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Quality food at budget-friendly prices."
    }
  ];

  return (
    <section className="why-section" id="why-us">

      <h2>Why Choose Us?</h2>

      <div className="why-container">
        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChooseUs;