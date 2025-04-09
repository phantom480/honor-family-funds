
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stats = [
  {
    value: "₹2.1Cr+",
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
    label: "Funds Directly to Army Families"
  }
];

const armyImages = [
  {
    url: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    caption: "Indian Army Soldiers on Patrol"
  },
  {
    url: "https://images.unsplash.com/photo-1580130379624-3a069adbfff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    caption: "Brave Soldiers at India's Border"
  },
  {
    url: "https://images.unsplash.com/photo-1587930536533-aa60d5c3439a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    caption: "Army Personnel in Action"
  },
  {
    url: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    caption: "Defending the Nation"
  }
];

const Stats = () => {
  return (
    <section className="py-12 bg-patriot-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-patriot-gold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {armyImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <p className="text-center text-sm mt-2 text-gray-300">{image.caption}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
