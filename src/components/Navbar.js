// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">My Website</div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:border-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 3H22V5H2V3ZM2 11H22V13H2V11ZM2 19H22V21H2V19Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 14H20V16H4V14ZM4 20H20V22H4V20Z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center">
          <a href="#" className="text-white px-4 py-2">
            Home
          </a>
          <a href="#" className="text-white px-4 py-2">
            About
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-700 p-2">
          <a href="#" className="block text-white px-4 py-2">
            Home
          </a>
          <a href="#" className="block text-white px-4 py-2">
            About
          </a>
          {/* Add more links as needed */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
