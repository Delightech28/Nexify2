import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, FaCalendar, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/dashboard", icon: <FaChartBar />, label: "Dashboard" },
    { path: "/calendar", icon: <FaCalendar />, label: "Calendar" },
    { path: "/settings", icon: <FaCog />, label: "Settings" },
    { path: "/signout", icon: <FaSignOutAlt />, label: "Sign out" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-blue-600 text-white flex flex-col p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
    >
      <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Nexify</h1>
      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={toggleSidebar} // Close sidebar on link click
            className={`flex items-center p-2 md:p-3 mb-2 rounded-lg ${
              location.pathname === item.path ? "bg-blue-800" : "hover:bg-blue-700"
            }`}
          >
            <span className="mr-2 md:mr-3">{item.icon}</span>
            <span className="text-sm md:text-base">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

// Wrapper component to manage state
const SidebarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />;
};

export default SidebarWrapper;


