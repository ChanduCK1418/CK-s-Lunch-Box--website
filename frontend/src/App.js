import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919515971814"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;