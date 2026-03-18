function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <h1>Simply, Homely Meals</h1>
        <p>Fresh homemade food delivered to your door</p>
        <button>Order Now</button>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor: "#f5f5f5",
  },
};

export default Home;