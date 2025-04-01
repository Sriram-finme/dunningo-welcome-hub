
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for signing up! We'll be in touch soon.");
      setEmail('');
      setName('');
      setCompany('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <div className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Collections Today
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Sign up for a free consultation and see how our AI-powered psychological approach can boost your recovery rates.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
                    required
                  />
                  <Input 
                    type="text" 
                    placeholder="Company Name" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="glass-button" 
                    disabled={loading}
                  >
                    {loading ? "Signing Up..." : "Sign Up Free"}
                  </Button>
                </div>
              </form>
              
              <p className="mt-4 text-sm text-white/70">
                We respect your privacy. Your information will not be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
