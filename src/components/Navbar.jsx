// Navbar.jsx
import React from 'react';
import logo from '../assets/images/logo.svg';
import moon from '../assets/images/icon-moon.svg';
import sun from '../assets/images/icon-sun.svg';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-[color:var(--neutral-700)] shadow rounded-md fixed top-10 left-5 right-5 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          <img src={logo} alt="logo" />
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-800 dark:text-gray-200 focus:outline-none"
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
