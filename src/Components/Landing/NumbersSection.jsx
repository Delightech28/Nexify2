// src/components/landing/NumbersSection.jsx
const NumbersSection = () => {
    return (
      <section className="p-6 md:p-12 bg-green-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Numbers speak louder</h2>
        <p className="text-gray-200 mb-8">Encapsulates the remarkable strides we’ve made in fueling success</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">3M</h3>
            <p className="text-sm md:text-base">With a community of over 3M million customers, we’ve established ourselves as a trusted brand in the e-commerce industry</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">87%</h3>
            <p className="text-sm md:text-base">We pride ourselves on a remarkable 87% conversion rate, which means that a significant percentage of visitors</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">24/7</h3>
            <p className="text-sm md:text-base">Offers a truly global reach, serving customers around the clock. Regardless of time zones, we’re always available to assist</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default NumbersSection;
  
  