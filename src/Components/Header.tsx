import { useState } from "react";
import logo from "../assets/Variety Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="px-4 sm:px-6 md:px-20 mx-auto flex items-center justify-between py-3 md:py-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Veraeaty Logo"
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-20 mb-2"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-base sm:text-xl md:text-3xl lg:text-4xl tracking-wide md:tracking-widest text-gray-900 ml-2 font-[montserrat] font-medium">
            VERAEATY
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <a href="#about" className="text-base lg:text-lg text-gray-800 hover:text-gray-600 transition-colors font-inter">About</a>
          <a href="#features" className="text-base lg:text-lg text-gray-800 hover:text-gray-600 transition-colors font-inter">Features</a>
          <a href="#join" className="text-base lg:text-lg text-[#EA785B] hover:text-orange-600 transition-colors font-inter">Join Waitlist</a>
        </nav>
        <button className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          {!isMenuOpen ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-3">
            <a href="#about" className="text-base text-gray-800 hover:text-gray-600 transition-colors font-inter py-2 px-2 rounded hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#features" className="text-base text-gray-800 hover:text-gray-600 transition-colors font-inter py-2 px-2 rounded hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#join" className="text-base text-[#EA785B] hover:text-orange-600 transition-colors font-inter font-semibold py-2 px-2 rounded hover:bg-orange-50" onClick={() => setIsMenuOpen(false)}>Join Waitlist</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;