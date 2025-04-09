
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Check, Info, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StartCampaign = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleStepChange = (newStep: number) => {
    if (newStep > step && !validateCurrentStep()) {
      return;
    }
    setStep(newStep);
  };

  const validateCurrentStep = () => {
    // In a real app, validate form fields here
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, submit form data to backend
    setFormSubmitted(true);
    
    toast({
      title: "Campaign Submitted",
      description: "Your campaign has been submitted for review.",
      variant: "default",
    });
  };

  if (formSubmitted) {
    return (
      <Layout>
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                  <Check className="h-8 w-8" />
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
                  Application Submitted
                </h1>
                
                <p className="text-gray-700 mb-6">
                  Thank you for submitting your campaign. Our team will review your application and documentation within 24-48 hours. You'll receive an email notification once the review is complete.
                </p>
                
                <Button asChild className="bg-patriot-blue hover:bg-navy-700">
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="hero-gradient text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Start a Campaign</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Create a campaign to support your family after the loss of a service member
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div 
                    className={`flex-1 flex flex-col items-center ${step >= 1 ? 'text-patriot-blue' : 'text-gray-400'}`}
                    onClick={() => step > 1 && handleStepChange(1)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-patriot-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                      1
                    </div>
                    <span className="mt-2 text-sm">Basic Info</span>
                  </div>
                  
                  <div className={`flex-1 h-0.5 ${step >= 2 ? 'bg-patriot-blue' : 'bg-gray-200'}`}></div>
                  
                  <div 
                    className={`flex-1 flex flex-col items-center ${step >= 2 ? 'text-patriot-blue' : 'text-gray-400'}`}
                    onClick={() => step > 2 && handleStepChange(2)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-patriot-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                      2
                    </div>
                    <span className="mt-2 text-sm">Campaign Details</span>
                  </div>
                  
                  <div className={`flex-1 h-0.5 ${step >= 3 ? 'bg-patriot-blue' : 'bg-gray-200'}`}></div>
                  
                  <div 
                    className={`flex-1 flex flex-col items-center ${step >= 3 ? 'text-patriot-blue' : 'text-gray-400'}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-patriot-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                      3
                    </div>
                    <span className="mt-2 text-sm">Verification</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-800 mb-6">Basic Information</h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" className="mt-1" required />
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" className="mt-1" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" className="mt-1" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-1" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="relationship">Relationship to Fallen Service Member</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spouse">Spouse</SelectItem>
                            <SelectItem value="child">Child</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="sibling">Sibling</SelectItem>
                            <SelectItem value="other">Other (please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Alert className="bg-blue-50 border-blue-200">
                        <Info className="h-4 w-4 text-blue-500" />
                        <AlertDescription className="text-blue-700">
                          All information will be verified during our review process. Please ensure accuracy.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Campaign Details */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-800 mb-6">Campaign Details</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="campaign-title">Campaign Title</Label>
                        <Input id="campaign-title" className="mt-1" placeholder="e.g., Support for the Johnson Family" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="campaign-goal">Fundraising Goal ($)</Label>
                        <Input id="campaign-goal" type="number" min="1000" step="500" className="mt-1" placeholder="e.g., 25000" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="campaign-category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical">Medical Expenses</SelectItem>
                            <SelectItem value="education">Education Fund</SelectItem>
                            <SelectItem value="housing">Housing Support</SelectItem>
                            <SelectItem value="memorial">Memorial Fund</SelectItem>
                            <SelectItem value="general">General Family Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="campaign-summary">Short Summary</Label>
                        <Textarea 
                          id="campaign-summary" 
                          placeholder="Provide a brief summary (50-100 words)" 
                          className="mt-1 h-20"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="campaign-story">Campaign Story</Label>
                        <Textarea 
                          id="campaign-story" 
                          placeholder="Share the service member's story and explain how the funds will be used" 
                          className="mt-1 h-40"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label>Campaign Image</Label>
                        <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">Drag and drop an image or click to upload</p>
                          <p className="text-xs text-gray-400 mt-1">Recommended size: 1200 x 800 pixels</p>
                          <Input id="campaign-image" type="file" accept="image/*" className="hidden" />
                          <Button variant="outline" size="sm" className="mt-4">
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Verification Documents */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-800 mb-6">Verification Documents</h2>
                    
                    <Alert className="bg-amber-50 border-amber-200 mb-6">
                      <AlertCircle className="h-4 w-4 text-amber-500" />
                      <AlertDescription className="text-amber-700">
                        To prevent fraud and ensure all funds reach legitimate families, we require documentation to verify your identity and relationship to the service member.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-6">
                      <div>
                        <Label className="text-navy-800 font-medium">Service Member Information</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                          <div>
                            <Label htmlFor="sm-first-name" className="text-sm">First Name</Label>
                            <Input id="sm-first-name" className="mt-1" required />
                          </div>
                          <div>
                            <Label htmlFor="sm-last-name" className="text-sm">Last Name</Label>
                            <Input id="sm-last-name" className="mt-1" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <Label htmlFor="sm-branch" className="text-sm">Military Branch</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select branch" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="army">Army</SelectItem>
                                <SelectItem value="navy">Navy</SelectItem>
                                <SelectItem value="airforce">Air Force</SelectItem>
                                <SelectItem value="marines">Marine Corps</SelectItem>
                                <SelectItem value="coastguard">Coast Guard</SelectItem>
                                <SelectItem value="spacforce">Space Force</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="sm-rank" className="text-sm">Rank</Label>
                            <Input id="sm-rank" className="mt-1" required />
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <Label className="text-navy-800 font-medium">Required Documents</Label>
                        <p className="text-sm text-gray-500 mt-1 mb-4">
                          Please upload the following documents for verification.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="doc-id" className="text-sm">Your Photo ID</Label>
                            <div className="mt-1 border border-gray-300 rounded-lg p-4">
                              <Input id="doc-id" type="file" className="mb-2" required />
                              <p className="text-xs text-gray-500">Driver's license, passport, or state ID</p>
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="doc-death-certificate" className="text-sm">Death Certificate or Military Casualty Report</Label>
                            <div className="mt-1 border border-gray-300 rounded-lg p-4">
                              <Input id="doc-death-certificate" type="file" className="mb-2" required />
                              <p className="text-xs text-gray-500">Document showing proof of service member's passing</p>
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="doc-relationship" className="text-sm">Proof of Relationship</Label>
                            <div className="mt-1 border border-gray-300 rounded-lg p-4">
                              <Input id="doc-relationship" type="file" className="mb-2" required />
                              <p className="text-xs text-gray-500">Marriage certificate, birth certificate, or other legal documentation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Alert className="bg-blue-50 border-blue-200">
                        <Info className="h-4 w-4 text-blue-500" />
                        <AlertDescription className="text-sm text-blue-700">
                          Your documents are kept secure and confidential. They are only used for verification purposes and will not be shared publicly.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  {step > 1 ? (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => handleStepChange(step - 1)}
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < 3 ? (
                    <Button 
                      type="button"
                      onClick={() => handleStepChange(step + 1)}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-patriot-red hover:bg-red-700">
                      Submit Campaign
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StartCampaign;
