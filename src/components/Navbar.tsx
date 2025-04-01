
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-dunningo-purple">Dunningo</span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-dunningo-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-dunningo-purple transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-dunningo-purple transition-colors">Pricing</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-dunningo-purple transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-dunningo-purple text-dunningo-purple hover:bg-dunningo-purple hover:text-white">
            Log in
          </Button>
          <Button className="bg-dunningo-purple hover:bg-dunningo-purple-dark">
            Sign up
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-dunningo-purple py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-dunningo-purple py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-dunningo-purple py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-dunningo-purple py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full border-dunningo-purple text-dunningo-purple hover:bg-dunningo-purple hover:text-white">
                Log in
              </Button>
              <Button className="w-full bg-dunningo-purple hover:bg-dunningo-purple-dark">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
