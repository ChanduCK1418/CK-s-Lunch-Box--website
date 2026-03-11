function Order() {
  // MENU DATA (edit here anytime)
  const menu = [
    {
      id: 1,
      name: "South Indian Veg Meals",
      description: "Rice, Sambar, Rasam, Curd",
      price: 80,
      tag: "Popular"
    },
    {
      id: 2,
      name: "Special Veg Meals",
      description: "Rice, Sambar, Rasam, 2 Curries, Papad, Sweet",
      price: 120,
      tag: "Best Value"
    },
    {
      id: 3,
      name: "Mini Meals",
      description: "Rice, Sambar, One Curry",
      price: 60,
      tag: "Light"
    }
  ];
  const handleOrder = () => {
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  if (!isLoggedIn) {
    alert("Please signup or login to place an order");
    window.location.href = "/signup";
  } else {
    alert("Order placed! (Payment will be added later)");
  }
};
  return (
    <div style={{ padding: "40px", background: "#fafafa" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Today’s Lunch Menu
      </h1>

      <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
        Freshly cooked South Indian home-style meals
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}
      >
        {menu.map(item => (
          <div
            key={item.id}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              position: "relative"
            }}
          >
            {/* TAG */}
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#2e7d32",
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "12px"
              }}
            >
              {item.tag}
            </span>

            <h3>{item.name}</h3>
            <p style={{ color: "#666" }}>{item.description}</p>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              ₹ {item.price}
            </p>

            <button
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#f57c00",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
                }}
                onClick={handleOrder}
                >
                Order Now
                </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
