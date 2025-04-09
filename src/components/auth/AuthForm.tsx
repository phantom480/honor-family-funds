
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  onLogin?: (email: string, password: string) => void;
  onSignup?: (name: string, email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, onSignup }) => {
  const { toast } = useToast();
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
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
    
    if (!loginEmail || !loginPassword) {
      setLoginError('Please fill in all fields.');
      return;
    }
    
    if (onLogin) {
      try {
        onLogin(loginEmail, loginPassword);
        toast({
          title: "Login Successful",
          description: "Welcome back to HonorFund."
        });
      } catch (error) {
        setLoginError('Invalid email or password. Please try again.');
      }
    } else {
      // Demo version without actual auth
      toast({
        title: "Login Successful",
        description: "This is a demo. No actual login was performed."
      });
    }
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
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}
            
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
            
            <Button type="submit" className="w-full bg-patriot-blue">
              Login
            </Button>
            
            <div className="text-center">
              <a href="#" className="text-sm text-patriot-blue hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </TabsContent>
        
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
      </Tabs>
    </div>
  );
};

export default AuthForm;
