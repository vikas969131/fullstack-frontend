// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ProjectPage from "./admin-pages/ProjectPage";
// import ClientPage from "./admin-pages/ClientPage";
// import ContactPage from "./admin-pages/ContactPage";
// import SubscriberPage from "./admin-pages/SubscriberPage";

// const AdminDashboard = () => {
//   return (
//     <Router>
//       <div style={{ display: "flex" }}>
//         <nav style={{ width: "220px", background: "#0d47a1", color: "white", minHeight: "100vh", padding: "1rem" }}>
//           <h2>Admin Panel</h2>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             <li><Link to="/admin/projects" style={linkStyle}>Projects</Link></li>
//             <li><Link to="/admin/clients" style={linkStyle}>Clients</Link></li>
//             <li><Link to="/admin/contacts" style={linkStyle}>Contacts</Link></li>
//             <li><Link to="/admin/subscribers" style={linkStyle}>Subscribers</Link></li>
//           </ul>
//         </nav>

//         <main style={{ flex: 1, padding: "2rem" }}>
//           <Routes>
//             <Route path="/admin/projects" element={<ProjectPage />} />
//             <Route path="/admin/clients" element={<ClientPage />} />
//             <Route path="/admin/contacts" element={<ContactPage />} />
//             <Route path="/admin/subscribers" element={<SubscriberPage />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// const linkStyle = {
//   display: "block",
//   color: "white",
//   textDecoration: "none",
//   padding: "0.5rem 0",
// };

// export default AdminDashboard;











import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {
  Menu as MenuIcon,
  LayoutDashboard,
  Users,
  Mail,
  MailCheck
} from "lucide-react";

import ProjectPage from "./admin-pages/ProjectPage";
import ClientPage from "./admin-pages/ClientPage";
import ContactPage from "./admin-pages/ContactPage";
import SubscriberPage from "./admin-pages/SubscriberPage";

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* ─── Sidebar ─── */}
        <aside
          className={`flex flex-col bg-blue-900 text-white transition-all duration-300 shadow-md ${
            collapsed ? "w-16" : "w-64"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-blue-700">
            {!collapsed && <h2 className="text-lg font-semibold tracking-wide">Admin Panel</h2>}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-white hover:bg-blue-800 p-1 rounded"
            >
              <MenuIcon size={20} />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-2">
            <NavItem to="/admin/projects" icon={<LayoutDashboard size={18} />} collapsed={collapsed}>Projects</NavItem>
            <NavItem to="/admin/clients" icon={<Users size={18} />} collapsed={collapsed}>Clients</NavItem>
            <NavItem to="/admin/contacts" icon={<Mail size={18} />} collapsed={collapsed}>Contacts</NavItem>
            <NavItem to="/admin/subscribers" icon={<MailCheck size={18} />} collapsed={collapsed}>Subscribers</NavItem>
          </nav>
        </aside>

        {/* ─── Main ─── */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white px-6 py-4 border-b shadow-sm flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            <button className="text-sm text-gray-600 hover:text-gray-800">Logout</button>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/admin/projects" element={<ProjectPage />} />
              <Route path="/admin/clients" element={<ClientPage />} />
              <Route path="/admin/contacts" element={<ContactPage />} />
              <Route path="/admin/subscribers" element={<SubscriberPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

const NavItem = ({ to, icon, children, collapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `group flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
        isActive
          ? "bg-blue-700 text-yellow-300 shadow-md"
          : "text-blue-100 hover:bg-blue-800 hover:text-white"
      }`
    }
  >
    <span className="flex-shrink-0">{icon}</span>
    {!collapsed && <span className="truncate">{children}</span>}
  </NavLink>
);
