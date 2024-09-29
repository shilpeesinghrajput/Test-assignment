import React from 'react';

const StatItem = ({ value, label }) => (
  <div className='mt-[30px]'>
    <div className="text-[86px] font-[500] text-[#111010] mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const Stats = () => {
  const stats = [
    { value: '60+', label: 'markets partnered with' },
    { value: '3K+', label: 'hours support globally created' },
    { value: '1K+', label: 'global partners and collaborators' },
    { value: '100+', label: 'video transcreation' },
  ];

  return (
    <section className="bg-white mt-[128px]">
      <div className="container">
      <div className="flex items-center">
      <div className="w-[54px] border-t border-[#DB2F2C] h-0  mr-2" />
  <h2 className="text-[20px] font-[600] text-[#EF001C] text-center">
  WE ARE GLOBAL
  </h2>
  </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;