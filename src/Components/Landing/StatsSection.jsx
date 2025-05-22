// src/components/landing/StatsSection.jsx
import Nike from '../../assets/nike.jpg';
import Jumia from '../../assets/jumia.jpeg';

const StatsSection = () => {
    return (
      <section className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4">
          <img src={Nike} alt="Nike Shoe" className='w-16 h-16 object-cover'/>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Sales</h3>
          <p className="text-2xl font-bold">$243.89</p>
          <button className="text-green-600 text-sm mt-2">View Report</button>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg">
          <h3 className="text-lg">50x</h3>
          <p className="text-sm">New customers every week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4">
          <img src={Jumia} alt="Jumia" className='w-16 h-16 object-cover'/>
          </div>
          <p className="text-sm">Partnering with</p>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  
  
  