import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { NavbarMenu } from "./mockData/data";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialVariants = {
    hover: { scale: 1.1, rotate: 5 },
  };

  return (
    <footer className="bg-gradient-to-br from-[#2E2668] via-white-500 to-[#027D00] px-4 md:px-16 lg:px-28 py-12 overflow-hidden bg-opacity-30 backdrop-blur-lg shadow-lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold mb-4 text-white relative inline-block">
            About Us
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We are a passionate team dedicated to creating exceptional
            experiences and innovative solutions that make a difference in
            people's lives.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold mb-4 text-white relative inline-block">
            Quick Links
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </h2>
          <ul className="space-y-2 text-lg">
            {NavbarMenu.map((item) => (
              <motion.li 
                key={item.id}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <a href={item.link} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start">
                  <motion.span 
                    initial={{ opacity: 0, width: 0 }}
                    whileHover={{ opacity: 1, width: "8px", marginRight: "8px" }}
                    className="bg-indigo-500 h-1 rounded-full inline-block"
                  />
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-bold mb-4 text-white relative inline-block">
            Connect With Us
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </h2>
          <div className="flex space-x-6 items-center justify-center md:justify-start">
            <motion.a
              href="https://www.facebook.com/profile.php?id=61573553615944&mibextid=kFxxJD"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialVariants}
              className="group"
            >
              <div className="bg-gray-700 p-3 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                <FaFacebook className="w-5 h-5 text-white" />
              </div>
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@sakyistickenterprise?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialVariants}
              className="group"
            >
              <div className="bg-gray-700 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                <FaTiktok className="w-5 h-5 text-white" />
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/sakyi-stick-enterprise/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialVariants}
              className="group"
            >
              <div className="bg-gray-700 p-3 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                <FaLinkedin className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          </div>
          <p className="text-gray-400 mt-4 text-lg">
            Stay connected for updates and news
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="border-gray-700 border-t pt-6 mt-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2025 All rights reserved</p>
          <motion.div
            className="flex items-center mt-4 md:mt-0 text-sm text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="mx-1 text-red-500 w-4 h-4" /> by our
            amazing team
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
