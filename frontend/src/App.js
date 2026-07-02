
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import About from "./components/About";
import Subscriptions from "./components/Subscriptions";
import WhatsappButton from "./components/WhatsappButton";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState("");
  const toggleCart = () => {
    setShowCart(!showCart);
};
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const timer = setTimeout(() => {
     setLoading(false);
   }, 1200);

   return () => clearTimeout(timer);
 }, []);
 useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });
}, []);

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
 if (loading) {
  return <Loader />;
}
  return (
  
  <div>
    
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

<WhatsappButton />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div data-aos="fade-up">
              <Hero />
            </div>
            <div data-aos="fade-up">
              <Menu
                onAddToCart={handleAddToCart}
                cartItems={cartItems}
                decreaseFromMenu={decreaseFromMenu}
               />
            </div>
            <div data-aos="fade-up">
              <Subscriptions />
            </div>
            <div data-aos="fade-up">
              <About /> 
            </div>
            <div data-aos="fade-up">
              <Contact />
            </div>
            <div data-aos="fade-up">
              <Footer />
            </div>
          </>
        }
      />

    </Routes>

  </div>
);
}

export default App;