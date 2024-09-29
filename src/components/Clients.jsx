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
    <section className="bg-white mt-8 sm:mt-12 md:mt-16 lg:mt-20 overflow-hidden">
      <div className="w-full overflow-hidden relative py-4 sm:py-6">
        <div className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
          {clients.concat(clients).map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={client.name}
              className="h-4 sm:h-5 md:h-6 lg:h-[26px] w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;