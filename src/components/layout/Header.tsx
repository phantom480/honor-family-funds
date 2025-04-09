
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-patriot-blue flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-patriot-blue">Honor<span className="text-patriot-red">Fund</span></h1>
              <p className="text-xs text-gray-500">Supporting Fallen Heroes' Families</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-navy-800 hover:text-navy-600 font-medium">Home</Link>
            <Link to="/campaigns" className="text-navy-800 hover:text-navy-600 font-medium">Campaigns</Link>
            <Link to="/about" className="text-navy-800 hover:text-navy-600 font-medium">About Us</Link>
            <Link to="/how-it-works" className="text-navy-800 hover:text-navy-600 font-medium">How It Works</Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-patriot-red hover:bg-red-700 text-white">
              Start a Campaign
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-white border-t">
          <div className="container mx-auto px-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-navy-800 font-medium py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/campaigns" className="text-navy-800 font-medium py-2" onClick={toggleMenu}>Campaigns</Link>
              <Link to="/about" className="text-navy-800 font-medium py-2" onClick={toggleMenu}>About Us</Link>
              <Link to="/how-it-works" className="text-navy-800 font-medium py-2" onClick={toggleMenu}>How It Works</Link>
            </nav>
            <div className="pt-4 border-t flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start" onClick={toggleMenu}>
                <User className="h-5 w-5 mr-2" />
                Login / Register
              </Button>
              <Button variant="default" className="w-full bg-patriot-red hover:bg-red-700" onClick={toggleMenu}>
                Start a Campaign
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
