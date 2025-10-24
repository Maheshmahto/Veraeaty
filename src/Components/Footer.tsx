import React from 'react';
// import { Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from "../assets/Variety Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 py-4 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-between gap-2 lg:flex-col ">
          {/* Left Text - Hidden on mobile */}
           <div className="flex flex-col items-center">
            <img 
              src={logo} 
              alt="Veraeaty Logo" 
              className="w-12 h-8 mb-1"
            />
            <h1 className="text-lg font-medium tracking-[4px] text-[#1F2937] font-[montserrat]">
              VERAEATY
            </h1>
          </div>

          <div className="flex-1 hidden md:block">
            <p className="text-sm leading-relaxed text-gray-900">
              AI-powered food generation for the future of cooking.
            </p>
          </div>

          {/* Center Logo */}
        
    
          {/* Mobile Text */}
          <div className="w-full mt-2 text-center md:hidden">
            <p className="text-xs leading-relaxed text-gray-900">
              AI-powered food generation for the future of cooking.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-3 bg-gray-300"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs font-normal text-gray-600">
            © 2025 Veraeaty AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;