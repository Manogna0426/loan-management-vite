function CTA() {
  return (
    <section style={styles.cta}>
      <h2>Ready to streamline your lending process?</h2>
      <p>Join thousands of professionals already using LoanFlow.</p>

      <div>
        <button style={styles.primary}>Start Your Free Trial</button>
        <button style={styles.secondary}>Contact Sales</button>
      </div>
    </section>
  );
}

const styles = {
  cta: {
    margin: "60px 80px",
    padding: "50px",
    borderRadius: "16px",
    background: "linear-gradient(90deg,#2563eb,#3b82f6)",
    color: "white",
    textAlign: "center",
  },
  primary: {
    background: "white",
    color: "#2563eb",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
  secondary: {
    background: "transparent",
    color: "white",
    border: "1px solid white",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default CTA;