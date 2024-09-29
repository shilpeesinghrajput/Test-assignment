import React from 'react';
import Layer from '../asserts/images/Layer.svg';
import Ikea from '../asserts/images/Ikea.svg';
import Indeed from '../asserts/images/Indeed.svg';
import Indiagold from '../asserts/images/indiagold.svg';
import Swiggy from '../asserts/images/Swiggy.svg';
import WIT from '../asserts/images/WIT.svg';
import My from '../asserts/images/My.svg';
import './Clients.scss'

const Clients = () => {
  // Update the array to pair client names with their corresponding images
  const clients = [
    { name: 'Layer', image: Layer },
    { name: 'Ikea', image: Ikea },
    { name: 'Indeed', image: Indeed },
    { name: 'Indiagold', image: Indiagold },
    { name: 'Swiggy', image: Swiggy },
    { name: 'WIT', image: WIT },
    { name: 'My', image: My },
  ];

  return (
    <section className="bg-white mt-[120px] overflow-hidden">
      <div className="w-full overflow-hidden relative">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={client.name}
              className="h-[26px]"
            />
          ))}
          {/* Duplicate the list for smooth looping effect */}
          {clients.map((client, index) => (
            <img
              key={`duplicate-${index}`}
              src={client.image}
              alt={client.name}
              className="h-[26px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
