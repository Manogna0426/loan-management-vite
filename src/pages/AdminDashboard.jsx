import LandingNavbar from "../components/LandingNavbar.jsx";

function AdminDashboard() {
  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.logo}>LoanFlow</div>

          <nav style={styles.nav}>
            <p style={styles.navItemActive}>Overview</p>
            <p style={styles.navItem}>User Management</p>
            <p style={styles.navItem}>System Logs</p>
            <p style={styles.navItem}>Security</p>
          </nav>

          <p style={styles.logout}>Logout</p>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          <div style={styles.headerRow}>
            <div>
              <h2 style={styles.heading}>System Overview</h2>
              <p style={styles.sub}>
                Monitor platform operations and health in real-time.
              </p>
            </div>

            <div style={styles.headerBtns}>
              <button style={styles.lightBtn}>Export Data</button>
              <button style={styles.primaryBtn}>Live Monitor</button>
            </div>
          </div>

          {/* Stats Cards */}
          <div style={styles.statsGrid}>
            {[
              { label: "Total Platform Volume", value: "$12.8M" },
              { label: "Active Users", value: "2,842" },
              { label: "System Uptime", value: "99.98%" },
              { label: "Pending Approvals", value: "24" },
            ].map((card, i) => (
              <div key={i} style={styles.statCard}>
                <p style={styles.statLabel}>{card.label}</p>
                <h3 style={styles.statValue}>{card.value}</h3>
              </div>
            ))}
          </div>

          {/* Chart + Side Panel */}
          <div style={styles.middleGrid}>
            {/* Chart */}
            <div style={styles.chartCard}>
              <h3>Platform Growth</h3>
              <div style={styles.fakeChart}>
                📈 Chart Area (you can connect chart later)
              </div>
            </div>

            {/* Top Users */}
            <div style={styles.sideCard}>
              <h4>Top Users</h4>
              <ul style={styles.userList}>
                <li>John Smith — 128 Actions</li>
                <li>Alice Wong — 94 Actions</li>
                <li>Robert Fox — 42 Actions</li>
              </ul>
            </div>
          </div>

          {/* Audit Logs */}
          <div style={styles.tableCard}>
            <h3>System Audit Logs</h3>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2 mins ago</td>
                  <td>Sarah Jenkins</td>
                  <td>Created Loan Offer</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td>15 mins ago</td>
                  <td>System</td>
                  <td>Daily Backup Completed</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td>42 mins ago</td>
                  <td>Michael Chen</td>
                  <td>Failed Login Attempt</td>
                  <td>Warning</td>
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

  /* Sidebar */
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
    marginBottom: 20,
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  navItem: {
    color: "#374151",
    cursor: "pointer",
    fontSize: 14,
  },

  navItemActive: {
    color: "#2563eb",
    fontWeight: 600,
    fontSize: 14,
  },

  logout: {
    color: "#ef4444",
    fontSize: 14,
    cursor: "pointer",
  },

  /* Main */
  main: {
    flex: 1,
    padding: 24,
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  heading: {
    marginBottom: 4,
  },

  sub: {
    color: "#6b7280",
    fontSize: 14,
  },

  headerBtns: {
    display: "flex",
    gap: 10,
  },

  primaryBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },

  lightBtn: {
    background: "white",
    border: "1px solid #e5e7eb",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
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

  statValue: {
    marginTop: 6,
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
    height: 200,
    background: "#f1f5f9",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    marginTop: 12,
  },

  sideCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  userList: {
    marginTop: 10,
    paddingLeft: 16,
    color: "#374151",
    fontSize: 14,
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

export default AdminDashboard;