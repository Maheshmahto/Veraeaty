// import { useState } from "react";
import logo from "../assets/Variety Logo.png";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="px-4 sm:px-6 md:px-20 mx-auto flex items-center justify-center py-3 md:py-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Veraeaty Logo"
            className="h-12 w-auto sm:h-12 md:h-14 lg:h-20 mb-2"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-xl sm:text-xl md:text-3xl lg:text-4xl tracking-wide md:tracking-widest text-[#EA785B] ml-2 font-[montserrat] font-medium">
            VERAEATY
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
