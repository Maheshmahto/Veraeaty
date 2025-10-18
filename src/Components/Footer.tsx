
// import { Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';
// import logo from "../assets/Variety Logo.png"

// const Footer = () => {
//   return (
//     <footer className="bg-white px-12">
//       <div className="max-w-8xl mx-auto px-4">
//         {/* Main content - horizontal layout */}
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
//           {/* Left - Tagline */}
//           <div className="text-center md:text-left max-w-xs">
//             <p className="text-gray-800 text-lg">
//               AI-powered food generation for the future of cooking.
//             </p>
//           </div>

//           {/* Center - Logo and Brand */}
//           <div className="flex flex-col items-center space-y-4">
//             <img src={logo} alt="Variety Logo" className="w-40 h-30" />
//             {/* Fixed centered text */}
//             <div className="text-center">
//               <span className="text-3xl font-semibold tracking-[0.2em] text-center block mx-auto">
//                 VERAEATY
//               </span>
//             </div>
//           </div>

//           {/* Right - Social media icons */}
//           <div className="flex items-center gap-4 max-w-xs">
//             <a
//               href="#"
//               className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
//               aria-label="Twitter"
//             >
//               <Twitter className="w-4 h-4 text-white" fill="currentColor" />
//             </a>
//             <a
//               href="#"
//               className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
//               aria-label="Youtube"
//             >
//               <Youtube className="w-4 h-4 text-white" fill="currentColor" />
//             </a>
//             <a
//               href="#"
//               className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
//               aria-label="Facebook"
//             >
//               <Facebook className="w-4 h-4 text-white" fill="currentColor" />
//             </a>
//             <a
//               href="#"
//               className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-4 h-4 text-white" fill="currentColor" />
//             </a>
//           </div>
//         </div>

//         {/* Copyright - perfectly centered below the logo */}
//         <div className="mt-8 pt-8 border-t border-gray-300 flex justify-center">
//           <p className="text-gray-600 text-center mx-auto">
//             © 2025 Veraeaty AI. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };


// export default Footer;


import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from "../assets/Variety Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4">
          {/* Left Text - Hidden on mobile */}
          <div className="hidden md:block flex-1">
            <p className="text-gray-900 text-sm leading-relaxed">
              AI-powered food generation for the future of cooking.
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center">
            <img 
              src={logo} 
              alt="Veraeaty Logo" 
              className="mb-1 w-8 h-8"
            />
            <h1 className="text-lg font-medium tracking-[4px] text-[#1F2937] font-[montserrat]">
              VERAEATY
            </h1>
          </div>

          <div className="flex gap-3 flex-1 justify-center lg:justify-end">
            <a href="#" className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Instagram className="w-3 h-3 text-white" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Facebook className="w-3 h-3 text-white" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Linkedin className="w-3 h-3 text-white" />
            </a>
          </div>

          {/* Mobile Text */}
          <div className="md:hidden text-center w-full mt-2">
            <p className="text-gray-900 text-xs leading-relaxed">
              AI-powered food generation for the future of cooking.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-3"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-600 font-normal">
            © 2025 Veraeaty AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;