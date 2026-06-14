import React from "react";
import "./Subscriptions.css";

function Subscriptions() {
  const plans = [
  {
    title: "Weekly Plan",
    duration: "7 Days",
    price: "₹699",
    tag: "Starter",
    meals: "7 Meals",
    icon: "🥗"
  },
  {
    title: "15-Day Plan",
    duration: "15 Days",
    price: "₹1299",
    tag: "🔥 Most Popular",
    meals: "15 Meals",
    icon: "🍱"
  },
  {
    title: "Monthly Plan",
    duration: "30 Days",
    price: "₹2499",
    tag: "👑 Best Value",
    meals: "30 Meals",
    icon: "🍲"
  }
];

  const handleSubscribe = (plan) => {
    const message = `
     Hello,

     I am interested in the ${plan.title}.

     📅 Duration: ${plan.duration}
     🍱 Meals: ${plan.meals}
     💰 Price: ${plan.price}

     Please share meal details and subscription process.
     `;
    window.open(
      `https://wa.me/919515971814?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="subscription-section" id="subscriptions">
      <h2>Choose Your Meal Plan</h2>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>

            <span className="plan-tag">{plan.tag}</span>

            <div className="plan-icon">
              {plan.icon}
            </div>

            <h3>{plan.title}</h3>

            <p className="duration">{plan.duration}</p>

            <p className="meals">{plan.meals}</p>

            <h1>{plan.price}</h1>

            <ul>
              <li>🍱 Fresh Homemade Meals</li>
              <li>⏸ Pause Anytime</li>
              <li>🚚 Daily Delivery</li>
              <li>🥗 Healthy Food</li>
            </ul>

            <button onClick={() => handleSubscribe(plan)}>
             Subscribe Now
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Subscriptions;