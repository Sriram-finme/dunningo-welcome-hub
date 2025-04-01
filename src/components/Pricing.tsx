
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "24/7 support",
      "1 team member"
    ],
    isPopular: false,
    buttonText: "Get Started"
  },
  {
    name: "Business",
    price: "$29",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Up to 10 team members",
      "Custom workflows",
      "API access"
    ],
    isPopular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "$79",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited everything",
      "Enterprise security",
      "Dedicated account manager",
      "Unlimited team members",
      "Custom integrations",
      "Advanced permissions",
      "Custom reporting"
    ],
    isPopular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Simple Pricing</span>, Powerful Results
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that works for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden
                ${plan.isPopular ? 'border-dunningo-purple ring-2 ring-dunningo-purple/20 transform scale-105 md:-translate-y-2' : 'border-gray-200'}
              `}
            >
              {plan.isPopular && (
                <div className="bg-dunningo-purple text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full ${plan.isPopular ? 'bg-dunningo-purple hover:bg-dunningo-purple-dark' : 'bg-gray-800 hover:bg-gray-900'}`}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="mt-8">
                  <p className="text-sm font-medium mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-dunningo-purple mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
