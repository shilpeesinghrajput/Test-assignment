import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/solid'; 
import './Contact.scss'


const ContactForm = () => {
  return (
    <form className="w-full max-w-lg">
      <div className="inputArea">
        <input type="text" placeholder="Name*" className="inputField" required />
      </div>
      <div className="inputArea">
        <input type="text" placeholder="Company name" className="inputField"required/>
        </div>
      <div className="inputArea">
        <input type="email" placeholder="Email*" className="inputField" required />
      </div>
      <div className="inputArea">
        <input type="tel" placeholder="Phone no*" className="inputField" required />
      </div>
      <div className="inputArea">
        <textarea placeholder="Message*" rows="4" className="inputField" required></textarea>
      </div>
      <button type="submit" className="inputBtn  bg-[#EF001C] py-3 px-4 rounded-full hover:bg-[#EF001C] transition-colors">
        CONTACT US
        <ArrowRightIcon className="w-4 h-4 ml-1 inline-block hover:text-[#EF001C]" />

      </button>
    </form>
  );
};

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="bg-gray-100 mt-[120px]">
      <div className="container">
        <div className="flex flex-wrap ml-[90px]">
          <div className="w-full lg:w-1/2  lg:mb-0 mt-[80px] mb-[96px]">
            <p className="text-[64px] text-[#111010] font-[500]  ">
            LETS START SOMETHING <br />
              <span className="text-[#EF001C]">NEW</span><br />
              TOGETHER
            </p>
            <div className="flex items-center mt-[63px]">
              <TeamMember 
                image="/path-to-avatar1.jpg" 
                name="Mike Fisher" 
                role="Visual design expert" 
              />
              <TeamMember 
                image="/path-to-avatar2.jpg" 
                name="Annie Wagner" 
                role="Visual design expert" 
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-[130px]">
            <div>
              <h3 className="text-[24px] font-[600] text-[#111010] mb-6">Give us few details and we’ll get in touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;