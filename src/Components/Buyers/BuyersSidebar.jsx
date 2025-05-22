// src/Components/Buyers/BuyersSidebar.jsx
import { useState } from "react";

const BuyersSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedColors,
  setSelectedColors,
  selectedRating,
  setSelectedRating,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div>
      {/* Filter Toggle Button for Mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleFilter}
          className="w-full bg-green-600 text-white p-2 rounded-lg"
        >
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar Filters */}
      <div
        className={`w-full md:w-full p-4 md:p-6 border-r bg-white ${
          isFilterOpen ? "block" : "hidden md:block"
        }`}
      >
        <h2 className="text-lg md:text-xl font-semibold mb-4">Category</h2>
        <div className="space-y-2">
          {["Sneakers", "Flats", "Sandals", "Heels"].map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="mr-2 w-4 h-4"
              />
              <span className="text-sm md:text-base">{category}</span>
            </label>
          ))}
        </div>

        <h2 className="text-lg md:text-xl font-semibold mt-6 mb-4">Price</h2>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min="0"
            max="150"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-full"
          />
          <span className="text-sm md:text-base">${priceRange[0]} - ${priceRange[1]}</span>
        </div>

        <h2 className="text-lg md:text-xl font-semibold mt-6 mb-4">Color</h2>
        <div className="space-y-2">
          {["Black", "Blue", "Red", "Multicolor"].map((color) => (
            <label key={color} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => {
                  setSelectedColors((prev) =>
                    prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
                  );
                }}
                className="mr-2 w-4 h-4"
              />
              <span className="text-sm md:text-base">{color}</span>
            </label>
          ))}
        </div>

        <h2 className="text-lg md:text-xl font-semibold mt-6 mb-4">Rating</h2>
        <div className="space-y-2">
          {[5, 4, 3].map((star) => (
            <label key={star} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === star}
                onChange={() => setSelectedRating(star)}
                className="mr-2 w-4 h-4"
              />
              <span className="text-sm md:text-base">{star} Stars</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyersSidebar;

