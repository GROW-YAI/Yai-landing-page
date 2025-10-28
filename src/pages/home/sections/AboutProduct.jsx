import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleScrollToContact = (e) => {
    closeModal();

    const section = document.querySelector("#contacts");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: custom * 0.2 },
    }),
  };

  const features = [
    {
      id: 1,
      title: "Pure Essence of Nature",
      description:
        "Crafted from cashew fruit, our pomade is packed with antioxidants and vitamins that revitalize your skin naturally.",
      color: "green",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Vitamin C Powerhouse",
      description:
        "Rich in Vitamin C, our formula brightens your skin, locks in moisture, and soothes irritation with anti-inflammatory properties.",
      color: "amber",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Sustainable Beauty",
      description:
        "We repurpose post-harvest cashew fruit, reducing waste while creating a premium skincare product that's good for you and the planet.",
      color: "purple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 bg-gradient-to-b from-amber-50 to-white"
      id="about_product"
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-green-100 to-amber-100 opacity-50 transform -skew-y-2"
          animate={{
            skewY: [-2, 0, -2],
            transition: { duration: 8, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute -top-10 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            transition: { duration: 5, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-60 h-60 bg-amber-100 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            transition: { duration: 6, repeat: Infinity, delay: 1 },
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <motion.div
            className="inline-block mb-4 relative"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00]">
              Nature's Secret for Radiant Skin
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2E2668] to-[#027D00]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover how cashew fruit transforms into your skin's new best
            friend
          </p>
        </motion.div>

        {/* Main Content - Interactive Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Interactive Product Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <div className="relative group">
              <motion.div
                className="absolute -top-4 -left-4 bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center text-amber-800 font-bold z-10 cursor-pointer"
                whileHover={{ rotate: 10, scale: 1.05 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                100% Natural
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-green-100 rounded-full w-24 h-24 flex items-center justify-center text-green-800 font-bold z-10 cursor-pointer"
                whileHover={{ rotate: -10, scale: 1.05 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                Vitamin Rich
              </motion.div>

              <motion.img
                src="/assets/about-product.png"
                alt="Cashew Cream product showcase"
                className="rounded-2xl shadow-xl w-full object-cover h-[400px] relative z-0 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Interactive hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2E2668]/20 to-[#027D00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                whileHover={{ opacity: 1 }}
              />
            </div>
          </motion.div>

          {/* Interactive Features */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
          >
            <h3 className="text-3xl font-semibold text-[#2E2668] mb-6">
              Cashew Cream
            </h3>

            <div className="space-y-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`flex items-start p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFeature === feature.id
                      ? `bg-${feature.color}-50`
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() =>
                    setActiveFeature(
                      activeFeature === feature.id ? null : feature.id
                    )
                  }
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`bg-${feature.color}-100 p-2 rounded-full mr-4 mt-1`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800">
                      {feature.title}
                    </h4>
                    <motion.p
                      className="text-gray-600 text-lg"
                      initial={{
                        height: activeFeature === feature.id ? "auto" : 0,
                      }}
                      animate={{
                        height: activeFeature === feature.id ? "auto" : "auto",
                      }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={openModal}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-[#2E2668] to-[#027D00] text-white rounded-full font-medium shadow-lg hover:shadow-xl flex items-center group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More</span>
              <motion.span className="absolute inset-0 bg-gradient-to-r from-[#027D00] to-[#2E2668] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 relative z-10"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <div className="space-y-8">
              {/* Interactive Hero Section */}
              <div className="relative rounded-xl overflow-hidden group">
                <motion.img
                  src="/assets/about-product.png"
                  alt="Cashew Cream production process"
                  className="w-full h-72 object-cover transform transition-transform duration-500"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white text-lg font-medium transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                    From nature's bounty to your daily skincare ritual
                  </p>
                </motion.div>
              </div>

              {/* Interactive Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Natural Radiance",
                    description:
                      "Unlock your skin's natural glow with our vitamin-rich formula",
                    color: "amber",
                    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
                  },
                  {
                    title: "Deep Hydration",
                    description:
                      "Lock in moisture for long-lasting skin hydration",
                    color: "green",
                    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                  },
                  {
                    title: "Gentle Protection",
                    description: "Shield your skin with natural antioxidants",
                    color: "purple",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className={`bg-${benefit.color}-50 p-6 rounded-xl transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-12 h-12 bg-${benefit.color}-100 rounded-full flex items-center justify-center mb-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 text-${benefit.color}-700`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={benefit.icon}
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Features List */}
              <motion.div
                className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold mb-4">
                  Why Choose Cashew Cream?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    [
                      "100% Natural Ingredients",
                      "Rich in Vitamin C",
                      "Anti-inflammatory",
                    ],
                    ["Sustainable Production", "Cruelty-free", "Zero Waste"],
                  ].map((column, colIndex) => (
                    <ul key={colIndex} className="space-y-3">
                      {column.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (colIndex * 3 + index) * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <svg
                            className="h-5 w-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.button
                className="w-full py-4 bg-gradient-to-r from-[#2E2668] to-[#027D00] text-white rounded-full font-medium shadow-lg hover:shadow-xl text-lg relative overflow-hidden group"
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  Start Your Natural Skincare Journey
                </span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#027D00] to-[#2E2668] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default AboutProduct;
