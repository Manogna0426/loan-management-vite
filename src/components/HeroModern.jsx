function HeroModern() {
  return (
    <section style={styles.hero}>
      <div style={styles.left}>
        <span style={styles.badge}>
          New: Automated Interest Calculations v2.0
        </span>

        <h1 style={styles.title}>
          Modern Lending <span style={{ color: "#2563eb" }}>Redefined.</span>
        </h1>

        <p style={styles.desc}>
          LoanFlow is the all-in-one ecosystem for loan issuance,
          management, and financial reporting. Designed for speed,
          built for security.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primary}>Get Started Now</button>
          <button style={styles.secondary}>Sign In</button>
        </div>

        <p style={styles.note}>
          ✔ No setup fees &nbsp;&nbsp; ✔ Bank-grade encryption
        </p>
      </div>

      <div style={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="dashboard"
          style={styles.image}
        />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 80px",
    background: "#f8fafc",
    flexWrap: "wrap",
  },
  left: { maxWidth: "520px" },
  badge: {
    background: "#e0edff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },
  title: { fontSize: "42px", margin: "20px 0" },
  desc: { color: "#555" },
  buttons: { marginTop: "20px" },
  primary: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
  secondary: {
    background: "white",
    border: "1px solid #ccc",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  note: { marginTop: "15px", fontSize: "13px", color: "#666" },
  right: {},
  image: {
    width: "420px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
};

export default HeroModern;