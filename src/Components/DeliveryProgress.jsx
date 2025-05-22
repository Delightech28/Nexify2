const DeliveryProgress = () => {
    const items = [
      { name: "MacBook Pro 15\"", progress: 85, icon: "🍎" },
      { name: "iMac Pro 2019", progress: 65, icon: "🍎" },
      { name: "iPad Pro 10.5\"", progress: 45, icon: "🍎" },
      { name: "MacBook Pro 13\"", progress: 25, icon: "🍎" },
    ];
  
    return (
      <div className="bg-white p-3 md:p-4 rounded-lg shadow">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Delivery Progress</h3>
        {items.map((item) => (
          <div key={item.name} className="mb-3 md:mb-4">
            <div className="flex items-center mb-1 md:mb-2">
              <span className="mr-1 md:mr-2 text-sm md:text-base">{item.icon}</span>
              <span className="text-sm md:text-base">{item.name}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5">
              <div
                className="bg-blue-600 h-2 md:h-2.5 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <p className="text-xs md:text-sm text-gray-500">{item.progress}%</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DeliveryProgress;