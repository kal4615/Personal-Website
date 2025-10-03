'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react'; // Import React for type definitions

// Define the component using React's Functional Component type
const NavBar: React.FC = () => {
  // Explicitly type the state variable as a boolean
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Type the event as a React MouseEvent on an Anchor element, and targetId as a string
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    // 1. Prevent the default browser jump
    e.preventDefault();

    // 2. Find the target element by its ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 3. Use scrollIntoView for a smooth, centered scroll
      targetElement.scrollIntoView({
        behavior: 'smooth', // Makes the scroll animated
        block: 'center',    // Vertically centers the element in the viewport
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Kevin Luong
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 ml-auto text-xl">
          {/* The onClick handlers remain the same, but TypeScript now understands their types */}
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, 'projects')}
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;