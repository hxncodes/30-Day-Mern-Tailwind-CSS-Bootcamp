import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import React from 'react'

function MainLayout() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
    <footer className="text-center p-4 bg-gray-200">
      <p>&copy; {new Date().getFullYear()} hxnCodes</p>
    </footer>
    </>
  )
}

export default MainLayout