import {
  FaBoxes,
  FaSearch,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUserCog,
  FaUserFriends,
  FaWrench,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 flex flex-col shadow-lg fixed">
      {/* Sidebar Header */}
      <div className="p-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-700">FastAPI</h2>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col flex-grow mt-4 space-y-2 px-2">
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaTachometerAlt className="text-lg text-gray-500" />
          <span className="text-gray-700">Dashboard</span>
        </li>
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaBoxes className="text-lg text-gray-500" />
          <span className="text-gray-700">Items</span>
        </li>
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaUserCog className="text-lg text-gray-500" />
          <span className="text-gray-700">User Settings</span>
        </li>
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaUserFriends className="text-lg text-gray-500" />
          <span className="text-gray-700">Clients</span>
        </li>
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaSearch className="text-lg text-gray-500" />
          <span className="text-gray-700">Relations</span>
        </li>
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaSearch className="text-lg text-gray-500" />
          <span className="text-gray-700">Search</span>
        </li>
        <li className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-200 cursor-pointer">
          <FaWrench className="text-lg text-gray-500" />
          <span className="text-gray-700">Admin</span>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto p-4 bg-white">
        <div className="flex items-center justify-center text-sm text-gray-500">
          <FaSignOutAlt className="mr-2" />
          <span>Logged in as TanStack Router</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
