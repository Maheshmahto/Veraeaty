import logo from '../assets/Variety Logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-6 px-6  ">
      <div className="px-20 mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center ">
          <img 
            src={logo}
            alt="Veraeaty Logo" 
            className="h-9 w-9 md:h-25 md:w-35"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-2xl md:text-6xl font-normal tracking-wide text-gray-900">
            VERAEATY
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a 
            href="#about" 
            className="text-3xl text-gray-800 hover:text-gray-600 transition-colors font-normal"
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-3xl text-gray-800 hover:text-gray-600 transition-colors font-normal"
          >
            Features
          </a>
          <a 
            href="#join" 
            className="text-3xl text-orange-500 hover:text-orange-600 transition-colors font-normal"
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;