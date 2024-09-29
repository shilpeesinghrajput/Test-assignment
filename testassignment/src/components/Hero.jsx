import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid'; 
import Marin from "../asserts/images/Marin.png";
import Ayesha from "../asserts/images/Ayesha.png";


const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container ">
        <h1 className="text-[104px] font-[500] mt-[36px] mb-[48px] text-[#111010]">
          WE ARE A <br />
          GLOBAL <span className="text-[#EF001C]">PRODUCTION</span> <br />
          AGENCY
        </h1>
        <p className="text-[24px] font-[600] mb-8 max-w-3xl text-[#111010]">
        Designed with the specific needs of large B2B enterprises in mind, our platform offers a comprehensive solution to simplify.
        </p>
        <div className='flex items-center gap-4 mt-[40px]'>
        <button className="bg-[#EF001C] text-white px-[32px] py-[20px] rounded-full hover:bg-[#EF001C] transition-colors text-[16px] font-[700]">
        Get professional video services  
        <ArrowRightIcon className="w-4 h-4 ml-1 inline-block hover:text-[#EF001C]" />

        </button>
        <div className="flex items-center">
          <img src={Marin} alt="User" className="w-10 h-10 rounded-full" />
          <img src={Ayesha} alt="User" className="w-10 h-10 rounded-full" />
          <div className='text-[16px] font-[500] ml-2'>
          <div className="text-[#111010]  ">Marin / Ayesha</div>
          <div className='text-[#7a7878] '>Global Services</div>
          </div>
          
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;