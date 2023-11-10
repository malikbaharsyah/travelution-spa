import React, {useRef, useEffect, useState} from 'react';
import navbarlogo from '../img/logo2.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
            <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">Voucher</a>
            <a href="#" className="text-black">Packages</a>
            <a href="#" className="text-black">Subscriptions</a>
            <a href="#" className="text-black">Special Place</a>
            <a href="#" className="text-black">Jason</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;