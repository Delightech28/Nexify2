// src/Components/Vendors/VendorSetupAccount.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VendorsImage from '../../assets/vendors.png';

const VendorSetupAccount = () => {
  const [email, setEmail] = useState("desolomon07@gmail.com"); // Pre-filled as per the screenshot
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(12); // Timer for resend code
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  // Handle timer for resend code
  React.useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleVerify = () => {
    if (!email) {
      setError("Email address is required.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    } else if (!verificationCode) {
      setError("Verification code is required.");
      return;
    }

    setError("");
    // Proceed to the next step (e.g., navigate to the next page)
    navigate("/vendor-setup-accountp"); // Placeholder route
  };

  const handleResendCode = () => {
    if (canResend) {
      setResendTimer(12); // Reset timer
      setCanResend(false);
      // Add logic to resend the code (e.g., API call)
      console.log("Resending verification code...");
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
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
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
          Enter your email address to create your seller account
        </p>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md px-4 mb-4">
        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(""); // Clear error on input change
            }}
            className={`w-full p-3 border ${
              error && error.includes("Email") ? "border-red-500" : "border-gray-300"
            } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
        </div>

        {/* Verification Code Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter the verification code *"
            name="email"
            value={verificationCode}
            onChange={(e) => {
              setVerificationCode(e.target.value);
              setError(""); // Clear error on input change
            }}
            className={`w-full p-3 border ${
              error && error.includes("Verification") ? "border-red-500" : "border-gray-300"
            } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white py-3 rounded-lg mb-4 hover:bg-green-600 transition-colors cursor-pointer"
        >
          VERIFY
        </button>

        {/* Resend Code Button */}
        <button
          onClick={handleResendCode}
          disabled={!canResend}
          className={`w-full py-3 rounded-lg cursor-pointer ${
            canResend
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          } transition-colors`}
        >
          {canResend ? "RESEND CODE" : `RESEND CODE IN ${resendTimer} SEC`}
        </button>
      </div>

     
    </div>
  );
};

export default VendorSetupAccount;

