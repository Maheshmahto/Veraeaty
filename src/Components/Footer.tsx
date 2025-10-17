
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
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from "../assets/Variety Logo.png"

const VeraeatyFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto relative">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 mb-12 lg:mb-18">
          {/* Left Text - Hidden on mobile, visible on tablet and up */}
          <div className="hidden md:flex flex-1 text-left">
            <p className="text-gray-900 text-sm sm:text-[16px] leading-relaxed">
              AI-powered food generation for the future<br />
              of cooking.
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center order-first lg:order-none mb-6 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img 
              src={logo} 
              alt="Veraeaty Logo" 
              className="mb-2 w-12 h-12 sm:w-16 sm:h-16"
            />
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-[5px] sm:tracking-[8px] lg:tracking-[10px]">
              VERAEATY
            </h1>
          </div>

          {/* Right Social Icons */}
          <div className="flex gap-3 sm:gap-4 flex-1 justify-center lg:justify-end">
            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
          </div>

          {/* Mobile Text - Visible only on mobile */}
          <div className="md:hidden text-center mt-4">
            <p className="text-gray-900 text-sm leading-relaxed">
              AI-powered food generation for the future of cooking.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm sm:text-base lg:text-xl font-normal tracking-wide">
            © 2025 Veraeaty AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VeraeatyFooter;