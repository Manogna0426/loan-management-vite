import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        LoanFlow
      </Link>

      {/* Menu */}
      <div style={styles.menu}>
        <a style={styles.link}>Features</a>
        <a style={styles.link}>Solutions</a>
        <a style={styles.link}>Security</a>

        <Link to="/login" style={styles.signIn}>
          Sign in
        </Link>

        <Link to="/login">
          <button style={styles.getStarted}>Get Started</button>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 60px",
    background: "white",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2563eb",
    textDecoration: "none",
  },

  menu: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },

  link: {
    textDecoration: "none",
    color: "#374151",
    fontSize: "14px",
    cursor: "pointer",
  },

  signIn: {
    textDecoration: "none",
    color: "#374151",
    fontSize: "14px",
  },

  getStarted: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default LandingNavbar;