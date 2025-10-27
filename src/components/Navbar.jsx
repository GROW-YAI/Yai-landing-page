
import { useState, useEffect } from 'react';
import { NavbarMenu } from './mockData/data';
import { SiInstagram } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerIcon from './HamburgerIcon';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSocialIcons, setShowSocialIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (window.scrollY > 100) {
        setShowSocialIcons(false);
      } else {
        setShowSocialIcons(true);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the 'lg' breakpoint in Tailwind
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const socialLinks = [
    // { 
    //   id: 1, 
    //   icon: <SiInstagram />, 
    //   url: 'https://www.instagram.com/kyisenterprise',
    //   label: 'Instagram',
    //   color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
    //   hoverColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600'
    // },
    { 
      id: 2, 
      icon: <FaFacebook />, 
      url: 'https://www.facebook.com/profile.php?id=61573553615944&mibextid=kFxxJD',
      label: 'Facebook',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      id: 5, 
      icon: <FaTiktok />, 
      url: 'https://www.tiktok.com/@sakyistickenterprise?lang=en/',
      label: 'TikTok',
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800'
    },
    { 
      id: 4, 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/company/sakyi-stick-enterprise/',
      label: 'LinkedIn',
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800'
    }
  ];

  return (
    <div>
      <nav
        className={`${
          isFixed 
            ? "fixed top-0 bg-white shadow-md" 
            : "absolute top-[14px]"
        } left-0 bg-white right-0 z-40 w-full transition-all duration-300`}
      >
        <div className='container mx-auto flex justify-between items-center py-3 px-4 lg:px-8'>
          {/* Logo section*/}
          <div className='transition-transform duration-300 hover:scale-105'>
            <img src="/assets/logo.png" alt="Company Logo" className='w-34 h-auto max-h-10 object-cover ' />
          </div>

          {/* Desktop Menu section */}
          <div className='hidden lg:flex justify-start '>
            <ul className='flex items-center gap-4 xl:gap-5 text-gray-600'>
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative group">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className='bg-clip-text text-transparent bg-gradient-to-br from-[#027D00] to-[#2E2668] flex items-center gap-1 py-1 px-2 xl:px-3 hover:text-[#2E2668] font-semibold cursor-pointer transition-all duration-300 hover:scale-105 text-base xl:text-2xl'
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={activeDropdown === item.id}
                        aria-haspopup="true"
                      >
                        {item.title}
                        <MdKeyboardArrowDown 
                          className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50 border border-gray-100"
                          >
                            {item.subMenu?.map((subItem) => (
                              <a
                                key={subItem.id}
                                href={subItem.link}
                                onClick={(e) => handleNavClick(e, subItem.link)}
                                className="block px-4 py-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-[#2E2668] transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668] text-lg 2xl:text-base"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a 
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item.link)}
                      className='inline-block py-1 px-2 xl:px-3 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-[#2E2668] font-semibold transition-all duration-300 hover:scale-105 text-base xl:text-2xl'
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Empty div for desktop layout */}
          <div className="hidden lg:block w-[100px]"></div>

          {/* Mobile Menu Button */}
          <button 
            className='lg:hidden z-50'
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={open} />
          </button>
        </div>
      </nav>

      {/* Social Media Icons */}
      <AnimatePresence>
        {showSocialIcons && (
          <motion.div 
            className="fixed right-0 top-2/3 transform -translate-y-1/2 z-30 flex flex-col gap-2 hidden sm:flex"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ x: 40 }}
                animate={{ x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  x: -5,
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className={`${social.color} ${social.hoverColor} text-white p-3 rounded-l-md shadow-md flex items-center justify-center group transition-all duration-300`}
              >
                <span className="text-xl">{social.icon}</span>
                <span className="absolute right-full bg-white text-gray-800 px-2 py-1 rounded-l-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-800 whitespace-nowrap font-medium text-sm">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} onClose={() => setOpen(false)} handleNavClick={handleNavClick} />
    </div>
  );
};

export default Navbar;
















