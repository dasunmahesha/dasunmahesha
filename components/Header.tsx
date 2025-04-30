"use client"

import Link from 'next/link';
import { useState, FC } from 'react';

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 
                                  bg-clip-text text-transparent">
            DasunMahesha<span className="text-gray-900">.dev</span>
          </Link>
          
          <nav className="hidden md:flex space-x-10">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-700 font-medium transition duration-300 
                         relative after:absolute after:w-full after:h-0.5 after:bg-blue-700 
                         after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 
                         after:transition-transform after:duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-700 font-medium transition duration-300 
                           px-2 py-1 rounded-lg hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;