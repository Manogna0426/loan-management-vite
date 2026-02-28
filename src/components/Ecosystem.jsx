import { Link } from "react-router-dom";

function Ecosystem() {
  const roles = ["Admins", "Lenders", "Borrowers", "Analysts"];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Tailored for the Entire Ecosystem</h2>

      <div style={styles.grid}>
        {roles.map((role, i) => {
          const cardContent = (
            <div style={styles.card}>
              <h3>{role}</h3>
              <p>
                Explore powerful tools built specifically for {role}.
              </p>
              <button style={styles.link}>Explore Features →</button>
            </div>
          );

          // ✅ Admin
          if (role === "Admins") {
            return (
              <Link
                key={i}
                to="/admin"
                style={{ textDecoration: "none" }}
              >
                {cardContent}
              </Link>
            );
          }

          // ✅ Lender
          if (role === "Lenders") {
            return (
              <Link
                key={i}
                to="/lender"
                style={{ textDecoration: "none" }}
              >
                {cardContent}
              </Link>
            );
          }

          // ✅ Borrower
          if (role === "Borrowers") {
            return (
              <Link
                key={i}
                to="/borrower"
                style={{ textDecoration: "none" }}
              >
                {cardContent}
              </Link>
            );
          }

          // ✅ Analyst
          if (role === "Analysts") {
            return (
              <Link
                key={i}
                to="/analyst"
                style={{ textDecoration: "none" }}
              >
                {cardContent}
              </Link>
            );
          }

          return <div key={i}>{cardContent}</div>;
        })}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 80px",
    background: "#f8fafc",
    textAlign: "center",
  },

  title: {
    fontSize: "28px",
    marginBottom: "40px",
    fontWeight: "700",
    color: "#111827",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    textAlign: "left",
    transition: "0.2s",
    cursor: "pointer",
  },

  link: {
    marginTop: "12px",
    background: "none",
    border: "none",
    color: "#2563eb",
    fontWeight: "600",
    cursor: "pointer",
    padding: 0,
  },
};

export default Ecosystem;