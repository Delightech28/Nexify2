// src/components/landing/LandingHeader.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow p-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <FaShoppingCart className="text-2xl text-green-600 mr-2" />
          <span className="text-xl font-bold text-green-600">SPLACER</span>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 cursor-pointer"
        >
          {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/what-we-do" className="text-gray-600 hover:text-green-600">What We Do</Link>
          <Link to="/services" className="text-gray-600 hover:text-green-600">Services</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-green-600">Pricing</Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-green-600">How It Works</Link>
          <Link to="/signup" className="text-gray-600 hover:text-green-600">Sign Up</Link>
           <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer">Get Started</Link>
        </div>
      </div>
      {/* Mobile Menu Bar */}
      <div
        className={`md:hidden fixed top-0 left-0 w-64 h-full bg-green-600 text-white p-4 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FaShoppingCart className="text-2xl text-white mr-2" />
            <span className="text-xl font-bold">SPLACER</span>
          </div>
          <button onClick={toggleMenu} className="p-2 rounded-lg bg-green-800 hover:bg-green-900 cursor-pointer">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <Link to="/what-we-do" onClick={toggleMenu} className="text-white hover:text-green-200">What We Do</Link>
          <Link to="/services" onClick={toggleMenu} className="text-white hover:text-green-200">Services</Link>
          <Link to="/pricing" onClick={toggleMenu} className="text-white hover:text-green-200">Pricing</Link>
          <Link to="/how-it-works" onClick={toggleMenu} className="text-white hover:text-green-200">How It Works</Link>
          <Link to="/signup" onClick={toggleMenu} className="text-white hover:text-green-200">Sign Up</Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 text-left"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-40 cursor-pointer"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default LandingHeader;