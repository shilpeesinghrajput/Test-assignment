import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

const accordionData = [
  {
    title: 'Innovation',
    content: 'Content for Innovation section...',
    image: 'https://picsum.photos/id/4/484/451'
  },
  {
    title: 'Reliable',
    content: 'Consistently delivering your strategic recruiter capabilities. From sourced to short-listed, our platform helps at your strategic pacing.',
    image: 'https://picsum.photos/id/2/484/451'
  },
  {
    title: 'Quality',
    content: 'Content for Quality section...',
    image: 'https://picsum.photos/id/7/484/451'
  },
];

const AccordionItem = ({ title, currentNo, content, isOpen, onClick, isActive }) => (
  <div className={`border-b border-t border-gray-200 ${isActive ? '' : ''}`}>
    {!isOpen && (
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={onClick}
      >
        <span className={`font-[500] text-[18px] md:text-[24px] ${isActive ? 'text-[#EF001C]' : 'text-[#333333]'}`}>
          {title}
        </span>
        {/* {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />} */}
      </button>
    )}
    {isOpen && (
      <div className="p-4 text-[#111010CC] text-[16px] md:text-[18px] font-[400]">
        <div>
          <span className={`font-[500] text-[18px] md:text-[20px] mt-[10px] md:mt-[20px] ${isActive ? 'text-[#EF001C]' : 'text-[#EF001C]'}`}>
            {currentNo.toString().padStart(2, '0')}
          </span>
        </div>
        <div>
          <span className={`font-[500] text-[28px] md:text-[32px] mt-[10px] md:mt-[20px] ${isActive ? 'text-[#111010]' : 'text-[#111010]'}`}>
            {title}
          </span>
        </div>
        {content}
      </div>
    )}
  </div>
);

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="p-4">
      <div className="mt-[32px] md:mt-[128px]">
        <p className="text-[32px] md:text-[52px] font-[500] text-[#111010] leading-tight">
          Our expertise and passion <br className="hidden md:block" />
          breathe life into your narratives
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-4xl gap-[20px] md:gap-[51px] bg-white overflow-hidden mt-[32px]">
        <div className="w-full md:w-1/2 mt-[32px] md:mt-[64px]">
          <img
            src={accordionData[activeIndex].image}
            alt={`Image for ${accordionData[activeIndex].title}`}
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 mt-[20px] md:mt-[101px]">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              currentNo={index + 1}
              content={item.content}
              isOpen={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
