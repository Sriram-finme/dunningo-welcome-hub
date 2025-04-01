
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-dunningo-purple rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated With Our Newsletter
              </h2>
              <p className="text-dunningo-purple-light/90 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest updates, news, and special offers delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white/30"
                />
                <Button className="bg-white text-dunningo-purple hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
              
              <p className="mt-4 text-sm text-white/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
