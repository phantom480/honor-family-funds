
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The support from donors through HonorFund helped my children and me get back on our feet after losing my husband. Words can't express our gratitude.",
    name: "Lisa Johnson",
    relation: "Wife of Sgt. Michael Johnson"
  },
  {
    quote: "When we lost David, we didn't know how we'd manage. The campaign created for us provided not just financial support, but a community that cares.",
    name: "Maria Martinez",
    relation: "Mother of Cpl. David Martinez"
  },
  {
    quote: "The education fund created for my children means they can still pursue their dreams, just as their mother would have wanted.",
    name: "James Williams",
    relation: "Husband of Lt. Sarah Williams"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-3">Impact Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from families who have been supported by generous donors through our platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 relative">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-gray-200" />
              <div className="relative">
                <p className="text-gray-700 mb-6 italic text-lg pt-8">{testimonial.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-navy-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
