// src/Components/Vendors/VendorSignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // For email and password icons
import VendorsImage from '../../assets/nexifylogo.png'; // Replace with the actual path to the Jumia logo

const VendorLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Add your login logic here (e.g., API call)
    // For now, we'll navigate to a dashboard or home page
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Vendor Center
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-green-500">
              <FaUser className="text-gray-500 mx-3" size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full p-2 text-gray-800 focus:outline-none rounded-lg"
                placeholder=""
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-green-500">
              <FaLock className="text-gray-500 mx-3" size={16} />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full p-2 text-gray-800 focus:outline-none rounded-lg"
                placeholder=""
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Remember Me and Log In Button */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 w-4 h-4 text-green-500 focus:ring-green-500"
              />
              <span className="text-sm">Remember me</span>
            </label>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              LOG IN
            </button>
          </div>
        </form>
<hr className="mb-5" style={{color: 'green'}}/>
        {/* Links */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            JOINING US FROM SELLER CENTER?{" "}
            <a href="#" className="text-green-500 hover:underline">
              CLICK HERE
            </a>
          </p>
          <p className="text-gray-600 text-sm mt-5">
            <a href="#" className="text-green-500 hover:underline">
              FORGOT PASSWORD?
            </a>
          </p>
        </div>
      </div>

      {/* Jumia Logo */}
      <div className="mt-6">
        <img
          src={VendorsImage}
          alt="Jumia Logo"
          className="h-12 w-12"
        />
      </div>
    </div>
  );
};

export default VendorLogIn;