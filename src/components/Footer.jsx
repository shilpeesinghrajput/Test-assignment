import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="text-black bg-transparent">
      {/* Marquee Section */}
      <div className="marquee-container bg-black text-white py-4 sm:py-6 md:py-10 overflow-hidden">
        <div className="marquee-content text-2xl sm:text-3xl md:text-5xl lg:text-[68px] font-medium flex whitespace-nowrap animate-marquee">
          <span className="mx-1 sm:mx-2">UNLEASH VISUAL IMPACT</span>
          <span className="mx-1 sm:mx-2">|</span>
          <span className="mx-1 sm:mx-2">UNLEASH VISUAL IMPACT</span>
          <span className="mx-1 sm:mx-2">|</span>
          <span className="mx-1 sm:mx-2">UNLEASH VISUAL IMPACT</span>
          <span className="mx-1 sm:mx-2">|</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 mt-6 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 bg-white">
          {['COMPANY', 'RESOURCES', 'WORK', 'SERVICES', 'CONTACT'].map((title, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#111010] mb-2">{title}</h3>
              <ul className="space-y-1">
                {['Who we are', 'Blog', 'Video', 'Event', 'Print', 'Talk to us', 'Career'].slice(0, 3).map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-gray-600 text-xs sm:text-sm md:text-base">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="mb-4 sm:mb-0">Copyright © 2023 Red Barrels</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Legal</a>
            <a href="#" className="hover:text-gray-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
