import React from 'react';
import { importAllLogos } from '../utilis/importAllLogos';

const logos = importAllLogos();

const ExtensionCard = ({ logo, name, description, enabled, onToggle, onRemove }) => {
  const filename = logo.split('/').pop();  // "logo-devlens.svg"

  return (
    <div className="bg-white dark:bg-[color:var(--neutral-700)] rounded-2xl border-2 border-gray-200 dark:border-[color:var(--neutral-600)] shadow p-4 lg:p-0 xl:p-1 flex flex-col justify-between lg:w-full min-h-[200px] space-y-2">
      <div className="flex items-center space-x-4 mb-3 lg:mb-2 ml-2 mt-2">
        <img src={logos[filename]} alt={`${name} logo`} className="w-20 h-20 object-contain" />
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 lg:mt-2">{description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center relative bottom-4 px-4 ">
        <button
          onClick={onRemove}
          className={`px-6 py-2 text-sm font-semibold rounded-3xl hover:cursor-pointer
            text-[color:var(--neutral-700)]
            dark:bg-[color:var(--neutral-700)] border-2 border-[var(--neutral-100)] dark:border-[color:var(--neutral-600)] bg-[color:var(--neutral-0)]
             hover:bg-red-600 transition
             focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-[var(--neutral-600)]`}
        >
          Remove
        </button>
            <label
              htmlFor={`toggle-${name}`}
              className="flex items-center cursor-pointer select-none"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={`toggle-${name}`}
                  className="sr-only peer"
                  checked={enabled}
                  onChange={onToggle}
                />
                <div
                  className={`
                    block w-12 h-6 rounded-full transition-colors duration-300
                    ${enabled ? 'bg-red-500' : 'bg-gray-300 dark:bg-neutral-600'}
                     peer-focus:ring-2 peer-focus:ring-red-500 peer-focus:ring-offset-2 peer-focus:ring-offset-[color:var(--neutral-700)]
                  `}
                ></div>
                <div
                  className={`
                    dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform
                    ${enabled ? 'transform translate-x-6' : ''}
                  `}
                ></div>
              </div>
            </label>

        
      </div>
    </div>
  );
};

export default ExtensionCard;
