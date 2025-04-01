
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductScreens from '@/components/ProductScreens';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductScreens />
        <Testimonials />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
