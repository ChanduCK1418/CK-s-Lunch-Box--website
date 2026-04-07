import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import whatsappIcon from "./assets/whatsapp.png";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Menu onAddToCart={handleAddToCart} />

      <a
        href="https://wa.me/919515971814"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;