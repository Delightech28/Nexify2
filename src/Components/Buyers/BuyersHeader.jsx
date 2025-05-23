// src/Components/Buyers/BuyersHeader.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

const BuyersHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {location.pathname === "/buyers" ? (
            
            <h1 className="text-2xl font-bold text-green-600">Nexify</h1>
          ) : (
            <Link to="/buyers">
          
              <h1 className="text-2xl font-bold text-green-600">Nexify</h1>
            </Link>
          )}
        </div>

        {/* Search Bar - Adjusted for Desktop */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Enter your search shoes..."
            className="w-full max-w-md border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Search Bar - Mobile */}
        <div className="flex-1 mx-4 md:hidden">
          <input
            type="text"
            placeholder="Enter your search shoes..."
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Desktop Navigation and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-4">
            {location.pathname === "/buyers" ? (
              <span className="text-gray-800">Home</span>
            ) : (
              <Link to="/buyers" className="text-gray-800 hover:text-blue-600">Home</Link>
            )}
            <Link to="/buyers/sale" className="text-gray-800 hover:text-gree-600">Sale</Link>
            <Link to="/buyers/men" className="text-gray-800 hover:text-green-600">Men</Link>
            <Link to="/buyers/women" className="text-gray-800 hover:text-green-600">Women</Link>
            <Link to="/buyers/kids" className="text-gray-800 hover:text-green-600">Kids</Link>
          </nav>
          <FaHeart className="text-gray-600 cursor-pointer" />

          <Link to="/cart" className="text-gray-800 hover:text-green-600 cursor-pointer">
          <FaShoppingCart className="text-gray-600 cursor-pointer" />
          </Link>

          <FaUser className="text-gray-600 cursor-pointer" />
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden ">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="cursor-pointer">
            <FaBars className="text-gray-600 text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Shown when toggled */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            {location.pathname === "/buyers" ? (
              <span className="text-gray-800">Home</span>
            ) : (
              <Link to="/buyers" className="text-gray-800 hover:text-green-600" onClick={toggleMenu}>Home</Link>
            )}
            <Link to="/buyers/sale" className="text-gray-800 hover:text-green-600" onClick={toggleMenu}>Sale</Link>
            <Link to="/buyers/men" className="text-gray-800 hover:text-green-600" onClick={toggleMenu}>Men</Link>
            <Link to="/buyers/women" className="text-gray-800 hover:text-green-600" onClick={toggleMenu}>Women</Link>
            <Link to="/buyers/kids" className="text-gray-800 hover:text-green-600" onClick={toggleMenu}>Kids</Link>
          </nav>
          <div className="flex space-x-4 mt-4">
            <FaHeart className="text-gray-600 cursor-pointer" />
            <Link to="/cart" className="text-gray-800 hover:text-green-600 cursor-pointer">
          <FaShoppingCart className="text-gray-600 cursor-pointer" />
          </Link>
            <FaUser className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default BuyersHeader;


