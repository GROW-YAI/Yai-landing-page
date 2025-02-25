import { motion, AnimatePresence } from 'framer-motion'
import { NavbarMenu } from './mockData/data';
import React from 'react'

const ResponsiveMenu = ({ open, onClose}) => {
    return ( 
    <AnimatePresence mode='wait'>
        {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{duration: 0.3 }}
                    className='absolute top-20 left-0  w-full h-screen z-20'
                    onClick={onClose}
                >
                    <div className='text-xl font-semibold uppercase bg-amber-950 text-white py-10 m-6 rounded-3xl'>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                        {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link} className=' inline-block py-1 px-3 hover:text-primary font-semibold'>
                      {item.title}
                    </a>
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

export default ResponsiveMenu