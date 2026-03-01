import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AdminDashboard() {
  const [active, setActive] = useState("Overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth token if stored
    navigate("/login"); // redirect to login page
  };

  const stats = [
    {
      label: "Total Platform Volume",
      value: "$12.8M",
      change: "+14.2% vs last month",
      positive: true,
    },
    {
      label: "Active Users",
      value: "2,842",
      change: "+5.1%",
      positive: true,
    },
    {
      label: "System Uptime",
      value: "99.98%",
      change: "Stable",
      positive: true,
    },
    {
      label: "Pending Approvals",
      value: "24",
      change: "-12%",
      positive: false,
    },
  ];

  const chartData = [
    { name: "Jan", loans: 12 },
    { name: "Feb", loans: 19 },
    { name: "Mar", loans: 8 },
    { name: "Apr", loans: 15 },
    { name: "May", loans: 22 },
    { name: "Jun", loans: 30 },
  ];

  const borrowerProgress = [
    { name: "Michael Lee", amount: "$120,000", progress: 75, status: "On Track" },
    { name: "Emma Davis", amount: "$85,000", progress: 45, status: "Pending" },
    { name: "Daniel Carter", amount: "$210,000", progress: 90, status: "Completed" },
    { name: "Sophia Martinez", amount: "$60,000", progress: 30, status: "Delayed" },
  ];

  const navItems = [
    "Overview",
    "User Management",
    "System Logs",
    "Security",
  ];

  return (
    <>
      <LandingNavbar />

      <div style={styles.wrapper}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div>
            <div style={styles.logo}>LoanFlow</div>

            <nav style={styles.nav}>
              {navItems.map((item) => (
                <p
                  key={item}
                  onClick={() => setActive(item)}
                  style={
                    active === item
                      ? styles.navItemActive
                      : styles.navItem
                  }
                >
                  {item}
                </p>
              ))}
            </nav>
          </div>

          {/* Logout Fixed */}
          <p style={styles.logout} onClick={handleLogout}>
            Logout
          </p>
        </aside>

        {/* Main */}
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

          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((card, i) => (
              <div key={i} style={styles.statCard}>
                <p style={styles.statLabel}>{card.label}</p>
                <h3 style={styles.statValue}>{card.value}</h3>
                <p
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    color: card.positive ? "#16a34a" : "#dc2626",
                  }}
                >
                  {card.change}
                </p>
              </div>
            ))}
          </div>

          {/* Chart + Top Users */}
          <div style={styles.middleGrid}>
            <div style={styles.chartCard}>
              <h3>Monthly Loans Issued</h3>
              <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="loans"
                      fill="#2563eb"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={styles.sideCard}>
              <h4>Top Users</h4>
              <ul style={styles.userList}>
                <li>John Smith — 128 Actions</li>
                <li>Alice Wong — 94 Actions</li>
                <li>Robert Fox — 42 Actions</li>
              </ul>
            </div>
          </div>

          {/* Borrowers Progress */}
          <div style={styles.progressCard}>
            <h3>Borrowers Progress</h3>

            <div style={{ marginTop: 16 }}>
              {borrowerProgress.map((borrower, i) => (
                <div key={i} style={styles.progressRow}>
                  <div style={{ width: "20%" }}>{borrower.name}</div>
                  <div style={{ width: "15%" }}>{borrower.amount}</div>

                  <div style={styles.progressBarWrapper}>
                    <div
                      style={{
                        ...styles.progressBar,
                        width: `${borrower.progress}%`,
                        background:
                          borrower.progress > 80
                            ? "#16a34a"
                            : borrower.progress > 50
                            ? "#2563eb"
                            : "#dc2626",
                      }}
                    />
                  </div>

                  <div style={{ width: "15%", fontSize: 14 }}>
                    {borrower.status}
                  </div>
                </div>
              ))}
            </div>
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

  navItemActive: {
    background: "rgba(255,255,255,0.2)",
    padding: "8px 10px",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
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

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    flexWrap: "wrap",
    gap: 12,
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
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
  },

  chartCard: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
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
    fontSize: 14,
  },

  progressCard: {
    marginTop: 24,
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
  },

  progressRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 14,
    fontSize: 14,
  },

  progressBarWrapper: {
    flex: 1,
    background: "#e5e7eb",
    borderRadius: 20,
    height: 8,
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    borderRadius: 20,
  },
};

export default AdminDashboard;