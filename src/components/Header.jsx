
import myLogo from "../asserts/images/logo.svg"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ArrowDownRightIcon ,ArrowUpRightIcon } from '@heroicons/react/24/solid'; 




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container text-[14px] font-[600] text-[#111010]">
        <div className="flex justify-between items-center mt-[22px] mb-[26px] ml-[90px]">
          <div className="flex items-center">
          <img src={myLogo} alt="Company Logo" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:block">
  <ul className="flex items-center space-x-6 ">
    <li>
      <a href="#services" className="hover:text-[#111010] hover:font-[700] flex items-center">
        SERVICES
        < ArrowUpRightIcon className="w-4 h-3 hover:text-[#EF001C] ml-1 inline-block" />
      </a>
    </li>
    <li>
      <a href="#work" className="hover:text-[#111010] hover:font-[700] flex items-center">
        WORK
        <ArrowUpRightIcon className="w-4 h-3 ml-1 inline-block hover:text-[#EF001C]" />
      </a>
    </li>
    <li>
      <a href="#about" className="hover:text-[#111010] hover:font-[700] flex items-center">
        ABOUT
        <ArrowDownRightIcon className="w-4 h-3 ml-1 inline-block hover:text-[#EF001C]" />
      </a>
    </li>
    <li>
      <button className="text-white px-6 py-[3px] rounded-[32px] bg-[#EF001C] hover:bg-[#EF001C] transition-colors">
        GET STARTED
      </button>
    </li>
  </ul>
</nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li><a href="#services" className="block py-2 hover:text-[#EF001C]">SERVICES</a></li>
                <li><a href="#work" className="block py-2 hover:text-[#EF001C]">WORK</a></li>
                <li><a href="#about" className="block py-2 hover:text-[#EF001C]">ABOUT</a></li>
              </ul>
            </nav>
            <button className="mt-4 w-full bg-[#EF001C] text-white px-4 py-2 rounded-full hover:bg-[#EF001C] transition-colors">
              GET STARTED
            </button>
          </div>
        )}
      </div>
      <hr />
    </header>
  );
};

export default Header;