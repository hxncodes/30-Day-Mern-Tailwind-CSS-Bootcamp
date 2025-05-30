import React from "react";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <nav className="mb-4">
        <Link to="profile">Profile</Link>
        <br />
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
}

export default Dashboard;
