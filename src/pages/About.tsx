
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Target, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency and accountability in all our campaigns and financial transactions."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating meaningful, measurable impacts for families of fallen service members."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach each family's situation with empathy, respect, and understanding."
    },
    {
      icon: Users,
      title: "Community",
      description: "We build supportive communities around families to provide both financial and emotional support."
    }
  ];

  return (
    <Layout>
      <div className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About HonorFund</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Supporting families of fallen heroes through community-powered fundraising
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                HonorFund was founded in 2023 with a clear mission: to provide financial support and community
                assistance to the families of military service members who have made the ultimate sacrifice.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that when someone gives their life in service to our country, it's our collective
                responsibility to ensure their family doesn't face financial hardship in addition to their
                tremendous personal loss.
              </p>
              <p className="text-gray-700">
                Through our platform, we connect generous donors with verified families in need, ensuring
                that 98% of all funds raised go directly to beneficiaries.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Military Memorial" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-3">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at HonorFund
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-patriot-blue text-white mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-3">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals behind HonorFund
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy-800">James Wilson</h3>
              <p className="text-patriot-blue font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former Army Captain with 12 years of service, James founded HonorFund after losing several 
                fellow soldiers and witnessing the challenges their families faced.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                    alt="Sarah Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy-800">Sarah Martinez</h3>
              <p className="text-patriot-blue font-medium mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">
                With a background in nonprofit management and as a military spouse, Sarah oversees all 
                campaign operations and family verifications.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy-800">Michael Chen</h3>
              <p className="text-patriot-blue font-medium mb-2">Technology Lead</p>
              <p className="text-gray-600 text-sm">
                A veteran and software engineer, Michael leads our technology team, ensuring our 
                platform is secure, accessible, and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
