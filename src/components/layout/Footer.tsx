
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-patriot-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Heart className="h-5 w-5 text-patriot-blue" />
              </div>
              <h3 className="text-xl font-bold">HonorFund</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Dedicated to supporting the families of fallen heroes through community-powered fundraising.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-patriot-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-patriot-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-patriot-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-patriot-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">Browse Campaigns</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/start-campaign" className="text-gray-300 hover:text-white transition-colors">Start a Campaign</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-patriot-gold" />
                <span className="text-sm text-gray-300">123 Heroes Avenue, Arlington, VA 22209, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-patriot-gold" />
                <span className="text-sm text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-patriot-gold" />
                <span className="text-sm text-gray-300">support@honorfund.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HonorFund. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
