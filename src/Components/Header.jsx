import { FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow p-3 md:p-4 flex justify-between items-center">
      <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
        <button onClick={toggleSidebar} className="md:hidden mr-3 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
          <FaBars className="text-xl font-bold" />
        </button>
        <input
          type="text"
          placeholder="Search Here..."
          className="border rounded-lg p-1 md:p-2 w-3/4 md:w-full text-sm md:text-base"
        />
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full mr-1 md:mr-2"></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;