import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AnalystDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const trendData = [
    { month: "Jan", disbursement: 400000, repayment: 380000 },
    { month: "Feb", disbursement: 420000, repayment: 390000 },
    { month: "Mar", disbursement: 460000, repayment: 410000 },
    { month: "Apr", disbursement: 480000, repayment: 450000 },
    { month: "May", disbursement: 500000, repayment: 470000 },
    { month: "Jun", disbursement: 520000, repayment: 495000 },
  ];

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div>
          <div style={styles.logo}>LoanFlow</div>

          <nav style={styles.nav}>
            <p style={styles.navActive}>Market Data</p>
            <p style={styles.navItem}>Reports</p>
            <p style={styles.navItem}>Risk Analysis</p>
            <p style={styles.navItem}>KPIs</p>
          </nav>
        </div>

        {/* Logout Fixed */}
        <p style={styles.logout} onClick={handleLogout}>
          Logout
        </p>
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

            <div style={{ height: 250, marginTop: 16 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="disbursement"
                    stroke="#2563eb"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="repayment"
                    stroke="#10b981"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
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
    background: "#2563eb",
    color: "white",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  logo: {
    fontWeight: "bold",
    color: "white",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  navItem: {
    color: "#e0e7ff",
    fontSize: 14,
    cursor: "pointer",
  },

  navActive: {
    color: "white",
    fontWeight: 600,
    fontSize: 14,
  },

  logout: {
    color: "#fca5a5",
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