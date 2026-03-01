import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import LenderDashboard from "./pages/LenderDashboard";
import BorrowerDashboard from "./pages/BorrowerDashboard";
import AnalystDashboard from "./pages/AnalystDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/lender/*" element={<LenderDashboard />} />
        <Route path="/borrower/*" element={<BorrowerDashboard />} />
        <Route path="/analyst/*" element={<AnalystDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;