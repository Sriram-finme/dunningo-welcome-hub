
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small collection agencies and startups",
    features: [
      "Up to 1,000 accounts",
      "WhatsApp & SMS channels",
      "Basic AI segmentation",
      "Standard reporting",
      "Email support"
    ],
    isPopular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$1,499",
    description: "Ideal for growing NBFCs and mid-size banks",
    features: [
      "Up to 10,000 accounts",
      "All digital channels",
      "Advanced AI psychology",
      "Performance analytics",
      "Custom templates",
      "API access",
      "Priority support"
    ],
    isPopular: true,
    buttonText: "Sign Up Now"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large financial institutions with complex needs",
    features: [
      "Unlimited accounts",
      "Full omnichannel suite",
      "Custom AI models",
      "Advanced analytics & reporting",
      "Integration support",
      "Dedicated account manager",
      "SLA guarantee",
      "White labeling"
    ],
    isPopular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Simple Pricing</span>, Powerful Results
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Choose the plan that works for your collection needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                glass-card rounded-xl border transition-all duration-300 overflow-hidden
                ${plan.isPopular ? 'border-white/30 ring-2 ring-white/20 transform scale-105 md:-translate-y-2' : 'border-white/10'}
              `}
            >
              {plan.isPopular && (
                <div className="bg-white/20 backdrop-blur-md text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full ${plan.isPopular ? 'glass-button' : 'glass-outline-button'}`}
                >
                  {plan.buttonText}
                </Button>
                
                <div className="mt-8">
                  <p className="text-sm font-medium mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
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
