import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar.jsx";

function BorrowerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div>
            <div style={styles.logo}>LoanFlow</div>

            <nav style={styles.nav}>
              <p style={styles.navActive}>My Loans</p>
              <p style={styles.navItem}>Apply Now</p>
              <p style={styles.navItem}>Payments</p>
              <p style={styles.navItem}>Account</p>
            </nav>
          </div>

          <p style={styles.logout} onClick={handleLogout}>
            Logout
          </p>
        </aside>

        {/* Main */}
        <main style={styles.main}>
          <h2 style={styles.heading}>Borrower Dashboard</h2>
          <p style={styles.sub}>
            Welcome back! Here is your loan portfolio overview.
          </p>

          {/* Top stats */}
          <div style={styles.statsGrid}>
            {[
              { label: "Total Outstanding", value: "$14,250.4" },
              { label: "Next Payment", value: "$450" },
              { label: "Interest Paid (YTD)", value: "$1,120.5" },
            ].map((item, i) => (
              <div key={i} style={styles.statCard}>
                <p style={styles.statLabel}>{item.label}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>

          {/* Active Loan + Right Panel */}
          <div style={styles.middleGrid}>
            <div style={styles.loanCard}>
              <h3>Active Loan: Home Improvement Loan</h3>

              <p style={styles.progressLabel}>Repayment Progress</p>
              <div style={styles.progressBar}>
                <div style={styles.progressFill} />
              </div>

              <div style={styles.loanMeta}>
                <span>Total Borrowed: $25,000</span>
                <span>Current Balance: $14,250.4</span>
              </div>

              <h4 style={{ marginTop: 16 }}>Upcoming Payment Schedule</h4>
              <ul style={styles.paymentList}>
                <li>Oct 15, 2024 — $450</li>
                <li>Nov 15, 2024 — $450</li>
                <li>Dec 15, 2024 — $450</li>
              </ul>
            </div>

            <div style={styles.sideCard}>
              <h4>Need more capital?</h4>
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                Apply for a new loan in minutes with our streamlined process.
              </p>

              <button style={styles.primaryBtn}>Apply for Loan</button>

              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: 13 }}>Payment Auto-Pay</p>
                <p style={{ fontSize: 13, color: "#6b7280" }}>
                  Status: Enabled
                </p>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div style={styles.tableCard}>
            <h3>Transaction History</h3>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Transaction ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sep 15, 2024</td>
                  <td>Monthly Installment</td>
                  <td>TX-9041</td>
                  <td>-$450</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Aug 15, 2024</td>
                  <td>Monthly Installment</td>
                  <td>TX-8821</td>
                  <td>-$450</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Jul 15, 2024</td>
                  <td>Monthly Installment</td>
                  <td>TX-7711</td>
                  <td>-$450</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    background: "#f3f4f6",
    minHeight: "100vh",
  },

  sidebar: {
    width: 220,
    background: "#2563eb",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "white",
  },

  logo: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  navItem: {
    cursor: "pointer",
    fontSize: 14,
    opacity: 0.85,
    padding: "6px 8px",
    borderRadius: 8,
  },

  navActive: {
    background: "rgba(255,255,255,0.2)",
    padding: "8px 10px",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
  },

  logout: {
    fontSize: 14,
    cursor: "pointer",
    opacity: 0.8,
  },

  main: {
    flex: 1,
    padding: 24,
  },

  heading: {
    marginBottom: 4,
  },

  sub: {
    color: "#6b7280",
    fontSize: 14,
    marginBottom: 24,
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginBottom: 24,
  },

  statCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  statLabel: {
    fontSize: 12,
    color: "#6b7280",
  },

  middleGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 16,
    marginBottom: 24,
  },

  loanCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  progressLabel: {
    fontSize: 13,
    marginTop: 10,
  },

  progressBar: {
    height: 8,
    background: "#e5e7eb",
    borderRadius: 6,
    marginTop: 6,
  },

  progressFill: {
    width: "43%",
    height: "100%",
    background: "#2563eb",
    borderRadius: 6,
  },

  loanMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    marginTop: 10,
    color: "#374151",
  },

  paymentList: {
    marginTop: 10,
    paddingLeft: 16,
    fontSize: 14,
    color: "#374151",
  },

  sideCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  primaryBtn: {
    width: "100%",
    padding: 10,
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 10,
  },

  tableCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 12,
  },
};

export default BorrowerDashboard;