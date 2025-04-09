
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-navy-800 to-patriot-blue rounded-xl p-8 md:p-12 shadow-lg text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Join thousands of supporters who are helping the families of our fallen heroes rebuild their lives. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-patriot-red hover:bg-red-700 text-white px-8 py-6 text-lg">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link to="/start-campaign">Start a Campaign</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
