
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <span className="bg-dunningo-purple/10 text-dunningo-purple text-sm font-medium px-4 py-2 rounded-full">
              Launching Soon
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl animate-fade-in-delay-1">
            <span className="gradient-text">Simplify Your Workflow</span> With Our Intuitive SaaS Platform
          </h1>
          
          <p className="mt-6 text-lg text-gray-600 max-w-2xl animate-fade-in-delay-2">
            Boost productivity and streamline operations with our all-in-one solution. 
            Designed for teams of all sizes to collaborate efficiently.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Button size="lg" className="bg-dunningo-purple hover:bg-dunningo-purple-dark">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-dunningo-purple text-dunningo-purple hover:bg-dunningo-purple/10">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 relative w-full max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-dunningo-purple to-dunningo-purple-light rounded-xl blur-lg opacity-30"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3200&auto=format&fit=crop" 
                alt="Dunningo Dashboard Preview" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
