// src/Components/Vendors/VendorSetupAccount.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VendorsImage from '../../assets/vendors.png';

const VendorSetupAccount = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (!email) {
      setError("This field is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Proceed to the next step (e.g., navigate to the next page)
      navigate("/vendor-complete-profile"); // Placeholder route
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Illustration Section */}
      <div className="w-full max-w-md px-4 mt-8 mb-6">
        <img
          src={VendorsImage}
          alt="Vendor Shop Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center mb-6">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
        <div className="w-8 h-1 bg-green-100 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
        <div className="w-8 h-1 bg-green-100 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
      </div>

      {/* Heading and Subheading */}
      <div className="w-full max-w-md px-4 mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Setup your account
        </h1>
        <p className="text-gray-600">
          Please provide your email address to create your seller account!
        </p>
      </div>

      {/* Email Input */}
      <div className="w-full max-w-md px-4 mb-4">
        <input
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); // Clear error on input change
          }}
          className={`w-full p-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600 transition-colors cursor-pointer"
        >
          VERIFY
        </button>
      </div>

      {/* Language Selector */}
      <div className="absolute bottom-4 right-4 flex items-center">
        <span className="mr-2 text-gray-600">🌐</span>
        <select className="bg-transparent text-gray-600 border-none focus:outline-none">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  );
};

export default VendorSetupAccount;