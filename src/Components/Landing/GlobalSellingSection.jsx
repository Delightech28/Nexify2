// src/components/landing/GlobalSellingSection.jsx
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Social from '../../assets/social.jpeg';

const GlobalSellingSection = () => {
  return (
    <section className="p-6 md:p-12 bg-white flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Effortless global selling by share a link - super fast ⚡
        </h2>
        <p className="text-gray-600 mb-6">
          Picture a world where your products are instantly accessible to customers across the planet with just a link. Our state-of-the-art platform brings the vision to life.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="w-24 h-24 bg-gray-300 rounded-lg mb-4">
          <img src={Social} alt="Jumia" className='w-24 h-24 object-cover'/>
          </div>
          <div className="flex items-center border rounded-lg p-2 mb-4">
            <input
              type="text"
              value="https://nexify.com/4b2nd"
              className="flex-1 p-2 text-sm"
              readOnly
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg ml-2">
              Copy
            </button>
          </div>
          <div className="flex space-x-4">
            <FaTwitter className="text-green-600 text-xl" />
            <FaFacebook className="text-green-600 text-xl" />
            <FaInstagram className="text-green-600 text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSellingSection;

