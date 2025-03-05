import { motion, AnimatePresence } from 'framer-motion'
import { NavbarMenu } from './mockData/data';
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";




const ResponsiveMenu = ({ open, onClose}) => {
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
    <AnimatePresence mode='wait' >
        {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{duration: 0.3 }}
                    className='absolute top-20 left-0  w-162 h-screen z-20'
                    onClick={onClose}
                >
                    <div className='text-xl font-semibold uppercase  bg-gradient-to-r from-[#2E2668] to-[#027D00] backdrop-blur-md border border-[rgba(255,255,255,0.2)] text-white py-10 m-6 rounded-3xl' onClick={(e) => e.stopPropagation()}
                      >
                        <ul className='flex flex-col justify-center items-center gap-10'>
                        {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className="relative w-full text-center" >
                    {item.hasDropdown ? (
                    <div>
                      <button 
                        className='flex items-center justify-center gap-1 py-1 px-3 hover:text-amber-300 font-semibold mx-auto'
                        onClick={(e) => toggleDropdown(item.id, e)}
                      >
                        {item.title}
                        <MdKeyboardArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 flex flex-col items-center">
                              {item.subMenu?.map((subItem) => (
                                <a 
                                  key={subItem.id} 
                                  href={subItem.link} 
                                  className="block px-4 py-2 hover:text-amber-300 transition-colors text-sm"
                                >
                                  {subItem.title}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a href={item.link} className='inline-block py-1 px-3 hover:text-amber-300 font-semibold'>
                      {item.title}
                    </a>
                  )}
                  </li>
                );
              }
              )}
                        </ul>
                    </div>
                </motion.div>
            )}
    </AnimatePresence>
    );
};

export default ResponsiveMenu;