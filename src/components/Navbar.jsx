
// import React, { useState, useEffect } from 'react';
// import { NavbarMenu } from './mockData/data';
// import { SiInstagram } from "react-icons/si";
// import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";

// import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
// import ResponsiveMenu from './ResponsiveMenu';
// import { motion, AnimatePresence } from 'framer-motion';


// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);
//   const [isFixed, setIsFixed] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);


//   // Track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleDropdown = (id) => {
//     if (activeDropdown === id) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(id);
//     }
//   };

//   return (
//     <div>
//       <nav
//         className={`${isFixed ? "fixed top-0 bg-white shadow-md" : "absolute top-[14px]"
//           } left-0 bg-white right-0 z-50 flex flex-row flex-nowrap justify-start items-center p-1 box-border transition-all duration-300`}
//       >
//         <div className='container flex justify-between items-center py-3 px-4'>

//           {/*Logo section*/}
//           <div className=''>
//             <img src="/assets/logo.png" alt="" className='w-34 h-auto max-h-10 object-cover' />
//           </div>

//           {/*Menu section*/}
//           <div className='hidden md:block text-xl'>
//             <ul className='flex items-center gap-6 text-gray-600'>
//               {NavbarMenu.map((item) => {
//                 return (
//                   <li key={item.id} className="relative">
//                     {item.hasDropdown ? (
//                       <div>
//                         <button
//                           className='bg-clip-text text-transparentbg-gradient-to-br from-[#027D00] to-[#2E2668] flex items-center gap-1 py-1 px-3 hover:text-[#2E2668] font-semibold cursor-pointer'
//                           onClick={() => toggleDropdown(item.id)}
//                         >
//                           {item.title}
//                           <MdKeyboardArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
//                         </button>
//                         <AnimatePresence>
//                           {activeDropdown === item.id && (
//                             <motion.div
//                               initial={{ opacity: 0, y: -10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               exit={{ opacity: 0, y: -10 }}
//                               transition={{ duration: 0.2 }}
//                               className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50"
//                             >
//                               {item.subMenu?.map((subItem) => (
//                                 <a
//                                   key={subItem.id}
//                                   href={subItem.link}
//                                   className="block px-4 py-2 hover:bg-amber-50 hover:text-[#2E2668] transition-colors bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668]"
//                                 >
//                                   {subItem.title}
//                                 </a>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <a href={item.link} className='inline-block py-1 px-3 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-[#2E2668] font-semibold'>
//                         {item.title}
//                       </a>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/*Icons section*/}
//           <div className='flex items-center gap-4'>
//             <button className='text-2xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-2 duration-200'>
//               <SiInstagram />
//             </button>

//             <a href='https://www.facebook.com/profile.php?id=61573553615944&mibextid=kFxxJD' 
//             target="_blank"
//             rel="noopener noreferrer"
//             className='text-2xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-2 duration-200 text-blue-600'>
//               <FaFacebook />
//             </a>

//             <a href="https://www.tiktok.com/@sakyistickenterprise?lang=en"
//               target="_blank"
//               rel="noopener noreferrer"
//               className='text-2xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-2 duration-200'>
//               <FaTiktok />
//             </a>

//             <a href='https://www.linkedin.com/company/sakyi-stick-enterprise/' 
//             target="_blank"
//             rel="noopener noreferrer"
//             className='text-2xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-2 duration-200 text-blue-700'>
//               <FaLinkedin />
//             </a>
//           </div>

//           {/*Mobile hamburger Menu section*/}
//           <div className='md:hidden' onClick={() => setOpen(!open)
//           }>
//             <MdMenu className='text-4xl hover:bg-amber-300 hover:text-white rounded-full duration-200' />
//           </div>
//         </div>
//       </nav>

//       {/*Mobile Sidebar section*/}
//       <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
//     </div>

//   );
// };

// export default Navbar






// import React, { useState, useEffect } from 'react';
// import { NavbarMenu } from './mockData/data';
// import { SiInstagram } from "react-icons/si";
// import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
// import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
// import ResponsiveMenu from './ResponsiveMenu';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [isFixed, setIsFixed] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleDropdown = (id) => {
//     if (activeDropdown === id) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(id);
//     }
//   };

//   // Social media data with consistent styling
//   const socialLinks = [
//     { 
//       id: 1, 
//       icon: <SiInstagram />, 
//       url: 'https://www.instagram.com/kyisenterprise',
//       label: 'Instagram',
//       color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
//       hoverColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600'
//     },
//     { 
//       id: 2, 
//       icon: <FaFacebook />, 
//       url: 'https://www.facebook.com/profile.php?id=6144&mibextid=kFxxJD',
//       label: 'Facebook',
//       color: 'bg-blue-600',
//       hoverColor: 'hover:bg-blue-700'
//     },
//     { 
//       id: 3, 
//       icon: <FaTiktok />, 
//       url: 'https://www.tiktok.com/@kenterprise?lang=en',
//       label: 'TikTok',
//       color: 'bg-black',
//       hoverColor: 'hover:bg-gray-800'
//     },
//     { 
//       id: 4, 
//       icon: <FaLinkedin />, 
//       url: 'https://www.linkedin.com/kyi-s-enterprise/',
//       label: 'LinkedIn',
//       color: 'bg-blue-700',
//       hoverColor: 'hover:bg-blue-800'
//     }
//   ];

//   return (
//     <div>
//       <nav
//         className={`${
//           isFixed 
//             ? "fixed top-0 bg-white shadow-md" 
//             : "absolute top-[14px]"
//         } left-0 bg-white right-0 z-40 flex flex-row flex-nowrap justify-start items-center p-1 box-border transition-all duration-300`}
//       >
//         <div className='container flex justify-between items-center py-3 px-4'>
//           {/* Logo section */}
//           <div className='transition-transform duration-300 hover:scale-105'>
//             <img src="/assets/logo.png" alt="Company Logo" className='w-34 h-auto max-h-10 object-cover' />
//           </div>

//           {/* Menu section */}
//           <div className='hidden md:block text-xl'>
//             <ul className='flex items-center gap-6 text-gray-600'>
//               {NavbarMenu.map((item) => (
//                 <li key={item.id} className="relative group">
//                   {item.hasDropdown ? (
//                     <div>
//                       <button
//                         className='bg-clip-text text-transparent bg-gradient-to-br from-[#027D00] to-[#2E2668] flex items-center gap-1 py-1 px-3 hover:text-[#2E2668] font-semibold cursor-pointer transition-all duration-300 hover:scale-105'
//                         onClick={() => toggleDropdown(item.id)}
//                         aria-expanded={activeDropdown === item.id}
//                         aria-haspopup="true"
//                       >
//                         {item.title}
//                         <MdKeyboardArrowDown 
//                           className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
//                         />
//                       </button>
//                       <AnimatePresence>
//                         {activeDropdown === item.id && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             transition={{ duration: 0.2 }}
//                             className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50 border border-gray-100"
//                           >
//                             {item.subMenu?.map((subItem) => (
//                               <a
//                                 key={subItem.id}
//                                 href={subItem.link}
//                                 className="block px-4 py-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-[#2E2668] transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668]"
//                               >
//                                 {subItem.title}
//                               </a>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <a 
//                       href={item.link} 
//                       className='inline-block py-1 px-3 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-[#2E2668] font-semibold transition-all duration-300 hover:scale-105'
//                     >
//                       {item.title}
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Mobile hamburger Menu section */}
//           <div 
//             className='md:hidden cursor-pointer' 
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             <MdMenu className='text-4xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-1 transition-all duration-300' />
//           </div>
//         </div>
//       </nav>

//       {/* Vertical Social Media Icons */}
//       <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
//         {socialLinks.map((social, index) => (
//           <motion.a 
//             key={social.id}
//             href={social.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={social.label}
//             initial={{ x: 40 }}
//             animate={{ x: 0 }}
//             transition={{ 
//               duration: 0.5, 
//               delay: index * 0.1,
//               type: "spring",
//               stiffness: 100
//             }}
//             whileHover={{ 
//               x: -5,
//               scale: 1.1,
//               transition: { duration: 0.2 }
//             }}
//             className={`${social.color} ${social.hoverColor} text-white p-3 rounded-l-md shadow-md flex items-center justify-center group transition-all duration-300`}
//           >
//             <span className="text-xl">{social.icon}</span>
//             <span className="absolute right-full bg-white text-gray-800 px-2 py-1 rounded-l-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium text-sm">
//               {social.label}
//             </span>
//           </motion.a>
//         ))}
//       </div>

//       {/* Mobile Sidebar section */}
//       <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { NavbarMenu } from './mockData/data';
import { SiInstagram } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSocialIcons, setShowSocialIcons] = useState(true);

  // Track scroll position
  useEffect(() => {

    
    const handleScroll = (event, link) => {
      event.preventDefault();
  const section = document.querySelector(link);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
      
  if (window.scrollY > 10) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        


      // Hide social icons when scrolled past hero section (adjust 600px as needed)
      if (window.scrollY > 100) {
        setShowSocialIcons(false);
      } else {
        setShowSocialIcons(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  // Social media data with consistent styling
  const socialLinks = [
    { 
      id: 1, 
      icon: <SiInstagram />, 
      url: 'https://www.instagram.com/kyisenterprise',
      label: 'Instagram',
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
      hoverColor: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-600'
    },
    { 
      id: 2, 
      icon: <FaFacebook />, 
      url: 'https://www.facebook.com/profile.php?id=mibextid=kFxxJD',
      label: 'Facebook',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      id: 5, 
      icon: <FaTiktok />, 
      url: 'https://www.tiktok.com/@ickenterprise?lang=en',
      label: 'TikTok',
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800'
    },
    { 
      id: 4, 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/company/ick-enterprise/',
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
        } left-0 bg-white right-0 z-40 flex flex-row flex-nowrap justify-start items-center p-1 box-border transition-all duration-300`}
      >
        <div className='container flex justify-between items-center py-3 px-4'>
          {/* Logo section */}
          <div className='transition-transform duration-300 hover:scale-105'>
            <img src="/assets/logo.png" alt="Company Logo" className='w-34 h-auto max-h-10 object-cover' />
          </div>

          {/* Menu section - centered */}
          <div className='hidden md:flex justify-center flex-1 text-xl'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative group">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className='bg-clip-text text-transparent bg-gradient-to-br from-[#027D00] to-[#2E2668] flex items-center gap-1 py-1 px-3 hover:text-[#2E2668] font-semibold cursor-pointer transition-all duration-300 hover:scale-105'
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
                                className="block px-4 py-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-[#2E2668] transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668]"
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
                      onClick={(e) => handleScroll(e, item.link)} 
                      className='inline-block py-1 px-3 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-[#2E2668] font-semibold transition-all duration-300 hover:scale-105'
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Empty div to maintain spacing with flexbox */}
          <div className="hidden md:block w-34"></div>

          {/* Mobile hamburger Menu section */}
          <div 
            className='md:hidden cursor-pointer' 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <MdMenu className='text-4xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-1 transition-all duration-300' />
          </div>
        </div>
      </nav>

      {/* Vertical Social Media Icons - Only visible in hero section */}
      <AnimatePresence>
        {showSocialIcons && (
          <motion.div 
            className="fixed right-0 top-3/4 transform -translate-y-1/2 z-50 flex flex-col gap-2"
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
                <span className="absolute right-full bg-white text-gray-800 px-2 py-1 rounded-l-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium text-sm">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { NavbarMenu } from './mockData/data';
// import { SiInstagram } from "react-icons/si";
// import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
// import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
// import ResponsiveMenu from './ResponsiveMenu';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [isFixed, setIsFixed] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleDropdown = (id) => {
//     if (activeDropdown === id) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(id);
//     }
//   };

//   // Social media data with consistent styling
//   const socialLinks = [
//     { 
//       id: 1, 
//       icon: <SiInstagram />, 
//       url: 'https://www.instagram.com/kyisenterprise',
//       label: 'Instagram',
//       color: 'hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
//     },
//     { 
//       id: 2, 
//       icon: <FaFacebook />, 
//       url: 'https://www.facebook.com/profile.php?id=6144&mibextid=kFxxJD',
//       label: 'Facebook',
//       color: 'hover:bg-blue-600'
//     },
//     { 
//       id: 3, 
//       icon: <FaTiktok />, 
//       url: 'https://www.tiktok.com/@kenterprise?lang=en',
//       label: 'TikTok',
//       color: 'hover:bg-black'
//     },
//     { 
//       id: 4, 
//       icon: <FaLinkedin />, 
//       url: 'https://www.linkedin.com/kyi-s-enterprise/',
//       label: 'LinkedIn',
//       color: 'hover:bg-blue-700'
//     }
//   ];

//   return (
//     <div>
//       <nav
//         className={`${
//           isFixed 
//             ? "fixed top-0 bg-white shadow-md" 
//             : "absolute top-[14px]"
//         } left-0 bg-white right-0 z-50 flex flex-row flex-nowrap justify-start items-center p-1 box-border transition-all duration-300`}
//       >
//         <div className='container flex justify-between items-center py-3 px-4'>
//           {/* Logo section */}
//           <div className='transition-transform duration-300 hover:scale-105'>
//             <img src="/assets/logo.png" alt="Company Logo" className='w-34 h-auto max-h-10 object-cover' />
//           </div>

//           {/* Menu section */}
//           <div className='hidden md:block text-xl'>
//             <ul className='flex items-center gap-6 text-gray-600'>
//               {NavbarMenu.map((item) => (
//                 <li key={item.id} className="relative group">
//                   {item.hasDropdown ? (
//                     <div>
//                       <button
//                         className='bg-clip-text text-transparent bg-gradient-to-br from-[#027D00] to-[#2E2668] flex items-center gap-1 py-1 px-3 hover:text-[#2E2668] font-semibold cursor-pointer transition-all duration-300 hover:scale-105'
//                         onClick={() => toggleDropdown(item.id)}
//                         aria-expanded={activeDropdown === item.id}
//                         aria-haspopup="true"
//                       >
//                         {item.title}
//                         <MdKeyboardArrowDown 
//                           className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
//                         />
//                       </button>
//                       <AnimatePresence>
//                         {activeDropdown === item.id && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             transition={{ duration: 0.2 }}
//                             className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50 border border-gray-100"
//                           >
//                             {item.subMenu?.map((subItem) => (
//                               <a
//                                 key={subItem.id}
//                                 href={subItem.link}
//                                 className="block px-4 py-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-white hover:text-[#2E2668] transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668]"
//                               >
//                                 {subItem.title}
//                               </a>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <a 
//                       href={item.link} 
//                       className='inline-block py-1 px-3 bg-clip-text text-transparent bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-[#2E2668] font-semibold transition-all duration-300 hover:scale-105'
//                     >
//                       {item.title}
//                     </a>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Media Icons section */}
//           <div className='flex items-center gap-3'>
//             {socialLinks.map((social) => (
//               <a 
//                 key={social.id}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.label}
//                 className={`text-2xl ${social.color} hover:text-white rounded-full p-2 transition-all duration-300 transform hover:scale-110 hover:rotate-3 flex items-center justify-center`}
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>

//           {/* Mobile hamburger Menu section */}
//           <div 
//             className='md:hidden cursor-pointer' 
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//           >
//             <MdMenu className='text-4xl hover:bg-gradient-to-r from-[#027D00] to-[#2E2668] hover:text-white rounded-full p-1 transition-all duration-300' />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Sidebar section */}
//       <ResponsiveMenu open={open} onClose={() => setOpen(false)} />
//     </div>
//   );
// };

// export default Navbar;