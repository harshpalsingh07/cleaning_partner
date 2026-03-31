import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function Layout() {
  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
