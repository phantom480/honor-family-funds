
import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share2, Flag, Clock, Users, Shield, Info } from 'lucide-react';

interface CampaignDetailProps {
  campaign: {
    id: number;
    title: string;
    description: string;
    story: string;
    updates: Array<{ date: string; content: string }>;
    imageUrl: string;
    raised: number;
    goal: number;
    daysLeft: number;
    supporters: number;
    organizer: {
      name: string;
      role: string;
      imageUrl: string;
    };
    beneficiary?: {
      name: string;
      relation: string;
    };
  };
}

const CampaignDetail: React.FC<CampaignDetailProps> = ({ campaign }) => {
  const percentFunded = Math.min(Math.round((campaign.raised / campaign.goal) * 100), 100);

  // Format currency in Indian format (lakhs and crores)
  const formatIndianCurrency = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Campaign Media and Story */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <img 
              src={campaign.imageUrl} 
              alt={campaign.title} 
              className="w-full h-96 object-cover"
            />
            
            <Tabs defaultValue="story" className="p-6">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="story" className="space-y-4">
                <h2 className="text-2xl font-bold text-navy-800 mb-4">Campaign Story</h2>
                <p className="text-gray-700 whitespace-pre-line">{campaign.story}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 flex">
                  <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-800">Verification</h4>
                    <p className="text-sm text-gray-600">This campaign has been verified by our team. Documentation proving military service and relationship has been reviewed.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="updates">
                {campaign.updates && campaign.updates.length > 0 ? (
                  <div className="space-y-6">
                    {campaign.updates.map((update, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-navy-800">Update from Organizer</h4>
                          <span className="text-sm text-gray-500">{update.date}</span>
                        </div>
                        <p className="text-gray-700">{update.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No updates have been posted yet.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="comments">
                <div className="text-center py-8">
                  <p className="text-gray-500">Comments will be available soon.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center mb-4">
              <img 
                src={campaign.organizer.imageUrl} 
                alt={campaign.organizer.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-navy-800">{campaign.organizer.name}</h3>
                <p className="text-sm text-gray-500">{campaign.organizer.role}</p>
              </div>
            </div>
            
            {campaign.beneficiary && (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Beneficiary</h4>
                <p className="text-navy-800 font-medium">{campaign.beneficiary.name}</p>
                <p className="text-sm text-gray-500">{campaign.beneficiary.relation}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Donation Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">{campaign.title}</h2>
            <p className="text-gray-600 mb-6">{campaign.description}</p>
            
            {/* Funding Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-xl text-patriot-blue">{formatIndianCurrency(campaign.raised)}</span>
                <span className="text-gray-500 self-end">raised of {formatIndianCurrency(campaign.goal)}</span>
              </div>
              <Progress value={percentFunded} className="h-2 mb-2" />
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-medium">{percentFunded}% funded</span>
              </div>
            </div>
            
            {/* Campaign Details */}
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-patriot-red" />
                <span>{campaign.daysLeft} days left</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-patriot-blue" />
                <span>{campaign.supporters} supporters</span>
              </div>
            </div>
            
            {/* Donation Buttons */}
            <div className="space-y-3 mb-6">
              <Button className="w-full bg-patriot-red hover:bg-red-700 py-6 text-lg">
                Donate Now
              </Button>
              
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="py-2">
                  <Heart className="h-5 w-5 mr-2" />
                  Save
                </Button>
                <Button variant="outline" className="py-2">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="py-2">
                  <Flag className="h-5 w-5 mr-2" />
                  Report
                </Button>
              </div>
            </div>
            
            {/* Trust & Safety */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-patriot-blue mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-navy-800 text-sm">Trust & Safety</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    All donations are secured and verified. Our platform has a 98% fund delivery rate to Indian Army families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
