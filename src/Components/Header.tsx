
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-6 px-8 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-7 h-7 text-coral-500" strokeWidth={2} />
          <span className="text-2xl font-semibold tracking-tight">
            VERAEATY
          </span>
        </div>

        <nav className="flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
            Features
          </a>
          <button className="text-coral-500 hover:text-coral-600 transition-colors font-medium">
            Join Waitlist
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
