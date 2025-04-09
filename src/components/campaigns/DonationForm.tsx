
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { CreditCard, DollarSign } from 'lucide-react';

interface DonationFormProps {
  campaignTitle: string;
  onSubmit: (amount: number, isAnonymous: boolean) => void;
}

const predefinedAmounts = [25, 50, 100, 250];

const DonationForm: React.FC<DonationFormProps> = ({ campaignTitle, onSubmit }) => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setAmount(amount);
    setIsCustomAmount(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
      setCustomAmount(value);
      setAmount(value ? parseFloat(value) : 0);
      setIsCustomAmount(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(amount, isAnonymous);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-navy-800 mb-2">Donate to Support</h2>
      <p className="text-gray-600 mb-6">{campaignTitle}</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="donation-amount" className="block mb-2">Select Amount</Label>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {predefinedAmounts.map((presetAmount) => (
              <Button
                key={presetAmount}
                type="button"
                variant={!isCustomAmount && amount === presetAmount ? "default" : "outline"}
                className={!isCustomAmount && amount === presetAmount ? "bg-patriot-blue" : ""}
                onClick={() => handleAmountSelect(presetAmount)}
              >
                ${presetAmount}
              </Button>
            ))}
          </div>
          
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              id="donation-amount"
              type="text"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={(checked) => setIsAnonymous(!!checked)} />
            <Label htmlFor="anonymous" className="text-sm text-gray-700">
              Make my donation anonymous
            </Label>
          </div>
        </div>
        
        <Tabs defaultValue="creditCard" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="creditCard">Credit Card</TabsTrigger>
            <TabsTrigger value="paypal">PayPal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="creditCard" className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="card-name">Name on Card</Label>
                <Input id="card-name" placeholder="John Doe" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative mt-1">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <Input id="card-number" placeholder="1234 5678 9012 3456" className="pl-10" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="mt-1" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="paypal" className="text-center py-6">
            <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your donation.</p>
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="mx-auto" />
          </TabsContent>
        </Tabs>
        
        <Button type="submit" className="w-full bg-patriot-red hover:bg-red-700 py-6 text-lg">
          Donate ${amount || 0}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By proceeding, you agree to our Terms of Service and acknowledge that your donation is not tax-deductible.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;
