import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

function AdminLayout({ sidebar, header, children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="h-full p-4">
          <Sidebar />
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md px-6 py-4">
          <AdminHeader />
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
