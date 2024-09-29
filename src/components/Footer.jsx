import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="marquee-container overflow-hidden">
        <div className="marquee-content flex whitespace-nowrap animate-marquee">
          <span className="mx-4">UNLEASH VISUAL IMPACT</span>
          <span className="mx-4">|</span>
          <span className="mx-4">UNLEASH VISUAL IMPACT</span>
          <span className="mx-4">|</span>
          <span className="mx-4">UNLEASH VISUAL IMPACT</span>
          <span className="mx-4">|</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Who we are</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">RESOURCES</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">WORK</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Video</a></li>
              <li><a href="#" className="hover:text-gray-300">Event</a></li>
              <li><a href="#" className="hover:text-gray-300">Print</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">SERVICES</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Video</a></li>
              <li><a href="#" className="hover:text-gray-300">Event</a></li>
              <li><a href="#" className="hover:text-gray-300">Print</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">CONTACT</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Talk to us</a></li>
              <li><a href="#" className="hover:text-gray-300">Career</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center text-sm">
          <p>Copyright © 2023 Red Barrels</p>
          <div>
            <a href="#" className="mr-4 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="mr-4 hover:text-gray-300">Legal</a>
            <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;