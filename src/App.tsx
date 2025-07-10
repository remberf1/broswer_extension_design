import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ExtensionCard from './components/ExtenstionCard.jsx';
import extensionData from './data/data.json';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [filter, setFilter] = useState('all');
  const [extensions, setExtensions] = useState(() =>
    extensionData.map((ext) => ({ ...ext, enabled: ext.isActive }))
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleToggle = (index) => {
    const updated = [...extensions];
    updated[index].enabled = !updated[index].enabled;
    setExtensions(updated);
  };

  const handleRemove = (index) => {
    const updated = [...extensions];
    updated.splice(index, 1);
    setExtensions(updated);
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'active') return ext.enabled;
    if (filter === 'inactive') return !ext.enabled;
    return true; // 'all'
  });

  const buttonBase = `
    px-3 py-2 sm:px-4 sm:py-2 rounded-4xl font-semibold 
    transition-colors duration-300 
     hover:cursor-pointer
    
  `;

const isActiveBtn = (btn) =>
  filter === btn
    ? 'bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none'
    : `bg-[color:var(--neutral-0)] text-[color:var(--neutral-700)]
       hover:bg-[color:var(--neutral-200)] 
       dark:bg-[color:var(--neutral-700)] 
       dark:text-white 
       dark:hover:bg-[color:var(--neutral-600)] 
       focus:ring-2 focus:ring-red-500 focus:outline-none
       shadow-md focus:bg-[color:var(--neutral-600)]`;

  return (
    <div
      className={`min-h-screen px-4 sm:px-8 transition-colors duration-300 
        ${darkMode ? 'bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] dark:bg-[color:var(--neutral-700)]' : 'bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)]'}`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-32 sm:pt-36 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <h2 className="text-lg sm:text-xl  text-[color:var(--neutral-700)] dark:text-[color:var(--neutral-0)] text-center sm:text-left md:text-3xl font-bold">
            Extension List
          </h2>

          <div className="flex flex-row gap-4 mt-4 sm:mt-0 justify-center sm:justify-end dark:focus:bg-[var(--neutral-600)]">
            {['all', 'active', 'inactive'].map((type) => (
              <button
                key={type}
                className={`${buttonBase} ${isActiveBtn(type)} text-sm sm:text-base  `}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 lg:gap-x-2 xl:gap-x-2">
          {filteredExtensions.length === 0 ? (
            <div>No extensions found.</div>
          ) : (
            filteredExtensions.map((extension, index) => (
              <ExtensionCard
                key={index}
                logo={`./assets/images/${extension.logo}`}
                name={extension.name}
                description={extension.description}
                enabled={extension.enabled}
                onToggle={() => handleToggle(index)}
                onRemove={() => handleRemove(index)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
