import React, { useState } from 'react';

const ExtensionCard = ({ logo, name, description, onRemove }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-white dark:bg-[color:var(--neutral-700)] rounded-2xl border-2 border-gray-200 dark:border-[color:var(--neutral-600)] shadow p-4 flex flex-col justify-between w-full max-w-sm mx-auto min-h-[200px] space-y-2"> {/* Reduced space */}
      <div className="flex items-center space-x-4 mb-3"> {/* Reduced margin-bottom */}
        <img src={logo} alt={`${name} logo`} className="w-12 h-12 object-contain" />
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{name}</h3> {/* Made the title text bigger */}
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">{description}</p> {/* Made the description text bigger */}
        </div>
      </div>

      <div className="flex justify-between items-center pt-2 mt-2"> {/* Reduced the space between text and buttons */}
        <button
          onClick={onRemove}
          className={`px-6 py-2 text-sm font-semibold rounded-2xl 
            ${enabled ? 'bg-red-500' : 'bg-gray-500'} 
            dark:bg-[color:var(--neutral-700)] border-2 dark:border-[color:var(--neutral-600)] 
            text-white hover:bg-red-600 transition`}
        >
          Remove
        </button>

        <label htmlFor={`toggle-${name}`} className="flex items-center cursor-pointer select-none">
          <div className="relative">
            <input
              type="checkbox"
              id={`toggle-${name}`}
              className="sr-only"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            />
            <div className="block bg-gray-300 dark:bg-neutral-600 w-12 h-6 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                enabled ? 'transform translate-x-6' : ''
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
