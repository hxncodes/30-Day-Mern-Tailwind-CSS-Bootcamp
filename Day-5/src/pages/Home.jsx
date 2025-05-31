import React from 'react';
// import Navbar from '../components/Navbar'; // Uncomment if you have a Navbar component
function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-dark text-color-text dark:text-text-dark">
      {/* <Navbar /> */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-64 w-full bg-gray-200 dark:bg-primary p-4">
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Dashboard</a></li>
            <li><a href="#" className="hover:underline">Profile</a></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">{children}</main>

        {/* Right Panel (Optional) */}
        <aside className="hidden lg:block lg:w-64 p-4 dark:bg-bg-dark text-color-text dark:text-text-dark">
          <h2 className="font-semibold mb-4">Right Sidebar</h2>
          <p className="text-sm">Additional content or widgets.</p>
        </aside>
      </div>
    </div>
  );
}

export default DashboardLayout;
