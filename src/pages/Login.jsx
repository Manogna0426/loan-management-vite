import { useState } from "react";
import { Link } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar.jsx";

function Login() {
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    // Demo: always show error (you can connect real auth later)
    setShowError(true);
  };

  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        <div style={styles.card}>
          {/* Icon */}
          <div style={styles.icon}>🔐</div>

          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>
            Enter your credentials to access your LoanFlow account.
          </p>

          {/* ✅ Error appears ONLY when showError = true */}
          {showError && (
            <div style={styles.error}>
              The email or password you entered is incorrect. Please try again.
            </div>
          )}

          {/* Email */}
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="admin@loanflow.com"
            style={styles.input}
          />

          {/* Password */}
          <div style={styles.row}>
            <label style={styles.label}>Password</label>
            <span style={styles.forgot}>Forgot password?</span>
          </div>

          <input
            type="password"
            placeholder="password123"
            style={styles.input}
          />

          {/* Checkbox */}
          <div style={styles.checkboxRow}>
            <input type="checkbox" defaultChecked />
            <span style={styles.checkboxText}>
              Keep me signed in for 30 days
            </span>
          </div>

          {/* Sign in */}
          <button style={styles.primaryBtn} onClick={handleLogin}>
            Sign In →
          </button>

          {/* Divider */}
          <div style={styles.divider}>OR CONTINUE WITH</div>

          {/* Social buttons */}
          <button style={styles.socialBtn}>Sign in with Google</button>
          <button style={styles.socialBtn}>Sign in with Microsoft</button>

          {/* ✅ FIXED FOOTER LINK */}
          <p style={styles.footerText}>
            Don’t have an account?{" "}
            <Link to="/signup" style={styles.create}>
              Create an account
            </Link>
          </p>
        </div>

        {/* Bottom */}
        <p style={styles.bottom}>
          © 2024 LoanFlow. Secure Financial Operations.
        </p>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
  },

  card: {
    width: "420px",
    background: "white",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  icon: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "10px",
  },

  title: {
    textAlign: "center",
    marginBottom: "6px",
  },

  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "20px",
  },

  error: {
    background: "#fee2e2",
    color: "#b91c1c",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "13px",
    marginBottom: "16px",
  },

  label: {
    fontSize: "13px",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "6px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgot: {
    fontSize: "12px",
    color: "#2563eb",
    cursor: "pointer",
  },

  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  },

  checkboxText: {
    fontSize: "13px",
    color: "#374151",
  },

  primaryBtn: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "16px",
  },

  divider: {
    textAlign: "center",
    fontSize: "12px",
    color: "#9ca3af",
    margin: "16px 0",
  },

  socialBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    background: "white",
    cursor: "pointer",
  },

  footerText: {
    textAlign: "center",
    fontSize: "13px",
    marginTop: "10px",
  },

  create: {
    color: "#2563eb",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer",
  },

  bottom: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#6b7280",
  },
};

export default Login;