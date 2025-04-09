
import React from 'react';
import { Search, Heart, DollarSign, Users } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Find a Campaign",
    description: "Browse through campaigns of families who need support after losing their loved ones in service."
  },
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Contribute any amount to help families with expenses, education, or medical needs."
  },
  {
    icon: DollarSign,
    title: "Funds Reach Families",
    description: "100% of your contribution goes directly to the families after verification."
  },
  {
    icon: Users,
    title: "Stay Connected",
    description: "Follow campaign updates and see the impact of your generosity."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-3">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our platform makes it easy to support families of fallen soldiers with a simple and transparent process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-patriot-blue text-white mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-navy-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
