import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Optional: Icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <header className="bg-primary text-white dark:bg-gray-900">
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4 md:px-8">
        <div className="text-xl font-semibold">hxnCodes</div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1 rounded hover:bg-white hover:text-primary transition"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Nav Links (Desktop Only) */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
          <Link to="/register" className="hover:text-blue-400">Register</Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <nav className="absolute top-0 left-0 w-64 h-full bg-gray-900 z-50 flex flex-col gap-4 px-6 py-8 shadow-lg md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white mb-4"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>

          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Contact</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Dashboard</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Register</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
