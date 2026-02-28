import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar.jsx";

function Signup() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("Borrower");

  // 🚀 redirect based on role
  const handleCreateAccount = () => {
    if (selectedRole === "Admin") navigate("/admin");
    else if (selectedRole === "Lender") navigate("/lender");
    else if (selectedRole === "Borrower") navigate("/borrower");
    else if (selectedRole === "Analyst") navigate("/analyst");
  };

  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        <div style={styles.container}>
          <h1 style={styles.heading}>
            Start your journey with{" "}
            <span style={{ color: "#2563eb" }}>LoanFlow</span>
          </h1>

          <p style={styles.sub}>
            Choose your role and set up your account to start managing your
            financial ecosystem today.
          </p>

          <div style={styles.grid}>
            {/* LEFT — Roles */}
            <div style={styles.roles}>
              <h3>1. Select Your Role</h3>

              <div style={styles.roleGrid}>
                {["Borrower", "Lender", "Admin", "Analyst"].map((role) => (
                  <div
                    key={role}
                    style={{
                      ...styles.roleCard,
                      ...(selectedRole === role && styles.activeRole),
                    }}
                    onClick={() => setSelectedRole(role)}
                  >
                    <h4>{role}</h4>
                    <p style={{ fontSize: 13, color: "#6b7280" }}>
                      Manage your loan activities easily.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div style={styles.formCard}>
              <h3>2. Your Credentials</h3>

              <input style={styles.input} placeholder="First Name" />
              <input style={styles.input} placeholder="Last Name" />
              <input style={styles.input} placeholder="Work Email" />
              <input
                style={styles.input}
                placeholder="Password"
                type="password"
              />
              <input
                style={styles.input}
                placeholder="Confirm Password"
                type="password"
              />

              {/* 🔥 selected role display */}
              <div style={styles.roleSelectedBox}>
                Selected Role: <b>{selectedRole}</b>
              </div>

              <button
                style={styles.primaryBtn}
                onClick={handleCreateAccount}
              >
                Create {selectedRole} Account
              </button>

              <p style={styles.signinText}>
                Already have an account?{" "}
                <Link to="/login" style={styles.link}>
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    background: "#f8fafc",
    minHeight: "100vh",
    padding: "40px 20px",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
  },

  heading: {
    textAlign: "center",
    marginBottom: 8,
  },

  sub: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 40,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 30,
  },

  roleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 16,
  },

  roleCard: {
    padding: 16,
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    background: "white",
    cursor: "pointer",
    transition: "0.2s",
  },

  // 🔥 highlight selected role
  activeRole: {
    border: "2px solid #2563eb",
    background: "#eff6ff",
  },

  formCard: {
    background: "white",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  input: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  },

  roleSelectedBox: {
    background: "#f1f5f9",
    padding: "10px 12px",
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 10,
    fontSize: 14,
  },

  primaryBtn: {
    width: "100%",
    padding: 12,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 10,
    fontWeight: "600",
  },

  signinText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 13,
  },

  link: {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: 500,
    textDecoration: "none",
  },
};

export default Signup;