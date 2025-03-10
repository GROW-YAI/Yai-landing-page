import { motion, AnimatePresence } from 'framer-motion';
import { NavbarMenu } from './mockData/data';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { X } from 'lucide-react';

const ResponsiveMenu = ({ open, onClose, handleNavClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return ( 
    <AnimatePresence mode='wait'>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-64 z-40 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full bg-gradient-to-r from-[#2E2668] to-[#027D00] text-white py-20 px-6 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <ul className="flex flex-col gap-6">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="relative">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full py-2 text-lg font-semibold hover:text-amber-300 transition-colors"
                          onClick={(e) => toggleDropdown(item.id, e)}
                        >
                          {item.title}
                          <MdKeyboardArrowDown
                            className={`transition-transform duration-300 ${
                              activeDropdown === item.id ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.subMenu?.map((subItem) => (
                                <a
                                  key={subItem.id}
                                  href={subItem.link}
                                  onClick={(e) => handleNavClick(e, subItem.link)}
                                  className="block py-2 text-base hover:text-amber-300 transition-colors"
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
                        className="block py-2 text-lg font-semibold hover:text-amber-300 transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;