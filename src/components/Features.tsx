
import React from 'react';
import { CheckCircle, BarChart2, Clock, Users, Lock, Zap } from 'lucide-react';

const featuresList = [
  {
    icon: <BarChart2 className="h-6 w-6 text-dunningo-purple" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with comprehensive analytics and customizable reports.'
  },
  {
    icon: <Clock className="h-6 w-6 text-dunningo-purple" />,
    title: 'Time Tracking',
    description: 'Monitor productivity and manage resources with our intuitive time tracking feature.'
  },
  {
    icon: <Users className="h-6 w-6 text-dunningo-purple" />,
    title: 'Team Collaboration',
    description: 'Foster teamwork with real-time collaboration tools designed for modern teams.'
  },
  {
    icon: <Lock className="h-6 w-6 text-dunningo-purple" />,
    title: 'Enterprise Security',
    description: 'Keep your data secure with industry-leading security practices and encryption.'
  },
  {
    icon: <Zap className="h-6 w-6 text-dunningo-purple" />,
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks and focus on what matters with smart automations.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-dunningo-purple" />,
    title: 'Task Management',
    description: 'Organize and prioritize tasks efficiently with our intuitive management system.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Powerful Features</span> For Your Business
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to manage your business efficiently in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="card-highlight p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="h-12 w-12 bg-dunningo-purple/10 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
