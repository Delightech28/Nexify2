

// src/Components/Vendors/VendorSetupAccount.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VendorsImage from '../../assets/vendors.png';
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import emailjs from "emailjs-com";

const VendorSetupAccount = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!email) {
      setError("This field is required.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const sessionId = localStorage.getItem("signupSessionId");
      if (!sessionId) {
        setError("Session expired. Please start over.");
        return;
      }

      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

      await setDoc(doc(db, "pending_verifications", email), {
        code: verificationCode,
        email,
        createdAt: new Date().toISOString(),
        sessionId,
      });

      await setDoc(
        doc(db, "vendors", sessionId),
        { email, step: "email_verification" },
        { merge: true }
      );

      // Send the verification code using EmailJS
      const templateParams = {
        user_name: email.split("@")[0], // Extract username from email
        verification_code: verificationCode,
        to_email: email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      navigate("/vendor-setup-accountv", { state: { email } });
    } catch (err) {
      setError("Failed to send verification code. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-4 mt-8 mb-6">
        <img src={VendorsImage} alt="Vendor Shop Illustration" className="w-full h-auto" />
      </div>

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

      <div className="w-full max-w-md px-4 mb-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Setup your account</h1>
        <p className="text-gray-600">Please provide your email address to create your seller account!</p>
      </div>

      <div className="w-full max-w-md px-4 mb-4">
        <input
          type="email"
          placeholder="Email Address *"
          value={email}
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
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
    </div>
  );
};

export default VendorSetupAccount;
