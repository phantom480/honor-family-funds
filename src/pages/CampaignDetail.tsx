
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CampaignDetail from '@/components/campaigns/CampaignDetail';

// Mock campaign data
const CAMPAIGNS = [
  {
    id: 1,
    title: "Support the Sharma Family",
    description: "Help Maj. Rajesh Sharma's family with education expenses after his heroic sacrifice in service.",
    story: "Major Rajesh Sharma served in the Indian Army for 12 years before making the ultimate sacrifice during a counter-terrorism operation in the northern border. He leaves behind his wife Priya and their two children, Aanya (9) and Arjun (6).\n\nRajesh always emphasized the importance of education and dreamed of sending his children to the best schools and colleges. With his passing, this dream is at risk.\n\nThis campaign aims to establish an education fund for Aanya and Arjun to ensure they can pursue higher education when the time comes. Your contribution will help secure their future and honor Rajesh's legacy.\n\nThe funds will be directly managed by Priya Sharma and will solely be used for the children's educational needs, including college savings plans, school supplies, and educational activities.\n\nYour support means everything to this family during this difficult time. Thank you for helping us honor Major Sharma's memory by investing in his children's future.",
    updates: [
      {
        date: "March 15, 2025",
        content: "We've reached 50% of our goal! Thank you to everyone who has contributed so far. Your generosity means the world to us. Aanya and Arjun are beginning to adjust to their new reality, and knowing that their education is being secured gives us one less thing to worry about."
      },
      {
        date: "March 7, 2025",
        content: "Thank you for the outpouring of support in our first week. We're touched by all your kind messages and contributions. We've started the process of setting up education savings accounts for both Aanya and Arjun."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 950000,
    goal: 2000000,
    daysLeft: 18,
    supporters: 142,
    organizer: {
      name: "Vikram Sharma",
      role: "Campaign Organizer (Brother of Maj. Sharma)",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    beneficiary: {
      name: "Priya Sharma",
      relation: "Wife of Maj. Rajesh Sharma"
    }
  },
  {
    id: 2,
    title: "Kumar Family Medical Fund",
    description: "Support the Kumar family with medical expenses following the loss of Capt. Sunil Kumar.",
    story: "Captain Sunil Kumar served in the Indian Army for 8 years before he was tragically lost during a training accident. He leaves behind his wife Meera and their son Aarav (4), who has special medical needs.\n\nAarav was diagnosed with a rare medical condition at age 2 and requires ongoing specialized care. Sunil and Meera had been carefully managing his medical expenses, but with Sunil's passing, Meera is struggling to cover the costs on a single income.\n\nThis campaign aims to help the Kumar family with Aarav's medical expenses for the next two years, giving Meera time to adjust to her new situation and establish a sustainable plan for the future.\n\nFunds will go directly to medical bills, specialized therapy sessions, and necessary medical equipment for Aarav.\n\nYour support will make a significant difference in helping this family maintain the care Aarav needs during this incredibly difficult time. Thank you for honoring Captain Kumar's memory by helping care for his son.",
    updates: [
      {
        date: "March 22, 2025",
        content: "Thanks to your generous donations, Aarav was able to start his new therapy sessions last week. The doctors are already seeing improvement, and we're so grateful for your support during this time."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 1500000,
    goal: 2500000,
    daysLeft: 12,
    supporters: 208,
    organizer: {
      name: "Amit Kumar",
      role: "Campaign Organizer (Brother of Capt. Kumar)",
      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    beneficiary: {
      name: "Meera Kumar",
      relation: "Wife of Capt. Sunil Kumar"
    }
  }
];

const CampaignDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const campaignId = parseInt(id || '1');
  
  // Find the campaign data for the given ID
  const campaign = CAMPAIGNS.find(camp => camp.id === campaignId) || CAMPAIGNS[0];

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <CampaignDetail campaign={campaign} />
      </div>
    </Layout>
  );
};

export default CampaignDetailPage;
