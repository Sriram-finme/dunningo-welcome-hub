
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, BarChart2, MessageSquare, CreditCard } from 'lucide-react';

const screens = [
  {
    title: "Collection Activity Timeline",
    description: "Track all customer interactions and payment reminders across channels in a comprehensive timeline view",
    icon: <Calendar className="h-6 w-6 text-white" />,
    image: "/lovable-uploads/47983ddb-3f3f-483d-8dfa-50382df446af.png",
    alt: "Collection Activity Timeline showing customer interactions"
  },
  {
    title: "Customer Profile Dashboard",
    description: "Get a 360° view of your customers with detailed profiles, contact information and payment history",
    icon: <Users className="h-6 w-6 text-white" />,
    image: "/lovable-uploads/9213348a-98c2-4978-95e8-5fbcc9ca6659.png",
    alt: "Customer profile dashboard showing payment history"
  },
  {
    title: "Advanced Analytics",
    description: "Visualize collection performance with AI-driven insights and forecasting to increase recovery rates",
    icon: <BarChart2 className="h-6 w-6 text-white" />,
    image: "/lovable-uploads/3ce598c1-9298-4720-9e2f-8de769702d6f.png",
    alt: "Analytics dashboard with collection metrics and charts"
  },
  {
    title: "Multichannel Reminders",
    description: "Send personalized payment reminders across WhatsApp, SMS, email and voice channels with message templates",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    image: "/lovable-uploads/5dc65a89-8b26-41d0-88c5-93c009a7d02b.png",
    alt: "Template library for multichannel payment reminders"
  },
  {
    title: "Payment Processing",
    description: "Seamless payment collection with multiple options and real-time reconciliation for faster settlements",
    icon: <CreditCard className="h-6 w-6 text-white" />,
    image: "/lovable-uploads/47983ddb-3f3f-483d-8dfa-50382df446af.png",
    alt: "Payment processing interface with transaction history"
  }
];

const ProductScreens = () => {
  return (
    <section id="product-screens" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful <span className="text-gradient">Collections Platform</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Experience the future of collections management with our AI-driven solution
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {screens.map((screen, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="glass-card border-white/10 h-full">
                      <CardContent className="flex flex-col p-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 z-10 rounded-t-lg" />
                          <img 
                            src={screen.image} 
                            alt={screen.alt}
                            className="w-full h-56 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                            {screen.icon}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
                          <p className="text-gray-400">{screen.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static translate-y-0 left-0 right-auto" />
              <CarouselNext className="relative static translate-y-0 right-0 left-auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductScreens;
