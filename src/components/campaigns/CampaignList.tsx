
import React from 'react';
import CampaignCard from './CampaignCard';

interface Campaign {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  raised: number;
  goal: number;
  daysLeft: number;
  supporters: number;
}

interface CampaignListProps {
  campaigns: Campaign[];
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold text-gray-700">No campaigns found.</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
