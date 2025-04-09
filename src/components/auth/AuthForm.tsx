
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, AlertCircle, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

interface AuthFormProps {
  onLogin?: (email: string, password: string) => void;
  onSignup?: (name: string, email: string, password: string) => void;
  isAdmin?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onSignup, isAdmin = false }) => {
  const { toast } = useToast();
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Phone auth state
  const [usePhone, setUsePhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  
  // Signup form state
  const [name, setName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupError, setSignupError] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    if (usePhone) {
      if (!phoneNumber || !otpValue) {
        setLoginError('Please fill in all fields.');
        return;
      }
      
      // In a real app, we would verify the OTP here
      toast({
        title: "Login Successful",
        description: isAdmin 
          ? "Welcome back, Administrator." 
          : "Welcome back to HonorFund."
      });
      return;
    }
    
    if (!loginEmail || !loginPassword) {
      setLoginError('Please fill in all fields.');
      return;
    }
    
    if (onLogin) {
      try {
        onLogin(loginEmail, loginPassword);
        toast({
          title: "Login Successful",
          description: isAdmin 
            ? "Welcome back, Administrator." 
            : "Welcome back to HonorFund."
        });
      } catch (error) {
        setLoginError('Invalid email or password. Please try again.');
      }
    } else {
      // Demo version without actual auth
      toast({
        title: "Login Successful",
        description: isAdmin 
          ? "Welcome back, Administrator. This is a demo." 
          : "This is a demo. No actual login was performed."
      });
    }
  };
  
  const handleSendOTP = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setLoginError('Please enter a valid phone number.');
      return;
    }
    
    // In a real app, we would send the OTP here
    setOtpSent(true);
    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to ${phoneNumber}.`
    });
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    
    if (!name || !signupEmail || !signupPassword || !confirmPassword) {
      setSignupError('Please fill in all fields.');
      return;
    }
    
    if (signupPassword !== confirmPassword) {
      setSignupError('Passwords do not match.');
      return;
    }
    
    if (signupPassword.length < 8) {
      setSignupError('Password must be at least 8 characters long.');
      return;
    }
    
    if (onSignup) {
      try {
        onSignup(name, signupEmail, signupPassword);
        toast({
          title: "Registration Successful",
          description: "Welcome to HonorFund. Your account has been created."
        });
      } catch (error) {
        setSignupError('An error occurred during registration. Please try again.');
      }
    } else {
      // Demo version without actual auth
      toast({
        title: "Registration Successful",
        description: "This is a demo. No actual registration was performed."
      });
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          {!isAdmin && <TabsTrigger value="signup">Sign Up</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}
            
            {!isAdmin && (
              <div className="flex space-x-4 mb-4">
                <Button 
                  type="button" 
                  variant={usePhone ? "outline" : "default"}
                  className="flex-1"
                  onClick={() => setUsePhone(false)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button 
                  type="button" 
                  variant={usePhone ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setUsePhone(true)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Phone
                </Button>
              </div>
            )}
            
            {!usePhone ? (
              <>
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <Input 
                    id="login-email" 
                    type="email" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative mt-1">
                    <Input 
                      id="login-password" 
                      type={showLoginPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="phone-number"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your mobile number"
                      className="mt-1"
                    />
                    <Button 
                      type="button" 
                      onClick={handleSendOTP}
                      disabled={otpSent}
                    >
                      {otpSent ? "Resend" : "Send OTP"}
                    </Button>
                  </div>
                </div>
                
                {otpSent && (
                  <div>
                    <Label htmlFor="otp-input">Enter OTP</Label>
                    <div className="mt-1">
                      <InputOTP 
                        maxLength={6}
                        value={otpValue}
                        onChange={setOtpValue}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>
                )}
              </>
            )}
            
            <Button type="submit" className={`w-full ${isAdmin ? 'bg-patriot-red' : 'bg-patriot-blue'}`}>
              {isAdmin ? "Admin Login" : "Login"}
            </Button>
            
            {!isAdmin && !usePhone && (
              <div className="text-center">
                <a href="#" className="text-sm text-patriot-blue hover:underline">
                  Forgot your password?
                </a>
              </div>
            )}
          </form>
        </TabsContent>
        
        {!isAdmin && (
          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4">
              {signupError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{signupError}</AlertDescription>
                </Alert>
              )}
              
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input 
                  id="signup-email" 
                  type="email" 
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative mt-1">
                  <Input 
                    id="signup-password" 
                    type={showSignupPassword ? "text" : "password"}
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative mt-1">
                  <Input 
                    id="confirm-password" 
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-patriot-blue">
                Create Account
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By creating an account, you agree to our <a href="#" className="text-patriot-blue hover:underline">Terms of Service</a> and <a href="#" className="text-patriot-blue hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default AuthForm;
