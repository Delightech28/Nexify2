// src/Components/Vendors/VendorSignUp.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlane, FaChevronDown } from "react-icons/fa"; // Added FaChevronDown for dropdown arrow
import ReactCountryFlag from "react-country-flag"; // Import the flag component
import VendorsImage from '../../assets/vendors.png';

const VendorSignUp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
    const navigate = useNavigate();

  const countries = [
    { name: "Select your country *", code: "", disabled: true },
    { name: "Nigeria", code: "NG" },
    { name: "Kenya", code: "KE" },
    { name: "Ghana", code: "GH" },
    { name: "Uganda", code: "UG" },
    { name: "South Africa", code: "ZA"},
    // Add more countries as needed
  ];

  const handleCountrySelect = (country) => {
    if (!country.disabled) {
      setSelectedCountry(country);
    }
    setIsDropdownOpen(false);
  };

  const handleNext = () => {
    if(selectedCountry){
        navigate("/vendor-setup-account");
    }
  }

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

      <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-8 h-1 bg-green-500 mx-1"></div>
            <div className="w-4 h-4 bg-green-100 rounded-full"></div>
            <div className="w-8 h-1 bg-green-100 mx-1"></div>
            <div className="w-4 h-4 bg-green-100 rounded-full"></div>
            <div className="w-8 h-1 bg-green-100 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
        <div className="w-8 h-1 bg-green-100 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
      </div>

      {/* Heading and Subheading */}
      <div className="w-full max-w-md px-4 mb-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Sell on Our Platform
        </h1>
        <p className="text-gray-600">Choose the country of your shop</p>
      </div>

      {/* Custom Country Selection Dropdown */}
      <div className="w-full max-w-md px-4 mb-4">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          >
            <span className="flex items-center">
              {selectedCountry && selectedCountry.code ? (
                <>
                  <ReactCountryFlag
                    countryCode={selectedCountry.code}
                    svg
                    style={{ width: "1.5em", height: "1.5em", marginRight: "8px" }}
                  />
                  {selectedCountry.name}
                </>
              ) : (
                "Select your country *"
              )}
            </span>
            <FaChevronDown className="text-gray-500" />
          </button>

          {isDropdownOpen && (
            <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {countries.map((country, index) => (
                <li
                  key={index}
                  onClick={() => handleCountrySelect(country)}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${
                    country.disabled ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  {country.code && (
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{ width: "1.5em", height: "1.5em", marginRight: "8px" }}
                    />
                  )}
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600 transition-colors cursor-pointer"
          disabled={!selectedCountry} // Disable button until a country is selected
          onClick={handleNext}
        >
          NEXT
        </button>
        <p className="text-gray-500 text-sm mt-2">
          Only for sellers registered & selling in their own country
        </p>
      </div>

      {/* OR Divider */}
      <div className="w-full max-w-md px-4 my-6 flex items-center">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="mx-4 text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Sell Globally Section */}
      <div className="w-full max-w-md px-4 mb-6">
        <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 py-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
          <FaPlane className="mr-2 text-blue-500" />
          Sell GLOBALLY on Our Platform
        </button>
        <p className="text-gray-600 text-sm mt-2">
          Register as a Global seller and sell your products across the region.
        </p>
        <a
          href="https://www.example.com/global"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          KNOW MORE about Global Selling
        </a>
      </div>

      {/* Sign In Link */}
      <div className="mb-8">
        <p className="text-gray-600">
          ALREADY HAVE AN ACCOUNT?
          <Link to="/vendor-signin" className="text-green-500 hover:underline ml-2">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VendorSignUp;