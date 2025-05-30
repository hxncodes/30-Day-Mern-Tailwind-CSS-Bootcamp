import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: Icon library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4 md:px-8">
        <div className="text-xl font-semibold">hxnCodes</div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {/* {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
            <Menu className="w-6 h-6" />
          </button>
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
