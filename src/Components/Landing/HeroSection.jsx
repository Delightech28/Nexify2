// src/components/landing/HeroSection.jsx
import { Link } from "react-router-dom";
import Nike from '../../assets/nike.jpg';
import Shoe from '../../assets/shoe.jpg';
import Bag from '../../assets/bag.jpg';
import Clothes from '../../assets/clothes.jpeg';
const HeroSection = () => {
    return (
      <section className="p-6 md:p-12 flex flex-col md:flex-row items-center bg-white">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-sm text-green-600 uppercase mb-2">#1 E-commerce Platform 2025</p>
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
            Learn, Shop, Increase Sales.
          </h1>
          <p className="text-gray-600 mb-6">
            Nexify is a driving force behind the dreams of emerging entrepreneurs, a trusted partner for industry leaders.
          </p>
          <Link to="/signup" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Start Free
          </Link>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            <div className="w-16 h-16 bg-green-200 rounded-lg mr-4">
                <img src={Nike} alt="Nike Shoe" className='w-16 h-16 object-cover'/>
            </div>
            <div>
              <p className="font-semibold">Nike Zoom Power</p>
              <p className="text-green-600">$450.00</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4">
               <img src={Shoe} alt="Shoes" className='w-16 h-16 object-cover'/>
            </div>
            <div>
              <p className="font-semibold">Shoes</p>
              <p className="text-green-600">$20</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4">
            <img src={Clothes} alt="Clothes" className='w-16 h-16 object-cover'/>
            </div>
            <div>
              <p className="font-semibold">Clothes</p>
              <p className="text-green-600">$50</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4">
            <img src={Bag} alt="Bag" className='w-16 h-16 object-cover'/>
            </div>
            <div>
              <p className="font-semibold">Bag</p>
              <p className="text-green-600">$50</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
  
  