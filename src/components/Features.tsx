
import React from 'react';
import { MessageSquare, BarChart2, Brain, UserCheck, Lock, Zap } from 'lucide-react';

const featuresList = [
  {
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    title: 'WhatsApp-First Approach',
    description: 'Engage customers on their preferred channel with interactive payment reminders and updates.'
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: 'Psychological AI Engine',
    description: 'Leverage behavioral science to craft personalized messages that drive faster payments.'
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-white" />,
    title: 'Advanced Analytics',
    description: 'Track collection performance with real-time metrics and AI-powered forecasting.'
  },
  {
    icon: <UserCheck className="h-6 w-6 text-white" />,
    title: 'Customer Segmentation',
    description: 'Automatically segment customers based on payment behavior and psychographic profiles.'
  },
  {
    icon: <Lock className="h-6 w-6 text-white" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with all financial data protection regulations.'
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: 'Omnichannel Orchestration',
    description: 'Seamlessly coordinate collection efforts across WhatsApp, SMS, email, and voice channels.'
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
              className="glass-card p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="h-12 w-12 bg-white/10 rounded-lg flex items-center justify-center mb-5 backdrop-blur-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
