import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaMapMarkerAlt, FaPlus, FaCheck } from "react-icons/fa";
import image1 from '../../assets/clothes.jpeg';
import image2 from '../../assets/nike.jpg';
import image3 from '../../assets/shoe.jpg';
import mastercard from '../../assets/master.png';
import verve from '../../assets/verve.png';
import BuyersHeader from './BuyersHeader.jsx';

const initialCartItems = [
  { id: 1, name: "Nike Dri-Fit Training Jacket Summer Special Kit", size: "XL", color: "Black", price: 40.0, quantity: 2, image: image1 },
  { id: 2, name: "Nike Dri-Fit Training Jacket Summer Special Kit", size: "XL", color: "Black", price: 40.0, quantity: 2, image: image2 },
  { id: 3, name: "Nike Dri-Fit Training Jacket Summer Special Kit", size: "XL", color: "Black", price: 40.0, quantity: 2, image: image3 },
];

const Checkout = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [discountCode, setDiscountCode] = useState("P100");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + 270;

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    // Show processing message
    setIsProcessing(true);

    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      // Show payment success message
      setIsPaymentDone(true);

      // Redirect to cart after success animation
      setTimeout(() => {
        navigate("/cart");
      }, 2000); // Redirect after 2 seconds
    }, 2000); // Processing for 2 seconds
  };

  return (
    <>
      <BuyersHeader />
      <div className="min-h-screen bg-gray-50 p-4 md:p-4">
        {/* Payment Processing Modal */}
        {isProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-lg font-semibold text-gray-800">Processing Payment...</p>
            </div>
          </div>
        )}

        {/* Payment Success Modal */}
        {isPaymentDone && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <FaCheck className="text-white text-2xl" />
              </div>
              <p className="text-lg font-semibold text-gray-800">Payment done, redirecting to cart</p>
            </div>
          </div>
        )}
 
        <h1 className="text-lg md:text-xl font-bold mb-4">Checkout</h1>

        <div className="flex flex-col space-y-3">
          {/* Top Row: Address, Choose how to pay, Discount Code */}
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-3">
            {/* Address Container */}
            <div className="w-full md:w-1/3 bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
              <FaMapMarkerAlt className="text-gray-500 w-8 h-8 mb-1" />
              <p className="text-2xl text-gray-800 font-semibold text-center mb-1">No address saved</p>
              <p className="text-xs text-gray-500 mb-2">Add an address so we can get cracking on the delivery?</p>
              <button className="flex items-center space-x-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-200 cursor-pointer">
                <FaPlus className="w-3 h-3" />
                <span>Add new locations</span>
              </button>
            </div>

            {/* Choose how to pay */}
            <div className="w-full md:w-1/3 bg-white p-3 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-base font-semibold">Choose how to pay</h2>
                <button className="flex items-center space-x-1 text-blue-600 text-sm hover:underline">
                  <FaPlus className="w-3 h-3" />
                  <span>Add new method</span>
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Visa **** 0942</span>
                  </div>
                  <input type="radio" name="payment" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-2 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Mastercard **** 0942</span>
                  </div>
                  <input type="radio" name="payment" />
                </div>
                <div className="flex items-center justify-between p-2 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Verve **** 0942</span>
                  </div>
                  <input type="radio" name="payment" />
                </div>
              </div>
            </div>

            {/* Discount Code */}
            <div className="w-full md:w-1/3 bg-white p-3 rounded-lg shadow-sm">
              <h2 className="text-base font-semibold mb-1">Discount Code</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="text-red-500 text-sm hover:underline cursor-pointer">Remove</button>
              </div>
              <p className="text-sm text-red-500 mt-1">Coupon code is invalid</p>
            </div>
          </div>

          {/* Bottom Row: Cart and Checkout */}
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-3">
            {/* Cart Container (aligned with Address + Choose how to pay) */}
            <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Cart ({cartItems.length} items)</h2>
                <button onClick={removeAll} className="text-red-500 text-sm hover:underline cursor-pointer">
                  Remove all
                </button>
              </div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-4 mb-4 relative">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                    <p className="text-xs text-gray-500">Color: {item.color}</p>
                    <p className="text-sm font-semibold mt-1">SAR {item.price.toFixed(2)} per item</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center border rounded cursor-pointer">-</button>
                      <span className="text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center border rounded cursor-pointer">+</button>
                    </div>
                    <p className="text-sm font-semibold mt-1">SAR {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 absolute top-0 right-0 cursor-pointer">
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Container (aligned under Discount Code, occupying remaining space) */}
            <div className="w-full md:w-1/3 md:ml-auto bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal ({cartItems.length} items):</span>
                <span>SAR {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Total (with VAT):</span>
                <span>SAR {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-end space-x-2 mb-4">
                <button className="bg-gray-200 p-2 rounded-lg"><img src="https://via.placeholder.com/20" alt="Visa" className="w-8 h-4 object-cover"/></button>
                <button className="bg-gray-200 p-2 rounded-lg"><img src={mastercard} alt="Mastercard" className="w-8 h-4 object-cover"/></button>
                <button className="bg-gray-200 p-2 rounded-lg"><img src={verve} alt="Verve" className="w-8 h-4 object-cover"/></button>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;