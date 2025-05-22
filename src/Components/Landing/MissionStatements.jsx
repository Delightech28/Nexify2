// src/components/landing/MissionStatement.jsx
const MissionStatement = () => {
    return (
      <section className="p-6 md:p-12 bg-gray-50 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            SPLACER is designed to simplify the complexities of e-commerce
          </h2>
          <p className="text-gray-600">
            Providing you with the tools you need to <span className="text-green-600">create, manage, and grow</span> your store.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        </div>
      </section>
    );
  };
  
  export default MissionStatement;
  
  