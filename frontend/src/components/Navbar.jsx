import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      padding: "15px",
      background: "#2e7d32",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <strong>CK’s Lunch Box</strong>

      <div style={{ display: "flex", gap: "15px" }}>
  <Link style={{ color: "white" }} to="/">Home</Link>
  <Link style={{ color: "white" }} to="/about">About</Link>
  <Link style={{ color: "white" }} to="/order">Menu</Link>
  <Link style={{ color: "white" }} to="/contact">Contact</Link>
  <Link style={{ color: "white" }} to="/signup">Signup</Link>

</div>

    </div>
  );
}

export default Navbar;
