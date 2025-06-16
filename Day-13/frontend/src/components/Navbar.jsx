import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();
  return (
    <header className="w-full p-4 flex justify-between items-center shadow-md md:hidden">
      <h1 className="text-xl font-bold">GoalTracker</h1>
      <div className="flex gap-4 items-center">
        <button onClick={toggleTheme} className="text-sm bg-[var(--color-primary)] text-white px-3 py-1 rounded">
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </header>
  );
}