// src/Components/Vendors/VendorShopInfo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaUser, FaInfoCircle } from "react-icons/fa"; // Import icons from react-icons
import VendorsImage from '../../assets/vendors.png';

const VendorShopInfo = () => {
  const [accountType, setAccountType] = useState("Business"); // Default to Business as per screenshot
  const [shopName, setShopName] = useState(""); // Pre-filled as per screenshot
  const [shippingZone, setShippingZone] = useState(""); // Pre-filled as per screenshot
  const [hearAbout, setHearAbout] = useState(""); // Pre-filled as per screenshot
  const [agreement, setAgreement] = useState(true); // Checkbox checked as per screenshot
  const [error, setError] = useState("");
  const [showAccountTypeTooltip, setShowAccountTypeTooltip] = useState(false); // State for Account type tooltip
  const [showShopNameTooltip, setShowShopNameTooltip] = useState(false); // State for Shop name tooltip
  const [hoverAccountTypeTooltip, setHoverAccountTypeTooltip] = useState(false);
  const [hoverShopNameTooltip, setHoverShopNameTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  // Shipping zones grouped by country
  const shippingZones = [
    {
      country: "Nigeria",
      zones: ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"],
    },
    {
      country: "Kenya",
      zones: ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru"],
    },
    {
      country: "Ghana",
      zones: ["Accra", "Kumasi", "Tamale", "Takoradi", "Tema"],
    },
    {
      country: "Uganda",
      zones: ["Kampala", "Entebbe", "Jinja", "Gulu", "Mbarara"],
    },
    {
      country: "South Africa",
      zones: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Bloemfontein"],
    },
  ];

  // Options for "How did you hear about Jumia?"
  const hearAboutOptions = [
    "Social Media",
    "Friend or Family",
    "Online Advertisement",
    "Search Engine",
    "Other",
  ];

  const handleSubmit = () => {
    // Validation
    if (!shopName) {
      setError("Shop name is required.");
      return;
    }
    if (!shippingZone) {
      setError("Shipping zone is required.");
      return;
    }
    if (!hearAbout) {
      setError("Please select how you heard about Jumia.");
      return;
    }
    if (!agreement) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // Show the modal instead of navigating immediately
    setShowModal(true);
  };

  const handleTooltipClick = (setShowTooltip) => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setError("");
    // Proceed to the next step (e.g., navigate to a success page)
    navigate("/vendor-success"); // Placeholder route
  };

  const handleCancel = () => {
    setShowModal(false);
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
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>

      {/* Heading and Subheading */}
      <div className="w-full max-w-md px-4 mb-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Shop Information
        </h1>
        <p className="text-gray-600">
          Setup your shop by completing the following details
        </p>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md px-4 mb-4">
        {/* Account Type */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <label className="block text-gray-600">Account type *</label>
            <div
              className="relative"
              onMouseEnter={() => setHoverAccountTypeTooltip(true)}
              onMouseLeave={() => setHoverAccountTypeTooltip(false)}
            >
              <FaInfoCircle
                className="ml-2 text-blue-500 cursor-pointer"
                size={16}
                onClick={() => handleTooltipClick(setShowAccountTypeTooltip)}
                aria-label="More information about account type"
              />
              {(showAccountTypeTooltip || hoverAccountTypeTooltip) && (
                <div className="absolute bg-gray-800 text-white text-xs rounded-lg py-1 px-2 -mt-8 -ml-12 w-40 z-10">
                  Choose Business if you are a registered company, or Individual if you are a sole trader.
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-4">
            <label className="flex items-center w-1/2 p-3 border border-gray-300 rounded-lg bg-white cursor-pointer">
              <input
                type="radio"
                value="Business"
                checked={accountType === "Business"}
                onChange={(e) => setAccountType(e.target.value)}
                className="mr-2 w-5 h-5 text-green-500 focus:ring-green-500"
              />
              <FaBriefcase className="mr-2 text-green-500" size={20} />
              <span className="text-gray-800">Business</span>
            </label>
            <label className="flex items-center w-1/2 p-3 border border-gray-300 rounded-lg bg-white cursor-pointer">
              <input
                type="radio"
                value="Individual"
                checked={accountType === "Individual"}
                onChange={(e) => setAccountType(e.target.value)}
                className="mr-2 w-5 h-5 text-green-500 focus:ring-green-500"
              />
              <FaUser className="mr-2 text-green-500" size={20} />
              <span className="text-gray-800">Individual</span>
            </label>
          </div>
        </div>

        {/* Shop Name */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Shop name *"
            value={shopName}
            onChange={(e) => {
              setShopName(e.target.value);
              setError(""); // Clear error on input change
            }}
            className={`w-full p-3 border ${
              error && error.includes("Shop name") ? "border-red-500" : "border-gray-300"
            } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onMouseEnter={() => setHoverShopNameTooltip(true)}
            onMouseLeave={() => setHoverShopNameTooltip(false)}
          >
            <FaInfoCircle
              className="text-blue-500 cursor-pointer"
              size={16}
              onClick={() => handleTooltipClick(setShowShopNameTooltip)}
              aria-label="More information about shop name"
            />
            {(showShopNameTooltip || hoverShopNameTooltip) && (
              <div className="absolute bg-gray-800 text-white text-xs rounded-lg py-1 px-2 -mt-10 -ml-24 w-48 z-10">
                Your shop name should be unique and reflect your brand identity.
              </div>
            )}
          </div>
        </div>

        {/* Shipping Zone */}
        <div className="mb-4">
          <select
            value={shippingZone}
            onChange={(e) => {
              setShippingZone(e.target.value);
              setError(""); // Clear error on input change
            }}
            className={`w-full p-3 border ${
              error && error.includes("Shipping zone") ? "border-red-500" : "border-gray-300"
            } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none`}
          >
            <option value="" disabled>
              Select Shipping Zone *
            </option>
            {shippingZones.map((country) => (
              <optgroup key={country.country} label={country.country}>
                {country.zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* How did you hear about Jumia? */}
        <div className="mb-4 relative">
          <select
            value={hearAbout}
            onChange={(e) => {
              setHearAbout(e.target.value);
              setError(""); // Clear error on input change
            }}
            className={`w-full p-3 border ${
              error && error.includes("heard about") ? "border-red-500" : "border-gray-300"
            } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none`}
          >
            <option value="" disabled>
              How did you hear about Jumia? *
            </option>
            {hearAboutOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <div className="mb-4 flex items-start">
          <input
            type="checkbox"
            checked={agreement}
            onChange={(e) => {
              setAgreement(e.target.checked);
              setError(""); // Clear error on input change
            }}
            className="mt-1 mr-2 w-5 h-5 text-green-500 focus:ring-green-500"
          />
          <label className="text-gray-600 text-sm">
            I hereby confirm that I have read and agree to the Nexify seller contract, Nexify codes, policies and guidelines and Privacy Notice and Cookie Notice referenced therein.
          </label>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
        >
          SUBMIT
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Are you sure?
            </h2>
            <p className="text-gray-600 mb-4">
              PLEASE VALIDATE YOUR ACCOUNT TYPE BEFORE YOU PROCEED. YOU'LL NOT
              BE ALLOWED TO CHANGE THIS LATER.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li>
                <span className="font-semibold">Individual</span> IF YOU ARE A
                SELLER WITHOUT ANY REGISTERED OR INCORPORATED COMPANY.
              </li>
              <li>
                <span className="font-semibold">Business</span> IF YOU ARE A
                REGISTERED OR INCORPORATED COMPANY WITH ACCEPTABLE DOCUMENTS.
              </li>
            </ul>
            <div className="flex justify-between">
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                No, I want to change
              </button>
              <button
                onClick={handleConfirm}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Yes, I am sure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorShopInfo;