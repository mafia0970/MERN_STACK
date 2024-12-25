import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 bg-gray-900">
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
      </div>

      <nav className="flex-1 p-4 space-y-4">
        <NavLink
          to={"/admin/dashboard"}
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/admin/features"}
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Features
        </NavLink>
        <NavLink
          to={"/admin/orders"}
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Orders
        </NavLink>
        <NavLink
          to={"/admin/products"}
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Products
        </NavLink>
      </nav>

      <div className="p-4 bg-gray-900">
        <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
