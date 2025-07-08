import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ExtensionCard from './components/ExtenstionCard.jsx';
import extensionData from './data/data.json';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode based on localStorage
    return localStorage.getItem('theme') === 'dark';
  });

  const handleRemove = () => {
    alert('Remove clicked!');
  };

  useEffect(() => {
    // Toggle the 'dark' class on the <html> element to apply dark mode
    document.documentElement.classList.toggle('dark', darkMode);
    // Save the theme to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const buttonBase = `
    px-3 py-2 sm:px-4 sm:py-2 rounded-4xl font-semibold 
    transition-colors duration-300 
    text-white bg-[color:var(--btn-bg)] dark:bg-[color:var(--btn-bg-dark)]
    hover:bg-[color:var(--btn-hover)] dark:hover:bg-[color:var(--btn-hover-dark)]
  `;

  return (
    <div
      className={`min-h-screen px-4 sm:px-8 transition-colors duration-300 
        ${darkMode ? 'bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] dark:bg-[color:var(--neutral-700)]' : 'bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)]'}`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-32 sm:pt-36 px-4 sm:px-8">
        {/* Container for title and buttons */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <h2 className="text-lg sm:text-xl font-semibold text-[color:var(--got-700)] dark:text-white text-center sm:text-left">
            Extension List
          </h2>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-4 sm:mt-0 justify-center sm:justify-end">
            <button className={`${buttonBase} text-sm sm:text-base px-3 py-2`}>
              All
            </button>
            <button className={`${buttonBase} text-sm sm:text-base px-4 py-2`}>
              Active
            </button>
            <button className={`${buttonBase} text-sm sm:text-base px-4 py-2`}>
              Inactive
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 px-4 sm:px-8">
        {/* Extension Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensionData.length === 0 ? (
            <div>Loading extensions...</div>
          ) : (
            extensionData.map((extension, index) => (
              <ExtensionCard
                key={index}
                logo={`./assets/images/${extension.logo}`} // Use relative paths to images
                name={extension.name}
                description={extension.description}
                isActive={extension.isActive}
                onRemove={handleRemove}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
