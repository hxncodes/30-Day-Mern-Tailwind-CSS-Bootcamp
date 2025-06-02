import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-[var(--color-secondary)] dark:bg-slate-800 p-4">
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:text-[var(--color-primary)]">Home</Link>
        <Link to="/goals" className="hover:text-[var(--color-primary)]">Goals</Link>
        <Link to="/about" className="hover:text-[var(--color-primary)]">About</Link>
      </nav>
    </aside>
  );
}