import LandingNavbar from "../components/LandingNavbar.jsx";

function LenderDashboard() {
  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.logo}>LoanFlow</div>

          <nav style={styles.nav}>
            <p style={styles.navActive}>Dashboard</p>
            <p style={styles.navItem}>Loan Offers</p>
            <p style={styles.navItem}>Active Loans</p>
            <p style={styles.navItem}>Analytics</p>
          </nav>

          <p style={styles.logout}>Logout</p>
        </aside>

        {/* Main */}
        <main style={styles.main}>
          <h2 style={styles.heading}>Lender Dashboard</h2>
          <p style={styles.sub}>
            Manage your loan portfolio and monitor borrower performance.
          </p>

          {/* Top stats */}
          <div style={styles.statsGrid}>
            {[
              { label: "Total Deployed", value: "$1,245,000" },
              { label: "Active Borrowers", value: "142" },
              { label: "Interest Earned", value: "$84,320" },
              { label: "Overdue Amount", value: "$12,400" },
            ].map((item, i) => (
              <div key={i} style={styles.statCard}>
                <p style={styles.statLabel}>{item.label}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>

          {/* Chart + tools */}
          <div style={styles.middleGrid}>
            <div style={styles.chartCard}>
              <h3>Portfolio Performance</h3>
              <div style={styles.fakeChart}>
                📊 Chart Area (connect later)
              </div>
            </div>

            <div style={styles.sideCard}>
              <h4>Quick Offer Tools</h4>
              <button style={styles.primaryBtn}>
                + Create New Loan Offer
              </button>

              <div style={{ marginTop: 12, fontSize: 14 }}>
                <p>Small Business Plan</p>
                <p>Personal Micro-Loan</p>
                <p>Real Estate Bridge</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div style={styles.tableCard}>
            <h3>Active Borrowers & Payments</h3>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Borrower</th>
                  <th>Loan Amount</th>
                  <th>Progress</th>
                  <th>Next Payment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>James Wilson</td>
                  <td>$25,000</td>
                  <td>80%</td>
                  <td>2024-06-15</td>
                  <td>Current</td>
                </tr>
                <tr>
                  <td>Elena Rodriguez</td>
                  <td>$15,000</td>
                  <td>65%</td>
                  <td>2024-06-20</td>
                  <td>Current</td>
                </tr>
                <tr>
                  <td>Marcus Chen</td>
                  <td>$42,000</td>
                  <td>45%</td>
                  <td>2024-05-30</td>
                  <td style={{ color: "red" }}>Late</td>
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
    background: "#f8fafc",
    minHeight: "100vh",
  },

  sidebar: {
    width: 220,
    background: "white",
    borderRight: "1px solid #e5e7eb",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  logo: {
    fontWeight: "bold",
    color: "#2563eb",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  navItem: {
    color: "#374151",
    fontSize: 14,
    cursor: "pointer",
  },

  navActive: {
    color: "#2563eb",
    fontWeight: 600,
    fontSize: 14,
  },

  logout: {
    color: "#ef4444",
    fontSize: 14,
    cursor: "pointer",
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
    gridTemplateColumns: "repeat(4, 1fr)",
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

  chartCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  fakeChart: {
    height: 220,
    background: "#f1f5f9",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    color: "#64748b",
  },

  sideCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  primaryBtn: {
    width: "100%",
    padding: "10px",
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

export default LenderDashboard;