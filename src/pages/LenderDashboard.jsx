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

function LenderDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const chartData = [
    { name: "Jan", principal: 45, interest: 12 },
    { name: "Feb", principal: 55, interest: 15 },
    { name: "Mar", principal: 50, interest: 14 },
    { name: "Apr", principal: 65, interest: 18 },
    { name: "May", principal: 60, interest: 19 },
    { name: "Jun", principal: 75, interest: 22 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-10">LoanFlow</h2>

          <nav className="space-y-4 text-sm">
            <p className="font-semibold">Dashboard</p>
            <p className="opacity-80 hover:opacity-100 cursor-pointer">
              Loan Offers
            </p>
            <p className="opacity-80 hover:opacity-100 cursor-pointer">
              Active Loans
            </p>
            <p className="opacity-80 hover:opacity-100 cursor-pointer">
              Analytics
            </p>
          </nav>
        </div>

        {/* Logout Fixed */}
        <p
          onClick={handleLogout}
          className="opacity-80 hover:opacity-100 cursor-pointer text-sm"
        >
          Logout
        </p>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10 space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Lender Dashboard</h1>

          <div className="space-x-3">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
              Inbox
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              New Loan Offer
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          <StatCard value="$1,245,000" label="Total Deployed" />
          <StatCard value="142" label="Active Borrowers" />
          <StatCard value="$84,320" label="Interest Accrued" />
          <StatCard value="$12,400" label="Overdue Amount" />
        </div>

        {/* Chart + Tools */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-6">
              Portfolio Performance
            </h2>

            <div className="h-72">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="principal"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="interest"
                    stroke="#ec4899"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm space-y-5">
            <h2 className="text-lg font-semibold">Quick Offer Tools</h2>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md">
              Create New Loan Offer
            </button>

            <div>
              <h3 className="font-medium mb-2">Active Templates</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Small Business Flex</li>
                <li>Personal Micro-Loan</li>
                <li>Real Estate Bridge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-6">
            Active Borrowers & Payments
          </h2>

          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Borrower</th>
                <th className="text-left p-3">Loan Amount</th>
                <th className="text-left p-3">Progress</th>
                <th className="text-left p-3">Next Payment</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3">James Wilson</td>
                <td className="p-3">$25,000</td>
                <td className="p-3">50%</td>
                <td className="p-3">2024-06-15</td>
                <td className="p-3 text-green-600">Current</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Elena Rodriguez</td>
                <td className="p-3">$15,000</td>
                <td className="p-3">93%</td>
                <td className="p-3">2024-06-12</td>
                <td className="p-3 text-green-600">Current</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

export default LenderDashboard;