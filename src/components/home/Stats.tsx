
import React from 'react';

const stats = [
  {
    value: "2.7M+",
    label: "Total Raised"
  },
  {
    value: "450+",
    label: "Families Supported"
  },
  {
    value: "12K+",
    label: "Donors"
  },
  {
    value: "98%",
    label: "Funds Directly to Families"
  }
];

const Stats = () => {
  return (
    <section className="py-12 bg-patriot-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-patriot-gold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
