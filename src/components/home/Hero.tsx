
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Support Families of Our Fallen Heroes
            </h1>
            <p className="text-lg mb-6 text-gray-200 max-w-md">
              Join us in providing financial assistance and emotional support to the families of soldiers who made the ultimate sacrifice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-patriot-red hover:bg-red-700 text-white px-6 py-6 font-semibold text-base">
                <Link to="/campaigns">Browse Campaigns</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-6 font-semibold text-base">
                <Link to="/start-campaign" className="flex items-center">
                  Start a Campaign <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1587933853518-9bf890174775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Military family"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl animate-slide-up">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Total Raised</p>
                    <p className="text-patriot-blue font-bold text-xl">$2.7M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
