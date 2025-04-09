
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CampaignFilter from '@/components/campaigns/CampaignFilter';
import CampaignList from '@/components/campaigns/CampaignList';

// Mock campaign data
const CAMPAIGNS = [
  {
    id: 1,
    title: "Support the Sharma Family",
    description: "Help Maj. Rajesh Sharma's family with education expenses after his heroic sacrifice in service.",
    imageUrl: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 950000,
    goal: 2000000,
    daysLeft: 18,
    supporters: 142
  },
  {
    id: 2,
    title: "Kumar Family Medical Fund",
    description: "Support the Kumar family with medical expenses following the loss of Capt. Sunil Kumar.",
    imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 1500000,
    goal: 2500000,
    daysLeft: 12,
    supporters: 208
  },
  {
    id: 3,
    title: "Gupta Children Education Fund",
    description: "Help provide education for Lt. Col. Ravi Gupta's three children after his service to our nation.",
    imageUrl: "https://images.unsplash.com/photo-1547226846-000337ebd352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 1800000,
    goal: 3000000,
    daysLeft: 24,
    supporters: 275
  },
  {
    id: 4,
    title: "Singh Family Housing Support",
    description: "Help the Singh family secure stable housing after the loss of Major Singh during a border operation.",
    imageUrl: "https://images.unsplash.com/photo-1607582544280-ac0927055751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 2500000,
    goal: 4000000,
    daysLeft: 30,
    supporters: 310
  },
  {
    id: 5,
    title: "Patel Medical Expenses",
    description: "Support the Patel family with ongoing medical expenses for their children after Havildar Patel's sacrifice.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 1250000,
    goal: 2200000,
    daysLeft: 15,
    supporters: 187
  },
  {
    id: 6,
    title: "Mehra Memorial Fund",
    description: "Help establish a memorial for Col. Mehra and provide support for his young family.",
    imageUrl: "https://images.unsplash.com/photo-1561489404-42f5b5d886b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 780000,
    goal: 1500000,
    daysLeft: 21,
    supporters: 98
  }
];

const Campaigns = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState(CAMPAIGNS);

  const handleFilter = (filters: any) => {
    console.log('Applied filters:', filters);
    // In a real app, you would apply actual filtering here
    // For demo purposes, we'll just use the full list
    setFilteredCampaigns(CAMPAIGNS);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-patriot-blue mb-4">Campaigns</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Support the families of brave Indian Army soldiers by contributing to these campaigns
            </p>
          </div>

          <CampaignFilter onFilter={handleFilter} />
          
          <CampaignList campaigns={filteredCampaigns} />
          
          {filteredCampaigns.length > 0 && (
            <div className="mt-10 text-center">
              <button className="bg-white text-patriot-blue border border-patriot-blue hover:bg-gray-50 font-medium rounded-md px-6 py-2">
                Load More Campaigns
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Campaigns;
