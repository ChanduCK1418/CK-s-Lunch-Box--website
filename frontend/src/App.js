import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState("");
  const toggleCart = () => {
    setShowCart(!showCart);
};

  const handleAddToCart = (item) => {
  setToast("Item added to cart");

  setTimeout(() => setToast(""), 2000);

  setCartItems((prev) => {
    const existing = prev.find((i) => i.id === item.id);

    if (existing) {
      return prev.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
    }

    return [...prev, { ...item, qty: 1 }];
  });
};

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const decreaseFromMenu = (item) => {
    setCartItems(prev =>
      prev
        .map(i =>
          i.id === item.id ? { ...i, qty: i.qty - 1 } : i
       )
       .filter(i => i.qty > 0)
   );
 };
  return (
  <div>
    <WhatsappButton />

    {toast && <div className="toast">{toast}</div>}

    <Navbar
      cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
      toggleCart={toggleCart}
    />
    {showCart && (
      <Cart
        cartItems={cartItems}
        toggleCart={toggleCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />
     )}

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Menu
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
              decreaseFromMenu={decreaseFromMenu}
            />
            <section
              id="contact"
              style={{
                padding: "80px",
                textAlign: "center",
                background: "#f8f8f8"
             }}
           >
             <h2>Contact Us</h2>
             <p>📞 Phone: 9515971814</p>
             <p>📍 Location: Hyderbad</p>
           </section>
          </>
        }
      />

    </Routes>

  </div>
);
}

export default App;