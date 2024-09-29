import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Marin from "../asserts/images/Marin.png";
import Ayesha from "../asserts/images/Ayesha.png";

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl   sm:px-0 lg:px-4 py-12 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 text-[#111010] leading-tight">
          WE ARE A <br />
          GLOBAL <span className="text-[#EF001C]">PRODUCTION</span> <br />
          AGENCY
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 max-w-3xl text-[#111010]">
          Designed with the specific needs of large B2B enterprises in mind, our platform offers a comprehensive solution to simplify.
        </p>
        <div className='flex flex-col sm:flex-row items-start  sm:items-center gap-6 mt-8'>
          <button className=" sm:text-xl bg-[#EF001C] text-white  px-6 py-4 rounded-full hover:bg-[#EF001C] transition-colors text-base md:text-xl font-bold w-full sm:w-auto whitespace-nowrap">
            Get professional video services
            <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
          </button>
          <div className="flex items-center mt-4 sm:mt-0">
            <img src={Marin} alt="Marin" className="w-10 h-10 rounded-full" />
            <img src={Ayesha} alt="Ayesha" className="w-10 h-10 rounded-full -ml-4" />
            <div className='text-sm md:text-base font-medium ml-3'>
              <div className="text-[#111010]">Marin / Ayesha</div>
              <div className='text-[#7a7878]'>Global Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;