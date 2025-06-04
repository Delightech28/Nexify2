// src/Components/Vendors/VendorSetupAccountv.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import VendorsImage from '../../assets/vendors.png';
import { db } from "../../firebase";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import emailjs from "emailjs-com";

const VendorSetupAccountv = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(12);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      navigate("/vendor-setup-account");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleVerify = async () => {
    if (!email) {
      setError("Email address is required.");
      return;
    } else if (!verificationCode) {
      setError("Verification code is required.");
      return;
    }

    try {
      const verificationRef = doc(db, "pending_verifications", email);
      const verificationSnap = await getDoc(verificationRef);

      if (!verificationSnap.exists()) {
        setError("Invalid or expired verification code.");
        return;
      }

      const { code, sessionId } = verificationSnap.data();

      if (verificationCode !== code) {
        setError("Incorrect verification code.");
        return;
      }

      const storedSessionId = localStorage.getItem("signupSessionId");
      if (sessionId !== storedSessionId) {
        setError("Session mismatch. Please start over.");
        return;
      }


      await deleteDoc(verificationRef);

      await setDoc(
        doc(db, "vendors", sessionId),
        { emailVerified: true, step: "email_verified" },
        { merge: true }
      );

      navigate("/vendor-setup-accountp");
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error(err);
    }
  };

  const handleResendCode = async () => {
    if (canResend) {
      try {
        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        const sessionId = localStorage.getItem("signupSessionId");

        await setDoc(doc(db, "pending_verifications", email), {
          code: newCode,
          email,
          createdAt: new Date().toISOString(),
          sessionId,
        });

        // Resend the verification code using EmailJS
        const templateParams = {
          user_name: email.split("@")[0],
          verification_code: newCode,
          to_email: email,
        };

        await emailjs.send(
          import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.REACT_APP_EMAILJS_USER_ID
        );

        setResendTimer(12);
        setCanResend(false);
      } catch (err) {
        setError("Failed to resend code. Try again.");
        console.error(err);
      }
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
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
        <div className="w-8 h-1 bg-green-100 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
      </div>

      <div className="w-full max-w-md px-4 mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Setup your account</h1>
        <p className="text-gray-600">Enter your email address to create your seller account</p>
      </div>

      <div className="w-full max-w-md px-4 mb-4">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            disabled
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter the verification code *"
            value={verificationCode}
            onChange={(e) => {
              setVerificationCode(e.target.value);
              setError("");
            }}
            className={`w-full p-3 border ${
              error && error.includes("Verification") ? "border-red-500" : "border-gray-300"
            } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white py-3 rounded-lg mb-4 hover:bg-green-600 transition-colors cursor-pointer"
        >
          VERIFY
        </button>

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

export default VendorSetupAccountv;

