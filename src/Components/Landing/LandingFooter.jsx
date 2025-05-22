// src/components/landing/LandingFooter.jsx
import { FaTwitter, FaFacebook, FaInstagram, FaShoppingCart } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="p-6 md:p-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <FaShoppingCart className="text-2xl text-green-600 mr-2" />
            <span className="text-xl font-bold text-green-600">Nexify</span>
          </div>
          <p className="text-gray-600">
            Nexify is a driving force behind the dreams of emerging entrepreneurs, a trusted partner for industry leaders.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/what-we-do" className="hover:text-green-600">What We Do</a></li>
            <li><a href="/pricing" className="hover:text-green-600">Pricing</a></li>
            <li><a href="/how-it-works" className="hover:text-green-600">How It Works</a></li>
            <li><a href="/affiliates" className="hover:text-green-600">Affiliates</a></li>
            <li><a href="/partners" className="hover:text-green-600">Partners</a></li>
            <li><a href="/faq" className="hover:text-green-600">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-green-600">About</a></li>
            <li><a href="/mission" className="hover:text-green-600">Mission and Values</a></li>
            <li><a href="/social" className="hover:text-green-600">Social Media</a></li>
            <li><a href="/faq" className="hover:text-green-600">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/api" className="hover:text-green-600">API Documentation</a></li>
            <li><a href="/tools" className="hover:text-green-600">Developers Tools</a></li>
            <li><a href="/careers" className="hover:text-green-600">Careers</a></li>
            <li><a href="/contact" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="/blog" className="hover:text-green-600">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <p className="text-gray-600 text-sm">© 2025 SPLACER Inc. All rights reserved.</p>
        <div className="flex space-x-4">
          <FaTwitter className="text-green-600 text-xl cursor-pointer" />
          <FaFacebook className="text-green-600 text-xl cursor-pointer" />
          <FaInstagram className="text-green-600 text-xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;