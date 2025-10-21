import logo from "../assets/Variety Logo.png";

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-center px-4 py-3 mx-auto sm:px-6 md:px-20 md:py-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Veraeaty Logo"
            className="w-auto h-12 mb-2 sm:h-12 md:h-14 lg:h-20"
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
