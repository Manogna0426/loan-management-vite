function FeatureCards() {
  const features = [
    {
      title: "Real-Time Payment Tracking",
      desc: "Monitor every installment as it happens with zero discrepancies.",
    },
    {
      title: "Smart Interest Engine",
      desc: "Adjust rates dynamically based on borrower risk profiles.",
    },
    {
      title: "Unified Transactions",
      desc: "Handle disbursements and repayments securely in one place.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {features.map((f, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.title}>{f.title}</h3>
              <p style={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "70px 0",
    background: "#f8fafc",
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    padding: "28px",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    background: "white",
    transition: "all 0.25s ease",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
  },

  title: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "600",
  },

  desc: {
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "1.6",
  },
};

export default FeatureCards;