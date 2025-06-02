import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--color-bg)] text-[var(--color-text)] dark:bg-[var(--color-bg-dark)] dark:text-[var(--color-text-dark)]">
      <Navbar />
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}