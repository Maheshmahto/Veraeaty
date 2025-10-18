import { useState } from "react";
import logo from "../assets/Variety Logo.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="px-6 md:px-20 mx-auto flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Veraeaty Logo"
            className="lg:h-22 lg:w-30 md:h-15 md:w-15 mb-2"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-xl md:text-4xl tracking-widest text-gray-900 ml-2 font-montserrat font-medium">
            VERAEATY
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a
            href="#about"
            className="text-lg text-gray-800 hover:text-gray-600 transition-colors font-inter"
          >
            About
          </a>
          <a
            href="#features"
            className="text-lg text-gray-800 hover:text-gray-600 transition-colors font-inter"
          >
            Features
          </a>
          <a
            href="#join"
            className="text-lg text-[#EA785B] hover:text-orange-600 transition-colors font-inter"
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#about"
              className="text-base text-gray-800 hover:text-gray-600 transition-colors font-inter py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="text-base text-gray-800 hover:text-gray-600 transition-colors font-inter py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#join"
              className="text-base text-orange-500 hover:text-orange-600 transition-colors font-inter font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
