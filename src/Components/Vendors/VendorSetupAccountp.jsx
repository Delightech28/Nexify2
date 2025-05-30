// src/Components/Vendors/VendorPersonalInfo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Font Awesome eye icons
import ReactCountryFlag from "react-country-flag"; // Import react-country-flag
import VendorsImage from '../../assets/vendors.png';

const VendorPersonalInfo = () => {
  // List of countries with their codes (you can expand this or use a library like country-list)
  const countries = [
    { name: "Nigeria", code: "NG", phoneCode: "+234" },
    { name: "Kenya", code: "KE", phoneCode: "+254" },
    { name: "Ghana", code: "GH", phoneCode: "+233" },
    { name: "Uganda", code: "UG", phoneCode: "+256" },
    { name: "South Africa", code: "ZA", phoneCode: "+27" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to Nigeria
  const [phoneNumber, setPhoneNumber] = useState("9163854228"); // Removed the hardcoded +234
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle country selection
  const handleCountryChange = (e) => {
    const selected = countries.find((country) => country.phoneCode === e.target.value);
    setSelectedCountry(selected);
    // Optionally, reset phone number or adjust based on new country code
    setPhoneNumber("");
  };

  const handleNext = () => {
    // Validation for phone number (basic check for non-empty and format)
    if (!phoneNumber) {
      setError("Phone number is required.");
      return;
    }

    // Password validation (at least 8 characters, capital letter, lowercase letter, number, special character)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      setError("Password is required.");
      return;
    } else if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters and contain a capital letter, lowercase letter, number, and special character."
      );
      return;
    }

    // Confirm password validation
    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // Proceed to the next step (e.g., navigate to the next page)
    navigate("/vendor-shop-info"); // Placeholder route
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
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
      </div>

      {/* Heading and Subheading */}
      <div className="w-full max-w-md px-4 mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Personal Information
        </h1>
        <p className="text-gray-600">
          Setup your password and provide your phone number
        </p>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md px-4 mb-4">
        {/* Phone Number Input with Country Dropdown */}
        <div className="mb-4">
          <div className="relative flex items-center">
            {/* Country Dropdown */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
              <select
                value={selectedCountry.phoneCode}
                onChange={handleCountryChange}
                className="bg-transparent text-gray-800 border-none focus:outline-none flex items-center"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.phoneCode}>
                    {country.phoneCode}
                  </option>
                ))}
              </select>
              <ReactCountryFlag
                countryCode={selectedCountry.code}
                svg
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "8px",
                }}
              />
            </div>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setError(""); // Clear error on input change
              }}
              className={`w-full pl-28 p-3 border ${
                error && error.includes("Phone") ? "border-red-500" : "border-gray-300"
              } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              placeholder="Password *"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Clear error on input change
              }}
              className={`w-full p-3 border ${
                error && error.includes("Password") ? "border-red-500" : "border-gray-300"
              } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
Clr              />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
              placeholder="Confirm Password *"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(""); // Clear error on input change
              }}
              className={`w-full p-3 border ${
                error && error.includes("Passwords") ? "border-red-500" : "border-gray-300"
              } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
        </div>

        {/* Password Requirements */}
        <p className="text-gray-600 text-sm mb-4">
          Password should contain at least 8 characters containing a capital letter, a lower letter, a number and special character.
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
        >
          NEXT
        </button>
      </div>

    </div>
  );
};

export default VendorPersonalInfo;