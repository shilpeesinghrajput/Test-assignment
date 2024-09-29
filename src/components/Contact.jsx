import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import './Contact.scss'
import Mike from "../asserts/images/Mask.png"
import Annie from "../asserts/images/Mask2.png"

const ContactForm = () => {
  return (
    <form className="w-full max-w-lg">
      {['Name*', 'Company name', 'Email*', 'Phone no*'].map((placeholder, index) => (
        <div key={index} className="inputArea mb-4">
          <input 
            type={placeholder.toLowerCase().includes('email') ? 'email' : 'text'}
            placeholder={placeholder}
            className="inputField w-full px-4 py-2 rounded-md border border-gray-300"
            required={placeholder.includes('*')}
          />
        </div>
      ))}
      <div className="inputArea mb-4">
        <textarea 
          placeholder="Message*" 
          rows="4" 
          className="inputField w-full px-4 py-2 rounded-md border border-gray-300"
          required
        ></textarea>
      </div>
      <button type="submit" className="inputBtn bg-[#EF001C] text-white py-3 px-10 rounded-full hover:bg-red-600 transition-colors flex justify-center w-full sm:w-auto">
  CONTACT US
  <ArrowRightIcon className="w-4 h-4 ml-2 inline-block" />
</button>


    </form>
  );
};

const TeamMember = ({ image, description, name }) => {
  return (
    <div className="mb-6 sm:mb-0 px-4 sm:px-6 border-l-2 border-gray-300">
      <img src={image} alt={name} className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full" />
      <div>
        <p className="text-sm mt-4 font-normal text-gray-500">{description}</p>
        <p className="mt-4 font-medium text-sm text-[#1E1F1F]">{name}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="bg-gray-100 mt-12 sm:mt-4 lg:mt-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 mt-8 sm:mt-6 lg:mt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#111010] font-medium leading-tight mb-8">
              LETS START SOMETHING <br />
              <span className="text-[#EF001C]">NEW</span><br />
              TOGETHER
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-[56px] mt-8 sm:mt-12 lg:mt-[63px]">
              <TeamMember 
                image={Annie}
                description="All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists." 
                name="Milly Cyrus, Global Lead" 
              />
              <TeamMember 
                image={Mike}
                description="All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists."
                name="Vinita Singh, Asst. Global Lead" 
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-[130px]">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#111010] mb-6">Give us few details and we'll get in touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;