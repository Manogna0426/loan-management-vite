import LandingNavbar from "../components/LandingNavbar.jsx";

function AnalystDashboard() {
  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.logo}>LoanFlow</div>

          <nav style={styles.nav}>
            <p style={styles.navActive}>Market Data</p>
            <p style={styles.navItem}>Reports</p>
            <p style={styles.navItem}>Risk Analysis</p>
            <p style={styles.navItem}>KPIs</p>
          </nav>

          <p style={styles.logout}>Logout</p>
        </aside>

        {/* Main */}
        <main style={styles.main}>
          <h2 style={styles.heading}>Market Data & Portfolio Insights</h2>
          <p style={styles.sub}>
            Real-time financial analytics and risk assessment metrics.
          </p>

          {/* Top stats */}
          <div style={styles.statsGrid}>
            {[
              { label: "Total Portfolio Value", value: "$24,850,200" },
              { label: "Avg Interest Rate", value: "7.42%" },
              { label: "Portfolio Default Rate", value: "1.24%" },
              { label: "Net Profitability", value: "$1,420,000" },
            ].map((item, i) => (
              <div key={i} style={styles.statCard}>
                <p style={styles.statLabel}>{item.label}</p>
                <h3>{item.value}</h3>
              </div>
            ))}
          </div>

          {/* Chart + Risk */}
          <div style={styles.middleGrid}>
            <div style={styles.chartCard}>
              <h3>Disbursement vs Repayment Trend</h3>
              <div style={styles.fakeChart}>
                📊 Chart Area (connect later)
              </div>
            </div>

            <div style={styles.riskCard}>
              <h4>Portfolio Risk Profile</h4>
              <div style={styles.riskCircle}>🟢</div>

              <ul style={styles.riskList}>
                <li>Healthy Assets — 65%</li>
                <li>Under Review — 25%</li>
                <li>Critical Risk — 10%</li>
              </ul>
            </div>
          </div>

          {/* Table */}
          <div style={styles.tableCard}>
            <h3>Portfolio Performance Detail</h3>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Borrower</th>
                  <th>Principal</th>
                  <th>Rate</th>
                  <th>Risk</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LN-842</td>
                  <td>Acme Corp</td>
                  <td>$250,000</td>
                  <td>4.5%</td>
                  <td>Low</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>LN-902</td>
                  <td>Sarah Jenkins</td>
                  <td>$85,000</td>
                  <td>5.2%</td>
                  <td>High</td>
                  <td>Review</td>
                </tr>
                <tr>
                  <td>LN-771</td>
                  <td>Techflow Inc</td>
                  <td>$120,000</td>
                  <td>6.1%</td>
                  <td>Medium</td>
                  <td>Active</td>
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

  riskCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    textAlign: "center",
  },

  riskCircle: {
    fontSize: 48,
    margin: "12px 0",
  },

  riskList: {
    fontSize: 14,
    color: "#374151",
    textAlign: "left",
    paddingLeft: 18,
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

export default AnalystDashboard;