// src/components/landing/PersonalizedSection.jsx
import Card from '../../assets/card.png';
const PersonalizedSection = () => {
    return (
      <section className="p-6 md:p-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Personalized shopping experience</h2>
        <p className="text-gray-600 mb-8 text-center">Discover a shopping experience like never before with our cutting-edge personalization algorithms.</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 p-2">
            <div className="bg-green-100 p-6 rounded-lg">
              <span className="text-2xl font-bold">1</span>
              <h3 className="text-xl font-semibold mt-4">One-click express checkout</h3>
              <p className="text-gray-600 mt-2">Save your payment and shipping details for quick, one-click purchasing in the future.</p>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-4">Checkout</h4>
            <p className="text-gray-600 mb-2">Billing Address</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-500">Country *</label>
                <input type="text" value="Nigeria" className="border rounded-lg p-2 w-full" disabled />
              </div>
              <div>
                <label className="text-sm text-gray-500">ZIP Code *</label>
                <input type="text" value="100001" className="border rounded-lg p-2 w-full" disabled />
              </div>
            </div>
            <p className="text-gray-600 mb-2">Payment</p>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-300 rounded-lg mr-2">
              <img src={Card} alt="Jumia" className='w-8 h-8 object-cover'/>
              </div>
              <span>Credit/Debit Card</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Name on card *</label>
                <input type="text" value="John Doe" className="border rounded-lg p-2 w-full" disabled />
              </div>
              <div>
                <label className="text-sm text-gray-500">Card Number *</label>
                <input type="text" value="**** **** **** 1234" className="border rounded-lg p-2 w-full" disabled />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PersonalizedSection;
  
  