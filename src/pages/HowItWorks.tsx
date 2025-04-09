
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText, ShieldCheck, UserCheck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How HonorFund Works</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A simple process that connects donors with families of fallen heroes
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-patriot-blue text-white mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-4">Campaign Creation</h2>
              <p className="text-gray-700 mb-4">
                Families or designated representatives can start a campaign by registering on HonorFund and providing the necessary documentation to verify their eligibility.
              </p>
              <p className="text-gray-700 mb-4">
                Our team reviews all documentation to confirm the service member's status and the family relationship, typically within 24-48 hours.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Military service verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Family relationship documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Description of financial need</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Campaign Creation" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Donor Contributions" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-patriot-blue text-white mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-4">Donor Contributions</h2>
              <p className="text-gray-700 mb-4">
                Once approved, campaigns are published on our platform where donors can browse and contribute to causes that resonate with them.
              </p>
              <p className="text-gray-700 mb-4">
                Donors can make one-time or recurring contributions using various payment methods, with 98% of funds going directly to beneficiaries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Optional recurring donations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Transparent fee structure (only 2% platform fee)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-patriot-blue text-white mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-4">Fund Distribution</h2>
              <p className="text-gray-700 mb-4">
                Funds are transferred directly to verified beneficiaries on a weekly basis or when specific milestones are reached.
              </p>
              <p className="text-gray-700 mb-4">
                Families can use the funds for various needs, including housing, medical expenses, education, or daily living costs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Direct bank transfers to beneficiaries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Regular disbursement schedule</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">Transparent tracking of fund usage</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Fund Distribution" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-3">Our Verification Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take verification seriously to ensure funds reach genuine families of fallen service members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-patriot-blue mb-4">
                <FileText className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Document Review</h3>
              <p className="text-gray-600">
                We carefully review service records, death certificates, and family documentation to verify each case.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-patriot-blue mb-4">
                <UserCheck className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Identity Verification</h3>
              <p className="text-gray-600">
                We use secure identity verification processes to confirm beneficiaries' identities and relationships.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-patriot-blue mb-4">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">Ongoing Monitoring</h3>
              <p className="text-gray-600">
                We maintain regular contact with beneficiaries and monitor campaigns to ensure funds are used appropriately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-6">Ready to Get Started?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you want to donate to an existing campaign or start a new one for a family in need, 
            we're here to help you make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-patriot-blue hover:bg-navy-700 text-white px-8 py-6 text-lg">
              <Link to="/campaigns">Browse Campaigns</Link>
            </Button>
            <Button asChild variant="outline" className="border-patriot-blue text-patriot-blue hover:bg-patriot-blue/10 px-8 py-6 text-lg">
              <Link to="/start-campaign" className="flex items-center">
                Start a Campaign <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
