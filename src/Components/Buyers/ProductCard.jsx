// src/Components/Buyers/ProductCard.jsx
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import placeholderImage from "../../assets/bag.jpg";

const ProductCard = ({ shoe }) => {
  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow-md">
      <div className="relative">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-32 md:h-40 object-cover rounded-lg"
          onError={(e) => (e.target.src = placeholderImage)}
        />
        <button className="absolute top-2 right-2 text-red-500">
          <FaHeart className="text-base md:text-lg" />
        </button>
      </div>
      <h3 className="mt-2 text-sm md:text-lg font-semibold truncate">{shoe.name}</h3>
      <div className="flex items-center mt-1">
        <span className="text-yellow-500 text-sm md:text-base">★</span>
        <span className="ml-1 text-gray-600 text-xs md:text-sm">
          {shoe.rating} ({shoe.reviews} reviews)
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <span className="text-sm md:text-lg font-bold text-green-600">${shoe.price.toFixed(2)}</span>
          <span className="ml-2 text-xs md:text-sm text-gray-500 line-through">
            ${shoe.originalPrice.toFixed(2)}
          </span>
        </div>
        <button className="bg-blue-600 text-white p-1 md:p-2 rounded-lg hover:bg-blue-700">
          <FaShoppingCart className="text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



