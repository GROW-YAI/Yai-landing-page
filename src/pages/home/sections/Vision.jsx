import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe, Users, ArrowRight, Droplet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Vision = () => {

    // const navigate = useNavigate();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };
  
  const pillarsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const pillars = [
    { 
      icon: <Leaf size={24} />, 
      title: "Sustainability", 
      description: "Transforming cashew waste into valuable products that reduce environmental impact" 
    },
    { 
      icon: <Users size={24} />, 
      title: "Community", 
      description: "Creating opportunities and economic growth for local farmers and communities" 
    },
    { 
      icon: <Recycle size={24} />, 
      title: "Zero Waste", 
      description: "Utilizing every part of the cashew to eliminate waste in our production process" 
    },
    { 
      icon: <Globe size={24} />, 
      title: "Global Impact", 
      description: "Inspiring sustainable practices in beauty and personal care industries worldwide" 
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-amber-30 to-white relative border-b-2" id='vision'>
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 left-10 w-32 h-32 bg-amber-100 rounded-full opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            className="inline-block mb-6"
            {...floatAnimation}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#2E2668] to-[#027D00] rounded-full flex items-center justify-center shadow-lg">
              <Droplet size={32} className="text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00] inline-block mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From Waste to Wonder
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Transforming discarded cashew nuts into premium, sustainable hair pomade
          </motion.p>
        </motion.div>
        
        {/* Story Section */}
        {/* <motion.div
          className="mb-24 bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-6">Our Story</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Walking through the local cashew farms, our founder noticed heaps of discarded cashew nuts 
                  deemed unfit for consumption. This waste represented not just lost economic opportunity, 
                  but environmental harm. Inspired by traditional knowledge and modern science, we discovered 
                  that these "waste" nuts contained rich oils perfect for hair care products.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we've transformed this insight into a thriving enterprise that creates premium pomade 
                  while supporting local farmers and reducing environmental impact in our community.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-400/90 to-green-500/90 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start text-white"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <p>Reduced cashew waste by 75% in our local community</p>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-white"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <p>Created sustainable income for over 200 local farmers</p>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-white"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <p>Developed a zero-waste production process that utilizes every part of the cashew</p>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div> */}
        
        {/* Vision & Mission Container */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Vision Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="h-full bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#027D00] to-[#2E2668]"></div>
              <div className="p-8">
                <motion.div 
                  className="inline-block p-3 bg-[rgba(46,38,104,0.2)] rounded-lg mb-6"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Leaf size={28} className="text-[#2E2668]" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  A world where agricultural "waste" due to "post-harvest" loss, is recognized as a valuable resource, where local 
                  communities thrive through sustainable innovation, and where beauty products enhance 
                  both people and planet.
                </p>
                
                <motion.div
                  className="flex items-center text-amber-600 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* <span>Discover our sustainability practices</span>
                  <ArrowRight size={16} className="ml-2" /> */}
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Mission Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="h-full bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#027D00] to-[#2E2668]"></div>
              <div className="p-8">
                <motion.div 
                  className="inline-block p-3 bg-green-100 rounded-lg mb-6"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Recycle size={28} className="text-[#027D00]" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  To transform cashew post-harvest excesses into premium, sustainable hair pomade while empowering local 
                  communities, promoting zero-waste manufacturing, and setting new standards for 
                  environmental responsibility in the beauty industry.
                </p>
                
                <motion.div
                  className="flex items-center text-[#027D00] font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* <span>Learn about our production process</span>
                  <ArrowRight size={16} className="ml-2" /> */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Pillars Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Guiding Pillars</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-[#2E2668] to-[#027D00] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            The core principles that drive our business and impact
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              variants={pillarsVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-amber-100 to-green-100"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-gradient bg-gradient-to-r from-[#2E2668] to-[#027D00]">
                  {pillar.icon}
                </span>
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h4>
              <p className="text-gray-600 text-lg">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-amber-50 to-green-50 p-10 rounded-2xl shadow-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Sustainable Journey</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Be part of our mission to transform waste into wonder and create positive impact
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-[#2E2668] to-[#027D00] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                const section = document.getElementById("products");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
          >
            View Our Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;