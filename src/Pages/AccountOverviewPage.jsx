// src/Pages/AccountOverviewPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaSignOutAlt } from "react-icons/fa"; // Added FaEdit and FaSignOutAlt
import BuyersHeader from "../Components/Buyers/BuyersHeader";
import image1 from '../assets/clothes.jpeg';
const AccountOverviewPage = () => {
  return (

    <>
    <BuyersHeader />
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6 text-green-600">Account Overview</h1>

        {/* Account Details and Address Book */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Account Details */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">ACCOUNT DETAILS</h2>
              <button className="text-blue-500 hover:text-blue-600">
                <FaEdit /> {/* Added edit icon */}
              </button>
            </div>
            <p className="text-gray-700">Delight Okechukwu</p>
            <p className="text-gray-700">desolmon07@gmail.com</p>
          </div>

          {/* Address Book */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">ADDRESS BOOK</h2>
              <button className="text-blue-500 hover:text-blue-600">
                <FaPlus />
              </button>
            </div>
            <p className="text-gray-700 font-semibold">Your default shipping address:</p>
            <p className="text-gray-700">Okechukwu Delight</p>
            <p className="text-gray-700">1, Sunday off ermeji bustop aiagbole-akute, AKUTE, Ogun</p>
            <p className="text-gray-700">+234 9163854228 / +234 8082331329</p>
          </div>
        </div>

        {/* Saved Payment Methods, Loyalty Points, and Newsletter Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Saved Payment Methods */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">SAVED PAYMENT METHODS</h2>
            <p className="text-gray-700">Visa ending in 1234</p>
            <p className="text-gray-700">Expires 12/26</p>
            <button className="text-blue-500 hover:text-blue-600 mt-2">Manage Payment Methods</button>
          </div>

          {/* Loyalty Points */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">LOYALTY POINTS</h2>
            <p className="text-gray-700">You have 1,250 points</p>
            <button className="text-blue-500 hover:text-blue-600 mt-2">Redeem Points</button>
          </div>

          {/* Newsletter Preferences */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">NEWSLETTER PREFERENCES</h2>
            <p className="text-gray-700 mb-2">
              Manage your email communications to stay updated with the latest news and offers.
            </p>
            <button className="text-blue-500 hover:text-blue-600">Edit Newsletter preferences</button>
          </div>
        </div>

        {/* Order History */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">ORDER HISTORY</h2>
            <Link to="/orders" className="text-blue-500 hover:text-blue-600">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-700 font-semibold">Order #12345</p>
                <p className="text-gray-500 text-sm">Placed on May 20, 2025</p>
              </div>
              <p className="text-green-500 font-semibold">Delivered</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-gray-700 font-semibold">Order #12346</p>
                <p className="text-gray-500 text-sm">Placed on May 15, 2025</p>
              </div>
              <p className="text-yellow-500 font-semibold">Shipped</p>
            </div>
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">TOP SELLING ITEMS</h2>
            <Link to="/all-products" className="text-blue-500 hover:text-blue-600">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Product Card 1 */}
            <div className="border rounded-lg p-2">
              <div className="relative">
                <img
                  src={image1}
                  alt="Ace Elec 20000 mAh Ultra Slim"
                  className="w-full h-32 object-cover rounded"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -20%
                </span>
              </div>
              <p className="text-sm mt-2">Ace Elec 20000 mAh Ultra Slim...</p>
              <p className="text-lg font-semibold">₦7,299</p>
              <p className="text-sm text-gray-500 line-through">₦9,000</p>
            </div>

            {/* Product Card 2 */}
            <div className="border rounded-lg p-2">
              <div className="relative">
                <img
                  src={image1}
                  alt="Galuin Cave Shoes Slippers"
                  className="w-full h-32 object-cover rounded"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -39%
                </span>
              </div>
              <p className="text-sm mt-2">Galuin Cave Shoes Slippers...</p>
              <p className="text-lg font-semibold">₦12,770</p>
              <p className="text-sm text-gray-500 line-through">₦20,990</p>
            </div>

            {/* Product Card 3 */}
            <div className="border rounded-lg p-2">
              <div className="relative">
                <img
                  src={image1}
                  alt="Bone Conduction Ear Clip-on"
                  className="w-full h-32 object-cover rounded"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -46%
                </span>
              </div>
              <p className="text-sm mt-2">Bone Conduction Ear Clip-on...</p>
              <p className="text-lg font-semibold">₦6,062</p>
              <p className="text-sm text-gray-500 line-through">₦11,569</p>
            </div>

            {/* Product Card 4 */}
            <div className="border rounded-lg p-2">
              <div className="relative">
                <img
                  src={image1}
                  alt="Macbook Pro Laptop A1278"
                  className="w-full h-32 object-cover rounded"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  REFURBISHED GRADE A
                </span>
              </div>
              <p className="text-sm mt-2">Macbook Pro Laptop A1278...</p>
              <p className="text-lg font-semibold">₦211,200</p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-6">
            <Link to="/logout">
              <button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                <span className="mr-2">
                  <FaSignOutAlt /> {/* Replaced padlock emoji with logout icon */}
                </span>
                Logout
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    
    </>
  );
};

export default AccountOverviewPage;