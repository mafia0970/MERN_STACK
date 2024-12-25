import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 bg-gray-900">
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
      </div>

      <nav className="flex-1 p-4 space-y-4">
        <a
          href="/dashboard"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Dashboard
        </a>
        <a
          href="/users"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Users
        </a>
        <a
          href="/orders"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Orders
        </a>
        <a
          href="/settings"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Settings
        </a>
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
