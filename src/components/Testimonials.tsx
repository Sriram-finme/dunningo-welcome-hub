
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We've increased our collection rate by 38% in the first month of using this platform. The psychological approach really works.",
    author: "Sarah Johnson",
    role: "Collections Manager, ABC Bank",
    stars: 5
  },
  {
    quote: "The WhatsApp integration is seamless. Our customers actually respond now, and the payment links make collection effortless.",
    author: "Michael Chen",
    role: "CTO, XYZ Financial",
    stars: 5
  },
  {
    quote: "The AI segmentation has transformed how we prioritize accounts. We're collecting more with less staff time and resources.",
    author: "Lisa Rodriguez",
    role: "Operations Director, Collections Agency",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by <span className="text-gradient">Financial Leaders</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            See why banks and collection agencies choose our AI solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20 flex flex-col"
            >
              <div className="flex mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {Array(5 - testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-600" />
                ))}
              </div>
              
              <p className="text-gray-300 flex-grow mb-6 italic">"{testimonial.quote}"</p>
              
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-40">
            {['National Bank', 'Fintech Solutions', 'Credit Corp', 'Global Finance', 'Recovery Pro'].map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
