
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
              AI-Powered Collections
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl animate-fade-in-delay-1">
            <span className="text-gradient">Psychological Approach</span> To Collect Cash Faster
          </h1>
          
          <p className="mt-6 text-lg text-gray-400 max-w-2xl animate-fade-in-delay-2">
            Our WhatsApp-first omnichannel solution helps banks, NBFCs, and collection agencies 
            recover more with AI-driven psychological insights.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Button size="lg" className="glass-button">
              Sign Up Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="glass-outline-button">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp Demo
            </Button>
          </div>
          
          <div className="mt-16 relative w-full max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur-lg opacity-30"></div>
            <div className="relative glass-card rounded-xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Collections AI Dashboard Preview" 
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
