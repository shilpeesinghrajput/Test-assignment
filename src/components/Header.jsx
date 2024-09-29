import React, { useState } from 'react';
import myLogo from "../asserts/images/logo.svg";
import { Menu, X } from 'lucide-react';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="hover:text-[#111010] hover:font-bold flex items-center"
      onClick={toggleMenu}
    >
      {children}
    </a>
  );

  return (
    <header className="bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <img src={myLogo} alt="Company Logo" className="h-6 md:h-8 w-auto" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4 lg:space-x-6">
              <li><NavLink href="#services">SERVICES <ArrowUpRightIcon className="w-3 h-3 ml-1 inline-block hover:text-[#EF001C]" /></NavLink></li>
              <li><NavLink href="#work">WORK <ArrowUpRightIcon className="w-3 h-3 ml-1 inline-block hover:text-[#EF001C]" /></NavLink></li>
              <li><NavLink href="#about">ABOUT <ArrowDownRightIcon className="w-3 h-3 ml-1 inline-block hover:text-[#EF001C]" /></NavLink></li>
              <li>
                <button className="text-white px-4 py-2 rounded-full bg-[#EF001C] hover:bg-red-700 transition-colors text-sm whitespace-nowrap">
                  GET STARTED
                </button>
              </li>
            </ul>
          </nav>
          <button 
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full mt-8 items-center space-y-8 text-xl">
          <NavLink href="#services">SERVICES <ArrowUpRightIcon className="w-4 h-4 ml-1 inline-block hover:text-[#EF001C]" /></NavLink>
          <NavLink href="#work">WORK <ArrowUpRightIcon className="w-4 h-4 ml-1 inline-block hover:text-[#EF001C]" /></NavLink>
          <NavLink href="#about">ABOUT <ArrowDownRightIcon className="w-4 h-4 ml-1 inline-block hover:text-[#EF001C]" /></NavLink>
          <button className="mt-4 bg-[#EF001C] text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors text-base whitespace-nowrap">
            GET STARTED
          </button>
        </div>
      </div>
      
      <hr className="border-gray-200" />
    </header>
  );
};

export default Header;