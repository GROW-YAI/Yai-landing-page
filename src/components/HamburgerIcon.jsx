const HamburgerIcon = ({ isOpen }) => {
    return (
      <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer">
        <span 
          className={`block h-0.5 w-6 bg-gradient-to-r from-[#027D00] to-[#2E2668] transition-all duration-300 ease-out
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span 
          className={`block h-0.5 w-4 mx-auto bg-gradient-to-r from-[#027D00] to-[#2E2668] transition-all duration-300 ease-out
            ${isOpen ? 'opacity-0' : ''}`}
        />
        <span 
          className={`block h-0.5 w-6 bg-gradient-to-r from-[#027D00] to-[#2E2668] transition-all duration-300 ease-out
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </div>
    );
  };
  
  export default HamburgerIcon;