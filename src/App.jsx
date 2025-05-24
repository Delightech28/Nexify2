// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Vendors/Sidebar";
import Header from "./Components/Vendors/Header";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import BuyersRoutes from "./Components/Buyers/BuyersRoutes"; // Import the shoe app routes
import ShoppingCartPage from './Pages/ShoppingCartPage';
import CheckoutPage from './Pages/CheckoutPage';
import AccountOverviewPage from './Pages/AccountOverviewPage';
import VendorSignIn from './Components/Vendors/VendorSignIn';
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <Routes>
        {/* Landing Page as Default Route */}
        <Route path="/" element={<LandingPage />} />
         {/* Sign Up and Login Routes */}
         <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              <div className="flex-1">
                <Header toggleSidebar={toggleSidebar} />
                <div className="p-4 md:p-6">
                  <DashboardPage />
                </div>
              </div>
            </div>
          }
        />
          {/* cart Routes */}
          <Route path="/cart" element={<ShoppingCartPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />
         {/* Shoe App Routes */}
         <Route path="/buyers/*" element={<BuyersRoutes />} />
         <Route path="/account-overview" element={<AccountOverviewPage />} />
         <Route path="/vendor-signin" element={<VendorSignIn />} />
        {/* Other Routes */}
        {/* <Route path="/" element={<h1 className="p-4 text-xl md:p-6 md:text-2xl">Home Page</h1>} /> */}
        <Route path="/calendar" element={<h1 className="p-4 text-xl md:p-6 md:text-2xl">Calendar Page</h1>} />
        <Route path="/settings" element={<h1 className="p-4 text-xl md:p-6 md:text-2xl">Settings Page</h1>} />
        <Route path="*" element={<h1>404 - No Routes Matched</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
