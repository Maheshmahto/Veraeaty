
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
    <footer className="w-full bg-white py-12 px-50">
      <div className="max-w-8xl mx-auto relative">
        {/* Main Content */}
        <div className="flex items-center justify-between gap-8 mb-18 px-8">
          {/* Left Text */}
          <div className="flex-1 text-left">
            <p className="text-gray-900 text-[16px] leading-relaxed">
              AI-powered food generation for the future<br />
              of cooking.
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 mb-12">
         
            <img src={logo} alt="logo"  className="mb-0"/>
            <h1 className="text-3xl font-semibold tracking-[10px] ">
              VERAEATY
            </h1>
          </div>

          {/* Right Social Icons */}
          <div className="flex gap-4 flex-1 justify-end mr-15">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xl font-normal tracking-wide ">
            © 2025 Veraeaty AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VeraeatyFooter;