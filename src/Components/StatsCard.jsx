const StatsCard = ({ title, value, change }) => {
    const isPositive = change.startsWith("+");
    return (
      <div className="bg-white p-3 md:p-4 rounded-lg shadow">
        <h3 className="text-sm md:text-base text-gray-500">{title}</h3>
        <p className="text-lg md:text-2xl font-bold">{value}</p>
        <p className={`text-xs md:text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</p>
      </div>
    );
  };
  
  export default StatsCard;
  
  