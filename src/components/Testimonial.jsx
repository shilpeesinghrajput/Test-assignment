import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      image: 'https://picsum.photos/id/20/484/517',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      name: 'LISSA SMITH, PHD',
      role: 'DIRECTOR OF MARKETING AND COMMUNICATIONS',
    },
    {
      image: 'https://picsum.photos/id/22/484/517',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      name: 'SINGH SIGNH, PGH',
      role: 'manas academy',
    },
    {
      image: 'https://picsum.photos/id/21/484/517',
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      name: 'SINGH SIGNH, PGH',
      role: 'manas academy',
    },
    // Add more testimonials here
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white mt-[129px]">
      <div className="container px-4">
        <div className="flex items-center  mb-6">
          <div className="w-[54px] border-t border-[#DB2F2C] h-0 mr-2" />
          <h2 className="text-[20px] font-[600] text-[#DB2F2C] text-center">
            TESTIMONY FROM OUR PARTNERS
          </h2>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center max-w-full bg-white overflow-hidden mt-[36px]">
          <div className="md:w-1/2 md:mb-0 mb-4">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full p-4">
            <p className="text-gray-600 mb-4">{testimonials[currentSlide].text}</p>
            <div className="flex justify-between items-center md:items-end h-auto md:h-[484px]">
              <div>
                <h4 className="font-semibold">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
              </div>
              <div className="flex gap-[10px]">
                <button onClick={prevSlide} className="mr-2 p-2 md:p-4 rounded-full border border-gray-300">
                  <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="p-2 md:p-4 rounded-full bg-[#EF001C] text-white">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
