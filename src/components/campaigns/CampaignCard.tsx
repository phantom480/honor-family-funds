
import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Clock, Users } from 'lucide-react';

interface CampaignProps {
  campaign: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    raised: number;
    goal: number;
    daysLeft: number;
    supporters: number;
  };
}

const CampaignCard: React.FC<CampaignProps> = ({ campaign }) => {
  const percentFunded = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden">
      <Link to={`/campaigns/${campaign.id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={campaign.imageUrl} 
            alt={campaign.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/campaigns/${campaign.id}`}>
          <h3 className="text-lg font-bold text-navy-800 mb-2 hover:text-patriot-blue transition-colors">
            {campaign.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {campaign.description}
        </p>
        
        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-semibold text-patriot-blue">${campaign.raised.toLocaleString()}</span>
            <span className="text-gray-500">raised of ${campaign.goal.toLocaleString()}</span>
          </div>
          <Progress value={percentFunded} className="h-2" />
          <div className="flex justify-between text-xs mt-1">
            <span className="text-gray-500">{percentFunded}% funded</span>
          </div>
        </div>
        
        {/* Campaign Details */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{campaign.daysLeft} days left</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{campaign.supporters} supporters</span>
          </div>
        </div>
        
        <Link 
          to={`/campaigns/${campaign.id}`}
          className="block w-full text-center bg-patriot-blue hover:bg-navy-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;
