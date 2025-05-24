// src/Components/Vendors/VendorSignIn.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { MdEmail } from "react-icons/md"; // Email icon
import { FaStar } from "react-icons/fa"; // Star icon for "Sign in with JUMIA"
import VendorsImage from '../../assets/vendors.png';
const VendorSignIn = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Logo Section */}
      <div className="mt-8 mb-6">
        <div className="flex justify-center items-center">
          <div className="text-5xl font-bold text-green-500 mr-2 mb-3">VC</div>
          </div>
          <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-grey-800 mr-3">
           Nexify
          </h1>
               <h1 className="text-2xl font-semibold text-green-800">
            Vendor Center
          </h1>
          </div>
       
      
      </div>

      {/* Sign-In Buttons */}
      <div className="w-full max-w-md px-4 mb-6">
        {/* Sign in with Google */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <FcGoogle className="mr-2 text-xl" />
          Sign in with Google
        </button>

        {/* Sign in with Email */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <MdEmail className="mr-2 text-xl text-gray-700" />
          Sign in with Email
        </button>

        {/* Sign in with JUMIA (replace with your platform name) */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4">
          <FaStar className="mr-2 text-xl text-orange-500" />
          Sign in with Nexify Account
        </button>
      </div>

      {/* Sell on Platform Button */}
      <div className="w-full max-w-md px-4 mb-8">
        <Link to="/vendor-signup">
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
            Sell on Our Platform
          </button>
        </Link>
      </div>

      {/* Illustration Section */}
      <div className="w-full max-w-md px-4 mb-8">
        <img
          src={VendorsImage}
          alt="Vendor Illustration"
          className="w-full h-auto"
        />
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

export default VendorSignIn;