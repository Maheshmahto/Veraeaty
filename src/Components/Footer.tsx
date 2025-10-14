

// import { Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';
// import logo from "../assets/Variety Logo.png"

// const Footer = () => {
//   return (
//     <footer className="bg-white  py-12 px-8">
//       <div className=" mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="text-center md:text-left">
//             <p className="text-gray-600 text-sm mb-1">
// AI-powered food generation for the future 
// of cooking.            </p>
           
//           </div>

//           <div className="flex items-center gap-2">
//             {/* <Activity className="w-8 h-8 text-coral-500" strokeWidth={2} /> */}
// <img src={logo} alt="Variety Logo" className="w-26 h-20" />
//             <span className="text-2xl font-semibold tracking-widest">
//               VERAEATY
//             </span>
//           </div>

//           <div className="flex items-center gap-4">
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

//         <div className="mt-8 pt-8 border-t  text-center">
//           <p className=" text-sm">
//             © 2025 Veraeaty AI. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';
import logo from "../assets/Variety Logo.png"

const Footer = () => {
  return (
    <footer className="bg-white py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left max-w-xs">
            <p className="text-gray-600 text-sm">
              AI-powered food generation for the future of cooking.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={logo} alt="Variety Logo" className="w-26 h-20" />
            <span className="text-3xl font-semibold tracking-widest text-center">
              VERAEATY
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white" fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="w-4 h-4 text-white" fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-white" fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" fill="currentColor" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className=" text-sm">
            © 2025 Veraeaty AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;