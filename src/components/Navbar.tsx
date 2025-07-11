// Navbar.tsx
import React from 'react';
import logo from '../assets/images/logo.svg';
import moon from '../assets/images/icon-moon.svg';
import sun from '../assets/images/icon-sun.svg';

// ✅ Define prop types
type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-[color:var(--neutral-0)] dark:bg-[color:var(--neutral-700)] shadow rounded-2xl fixed top-10 md:left-15 md:right-15 z-50 right-5 left-5">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white 2xl:-ml-15">
          <img src={logo} alt="logo" />
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-[color:var(--neutral-100)] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-[color:var(--neutral-600)] px-4 py-4 rounded-2xl hover:cursor-pointer"
          aria-label="Toggle Dark Mode"
          aria-pressed={darkMode}
        >
          {darkMode ? (
            <img src={sun} alt="Light mode" />
          ) : (
            <img src={moon} alt="Dark mode" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
