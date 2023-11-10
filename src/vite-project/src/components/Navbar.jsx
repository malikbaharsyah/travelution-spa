import React, {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import navbarlogo from '../img/logo2.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-400 p-4">
      <div className="flex items-center justify-between">
        <img src={navbarlogo} alt="navbarlogo" class="w-24 h-9"/>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex items-center space-x-6 mr-2">
            <Link to="/dashboard" className="text-black">Home</Link>
            <Link to="/voucher" className="text-black">Voucher</Link>
            <Link to="/packages" className="text-black">Packages</Link>
            <Link to="/subscriptions" className="text-black">Subscriptions</Link>
            <Link to="/specialplace" className="text-black">Special Place</Link>
            <div onClick={toggleDropdown} className="relative inline-block text-left text-black focus:outline-none hover:text-indigo-500">
                        Jason
                    <div
                        className={`${
                            isDropdownOpen ? 'block' : 'hidden'
                        } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link to="/create-travel-plan" className="block px-4 py-2 text-sm text-black" role="menuitem">
                                Create Travel Plan
                            </Link>
                            <Link to="/" className="block px-4 py-2 text-sm text-black" role="menuitem">
                                  Logout
                            </Link>
                        </div>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;