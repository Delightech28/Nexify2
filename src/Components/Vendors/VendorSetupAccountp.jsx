// src/Components/Vendors/VendorPersonalInfo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import VendorsImage from '../../assets/vendors.png';
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

const VendorPersonalInfo = () => {
  const countries = [
    { name: "Nigeria", code: "NG", phoneCode: "+234" },
    { name: "Kenya", code: "KE", phoneCode: "+254" },
    { name: "Ghana", code: "GH", phoneCode: "+233" },
    { name: "Uganda", code: "UG", phoneCode: "+256" },
    { name: "South Africa", code: "ZA", phoneCode: "+27" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCountryChange = (e) => {
    const selected = countries.find((country) => country.phoneCode === e.target.value);
    setSelectedCountry(selected);
    setPhoneNumber("");
  };

  const handleNext = async () => {
    if (!phoneNumber) {
      setError("Phone number is required.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      setError("Password is required.");
      return;
    } else if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters and contain a capital letter, lowercase letter, number, and special character.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const sessionId = localStorage.getItem("signupSessionId");
      if (!sessionId) {
        setError("Session expired. Please start over.");
        return;
      }

      const vendorRef = doc(db, "vendors", sessionId);
      const vendorSnap = await getDoc(vendorRef);

      if (!vendorSnap.exists()) {
        setError("Vendor data not found. Please start over.");
        return;
      }

      const { email } = vendorSnap.data();

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      await setDoc(
        doc(db, "vendors", userId),
        {
          email,
          country: localStorage.getItem("selectedCountry"),
          phoneNumber: `${selectedCountry.phoneCode}${phoneNumber}`,
          step: "personal_info",
          createdAt: new Date().toISOString(),
        },
        { merge: true }
      );

      await deleteDoc(vendorRef);

      localStorage.removeItem("signupSessionId");
      localStorage.removeItem("selectedCountry");

      navigate("/vendor-shop-info", { state: { userId } });
    } catch (err) {
      setError("Failed to create account. Try again.");
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
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="w-8 h-1 bg-green-500 mx-1"></div>
        <div className="w-4 h-4 bg-green-100 rounded-full"></div>
      </div>

      <div className="w-full max-w-md px-4 mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Personal Information</h1>
        <p className="text-gray-600">Setup your password and provide your phone number</p>
      </div>

      <div className="w-full max-w-md px-4 mb-4">
        <div className="mb-4">
          <div className="relative flex items-center">
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
                style={{ width: "20px", height: "20px", marginLeft: "8px" }}
              />
            </div>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setError("");
              }}
              className={`w-full pl-28 p-3 border ${
                error && error.includes("Phone") ? "border-red-500" : "border-gray-300"
              } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className={`w-full p-3 border ${
                error && error.includes("Password") ? "border-red-500" : "border-gray-300"
              } rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password *"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
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

        <p className="text-gray-600 text-sm mb-4">
          Password should contain at least 8 characters containing a capital letter, a lower letter, a number and special character.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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

