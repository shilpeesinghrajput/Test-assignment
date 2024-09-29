import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Clients from './Clients';
import Expertise from './Expertise';
import Stats from './Stats';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import FAQ from './Faq'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <heading className="flex-grow ml-[90px]">
        <Hero />
        </heading>
        <Clients />
        <main className="flex-grow ml-[90px]">
        <Expertise />
        <Stats />
        <Testimonial />
        <FAQ/>
        
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;