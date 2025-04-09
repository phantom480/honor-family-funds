
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CampaignCard from '../campaigns/CampaignCard';
import { ArrowRight } from 'lucide-react';

// Mock data for featured campaigns
const FEATURED_CAMPAIGNS = [
  {
    id: 1,
    title: "Support the Johnson Family",
    description: "Help Sgt. Michael Johnson's family with education expenses after his heroic sacrifice in service.",
    imageUrl: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 12500,
    goal: 25000,
    daysLeft: 18,
    supporters: 142
  },
  {
    id: 2,
    title: "Martinez Family Medical Fund",
    description: "Support the Martinez family with medical expenses following the loss of Cpl. David Martinez.",
    imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 18750,
    goal: 30000,
    daysLeft: 12,
    supporters: 208
  },
  {
    id: 3,
    title: "Williams Children Education Fund",
    description: "Help provide education for Lt. Sarah Williams' three children after her service to our country.",
    imageUrl: "https://images.unsplash.com/photo-1547226846-000337ebd352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 22000,
    goal: 40000,
    daysLeft: 24,
    supporters: 275
  },
];

const FeaturedCampaigns = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-patriot-blue mb-2">Featured Campaigns</h2>
            <p className="text-gray-600">Help these families in their time of need</p>
          </div>
          <Button asChild variant="ghost" className="mt-4 md:mt-0">
            <Link to="/campaigns" className="flex items-center text-patriot-blue">
              View all campaigns <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CAMPAIGNS.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
