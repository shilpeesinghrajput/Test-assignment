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
      <div className="flex-grow">
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Hero />
        </section>
        <Clients />
        <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Expertise />
          <Stats />
          <Testimonial />
          <FAQ />
        </main>
      </div>
      <div className='px-4 sm:px-6 lg:px-8 '>
      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default Layout;