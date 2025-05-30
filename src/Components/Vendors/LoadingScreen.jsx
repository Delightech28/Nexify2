


// LoadingScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css'; // Import the CSS file
import logo from '../../assets/vendors.png'; // Adjust the path to your logo image

const LoadingScreen = () => {
  const navigate = useNavigate();

  // Redirect after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard'); // Replace '/dashboard' with your desired redirect path
    }, 20000); // 20 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Logo - Using an image instead of SVG */}
      <img
        src={logo} // Reference the imported logo
        alt="VC Logo"
        className="mb-8 w-24 h-24" // Adjust size as needed
      />

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full bg-orange-500 loading-bar"></div>
      </div>

      {/* Text */}
      <p className="mt-4 text-lg font-medium text-gray-800">
        Hold on while we create your account
      </p>
    </div>
  );
};

export default LoadingScreen;
