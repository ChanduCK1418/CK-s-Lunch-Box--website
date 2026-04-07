import React from "react";
import "./Menu.css";
import meal1 from "../assets/meal1.jpg";
import meal2 from "../assets/meal2.jpg";
import meal3 from "../assets/meal3.jpg";
import meal4 from "../assets/meal4.jpg";

const meals = [
  {
    id: 1,
    name: "Classic Veg Lunch Box",
    price: "₹99",
    description: "Rice, dal, curry, fry item, pickle and curd",
    image: meal1
  },
  {
    id: 2,
    name: "South Indian Special Meal",
    price: "₹129",
    description: "Rice, sambar, rasam, curry, fry, papad and sweet",
    image: meal2
  },
  {
    id: 3,
    name: "Chapati Combo Box",
    price: "₹89",
    description: "Chapati, curry, rice and dal",
    image: meal3
  },
  {
    id: 4,
    name: "Mini Bachelor Box",
    price: "₹79",
    description: "Simple homely meal for one person",
    image: meal4
  }
];

function Menu({ onAddToCart }) {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p>Freshly prepared meals with homely taste</p>
      </div>

      <div className="menu-grid">
        {meals.map((meal) => (
          <div className="menu-card" key={meal.id}>
            <img src={meal.image} alt={meal.name} className="meal-image" />

            <div className="menu-card-content">
              <h3>{meal.name}</h3>
              <p className="menu-description">{meal.description}</p>

              <div className="menu-footer">
                <span className="price">{meal.price}</span>
                <button className="cart-btn" onClick={onAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;