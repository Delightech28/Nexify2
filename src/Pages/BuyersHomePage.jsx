// src/Pages/BuyersHomePage.jsx
import { useState } from "react";
import BuyersHeader from "../Components/Buyers/BuyersHeader";
import BuyersSidebar from "../Components/Buyers/BuyersSidebar";
import ProductCard from "../Components/Buyers/ProductCard";
import image1 from '../assets/clothes.jpeg';
import image2 from '../assets/nike.jpg';
import image3 from '../assets/shoe.jpg';

const BuyersHomePage = () => {
  const shoes = [
    { id: 1, name: "Nike Air Force 1 Shadow", price: 130.00, originalPrice: 140.00, rating: 4.9, reviews: 123, image: "air-force-1.jpg", brand: "Nike", category: "Sneakers" },
    { id: 2, name: "Nike Dunk High Retro", price: 125.00, originalPrice: 130.00, rating: 4.9, reviews: 123, image: image1, brand: "Nike", category: "Sneakers" },
    { id: 3, name: "Nike Blazer Mid '77", price: 105.00, originalPrice: 110.00, rating: 4.9, reviews: 123, image: image2, brand: "Nike", category: "Sneakers" },
    { id: 4, name: "Nike Air Max 90 Futura", price: 150.00, originalPrice: 160.00, rating: 4.9, reviews: 123, image: image3, brand: "Nike", category: "Sneakers" },
    { id: 5, name: "Nike Air Max 270", price: 136.97, originalPrice: 160.00, rating: 4.9, reviews: 123, image: "air-max-270.jpg", brand: "Nike", category: "Sneakers" },
    { id: 6, name: "Nike Air Zoom Pegasus", price: 130.00, originalPrice: 150.00, rating: 4.9, reviews: 123, image: image1, brand: "Nike", category: "Sneakers" },
    { id: 7, name: "Nike Free Metcon 4", price: 120.00, originalPrice: 130.00, rating: 4.9, reviews: 123, image: image2, brand: "Nike", category: "Sneakers" },
    { id: 8, name: "Nike Waffle One SE", price: 125.00, originalPrice: 130.00, rating: 4.9, reviews: 123, image: image3, brand: "Nike", category: "Sneakers" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Sneakers");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("Nike");

  const filteredShoes = shoes.filter((shoe) => {
    const matchesCategory = selectedCategory === "All" || shoe.category === selectedCategory;
    const matchesPrice = shoe.price >= priceRange[0] && shoe.price <= priceRange[1];
    const matchesBrand = selectedBrand === "All" || shoe.brand === selectedBrand;
    const matchesRating = !selectedRating || shoe.rating >= selectedRating;
    return matchesCategory && matchesPrice && matchesBrand && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <BuyersHeader />
      <div className="flex flex-col md:flex-row">
        <BuyersSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
        <div className="w-full md:w-3/4 p-4 md:p-6">
          {/* Brand Tabs */}
          <div className="flex space-x-2 md:space-x-4 mb-6 overflow-x-auto pb-2">
            {["All", "Nike", "Adidas", "Puma", "Vans", "Reebok", "Converse", "New Balance"].map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base whitespace-nowrap ${
                  selectedBrand === brand ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredShoes.map((shoe) => (
              <ProductCard key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersHomePage;
