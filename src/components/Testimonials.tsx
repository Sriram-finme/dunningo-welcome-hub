
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Dunningo has transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 35%.",
    author: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    stars: 5
  },
  {
    quote: "We've tried many solutions, but nothing compares to Dunningo. It's like it was custom-built for our workflow needs.",
    author: "Michael Chen",
    role: "CTO, StartupX",
    stars: 5
  },
  {
    quote: "The analytics feature alone has saved us countless hours of manual reporting. Dunningo pays for itself within the first month.",
    author: "Lisa Rodriguez",
    role: "Operations Director, GrowthCo",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See why thousands of businesses choose Dunningo for their workflow needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <div className="flex mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {Array(5 - testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <p className="text-gray-700 flex-grow mb-6 italic">"{testimonial.quote}"</p>
              
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['TechCorp', 'InnovateCo', 'FutureX', 'GlobalTech', 'NextWave'].map((company, index) => (
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
