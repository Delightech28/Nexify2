// src/components/landing/TestimonialsSection.jsx
const TestimonialsSection = () => {
    return (
      <section className="p-6 md:p-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What our clients says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-2">Customer Stories</p>
            <p className="text-lg font-semibold mb-4">"This platform is a game-changer! Fast and easy shopping."</p>
            <p className="text-sm text-gray-600">Tony Stark - Shopify</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-2">Customer Stories</p>
            <p className="text-lg font-semibold mb-4">"SPLACER is a solution for my business. Seamless customization and round-the-clock support."</p>
            <p className="text-sm text-gray-600">Sarah Johnson - Tokped</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  
  