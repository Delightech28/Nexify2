import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from '../../assets/clothes.jpeg';
import image2 from '../assets/nike.jpg';
import image3 from '../assets/shoe.jpg';

// Sample cart items (you can replace this with dynamic data from a state or API)
const initialCartItems = [
  {
    id: 1,
    name: "Hiking Rain Poncho 50-11, Turquoise",
    color: "Green-D",
    size: "XL",
    price: 47.78,
    quantity: 1,
    image: image1, // Placeholder image
  },
  {
    id: 2,
    name: "Hiking Rain Poncho 50-11, Turquoise",
    color: "Green-D",
    size: "XL",
    price: 47.78,
    quantity: 2,
    image: image2,
  },
  {
    id: 3,
    name: "Bag 10, Turquoise",
    color: "Green-D",
    size: "XL",
    price: 47.78,
    quantity: 1,
    image: image3,
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 31.22; // Fixed tax as per the image
  const total = subtotal + tax;

  // Free shipping progress (assuming $85 is the target for free shipping)
  const freeShippingTarget = 85;
  const progress = Math.min((subtotal / freeShippingTarget) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingTarget - subtotal, 0);

  // Handle quantity change
  const updateQuantity = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">Shopping Cart</h1>
        <p className="text-sm text-gray-600">Help line: 102 123 23</p>
      </div>

      {/* Free Shipping Progress Bar */}
      <div className="bg-orange-100 p-3 rounded-lg mb-4 text-center text-sm">
        <p className="text-orange-800 font-semibold">
          Great! You have <span className="font-bold">FREE SHIPPING</span>.
          Only ${remainingForFreeShipping.toFixed(2)} away from getting an{" "}
          <span className="font-bold">EXTRA 20% CASHBACK</span>.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>$0</span>
          <span>Free Shipping</span>
          <span>20% Cashback</span>
          <span>$85</span>
        </div>
      </div>

      {/* Timer Warning */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-3 mb-4 text-sm">
        <p className="text-orange-700">
          Hurry up! Your items are reserved for 10 minutes.
        </p>
      </div>

      {/* Cart Items */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          You have {cartItems.length} products in your cart
        </p>
        <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
          <span>Product</span>
          <div className="flex space-x-4 md:space-x-8">
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-sm mb-2"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-sm md:text-base font-medium">{item.name}</h2>
                <p className="text-xs text-gray-500">Color: {item.color}</p>
                <p className="text-xs text-gray-500">Size: {item.size}</p>
                <p className="text-xs text-gray-500">• In Stock (2 Pcs)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8 mt-4 md:mt-0">
              <span className="text-sm md:text-base">${item.price.toFixed(2)}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  +
                </button>
              </div>
              <span className="text-sm md:text-base">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-600 mb-2">Expected Delivery: Friday</p>
        <div className="flex justify-between text-sm mb-2">
          <span>Sub Total:</span>
          <span>${ feat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 space-y-2 md:space-y-0 md:space-x-2">
          <Link
            to="/"
            className="w-full md:w-1/2 bg-gray-200 text-gray-800 py-2 rounded-lg text-center hover:bg-gray-300"
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="w-full md:w-1/2 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;


