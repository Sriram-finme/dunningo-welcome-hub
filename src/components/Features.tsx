
import React from 'react';
import { MessageSquare, BarChart2, Brain, UserCheck, Lock, Zap } from 'lucide-react';

const featuresList = [
  {
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    title: 'WhatsApp-First Approach',
    description: 'Engage customers on their preferred channel with interactive payment reminders and updates.',
    image: "/lovable-uploads/5dc65a89-8b26-41d0-88c5-93c009a7d02b.png"
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: 'Psychological AI Engine',
    description: 'Leverage behavioral science to craft personalized messages that drive faster payments.',
    image: "/lovable-uploads/47983ddb-3f3f-483d-8dfa-50382df446af.png"
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-white" />,
    title: 'Advanced Analytics',
    description: 'Track collection performance with real-time metrics and AI-powered forecasting.',
    image: "/lovable-uploads/3ce598c1-9298-4720-9e2f-8de769702d6f.png"
  },
  {
    icon: <UserCheck className="h-6 w-6 text-white" />,
    title: 'Customer Segmentation',
    description: 'Automatically segment customers based on payment behavior and psychographic profiles.',
    image: "/lovable-uploads/9213348a-98c2-4978-95e8-5fbcc9ca6659.png"
  },
  {
    icon: <Lock className="h-6 w-6 text-white" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with all financial data protection regulations.',
    image: "/lovable-uploads/47983ddb-3f3f-483d-8dfa-50382df446af.png"
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: 'Omnichannel Orchestration',
    description: 'Seamlessly coordinate collection efforts across WhatsApp, SMS, email, and voice channels.',
    image: "/lovable-uploads/5dc65a89-8b26-41d0-88c5-93c009a7d02b.png"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Powerful Features</span> For Faster Collections
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to transform your collection operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
                <div className="absolute top-4 left-4 h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-md">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
