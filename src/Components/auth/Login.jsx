// src/components/auth/Login.jsx
import { FaGoogle, FaFacebook, FaShoppingCart, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md md:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <FaShoppingCart className="text-2xl text-green-600 mr-2" />
          <Link to="/">
          <span className="text-2xl font-bold text-green-600">Nexify</span>
          </Link>
        </div>
        {/* Welcome Text */}
        <h2 className="text-lg md:text-xl font-semibold text-center text-gray-800 mb-4">
          Welcome back, login to order delicious food at your door.
        </h2>
        {/* Social Login Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
          <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 w-full md:w-auto cursor-pointer">
            <FaGoogle className="mr-2 text-red-500" /> Google
          </button>
          <button className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 w-full md:w-auto cursor-pointer">
            <FaFacebook className="mr-2 text-blue-600" /> Facebook
          </button>
        </div>
        <Link to="/dashboard">
            Go to vendor dashboard
        </Link> &nbsp; &nbsp;
        <Link to="/buyers/">
            Go to buyers dashboard
        </Link>&nbsp; &nbsp;
        <Link to="/vendor-signin">
            Go to vendor signin
        </Link>
        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="border-t w-1/4"></span>
          <span className="mx-4 text-gray-500">OR</span>
          <span className="border-t w-1/4"></span>
        </div>
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="yourname@email.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
          >
            LOG IN
          </button>
        </form>
        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account? <Link to="/signup" className="text-green-600 hover:underline">SIGN UP</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;