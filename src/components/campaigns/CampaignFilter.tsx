
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

interface CampaignFilterProps {
  onFilter: (filters: any) => void;
}

const CampaignFilter: React.FC<CampaignFilterProps> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({
      searchTerm,
      category,
      sortBy
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Input
              type="text"
              placeholder="Search campaigns"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <Button 
            type="button" 
            variant="outline" 
            className="md:hidden flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          
          <div className={`md:flex gap-4 items-center ${showFilters ? 'block mt-4' : 'hidden'}`}>
            <div className="w-full md:w-48 mb-4 md:mb-0">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="housing">Housing</SelectItem>
                  <SelectItem value="memorial">Memorial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-48 mb-4 md:mb-0">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="urgent">Urgency</SelectItem>
                  <SelectItem value="amountRaised">Amount Raised</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="bg-patriot-blue w-full md:w-auto">
              Apply Filters
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CampaignFilter;
