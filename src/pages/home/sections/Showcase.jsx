import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Sparkles, Leaf, Droplets } from "lucide-react";


const products = [
  {
    title: "Cashew Glow Pomade",
    description: "Our signature formula with pure cashew extract for a natural, radiant glow.",
    image: "/assets/Cashew-product-1.jpeg",
    highlight: "Natural Ingredients",
    icon: Leaf,
    color: "emerald"
  },
  {
    title: "Cashew Glow Pomade",
    description: "Silky-smooth texture that melts into your skin for deep nourishment.",
    image: "/assets/Cashew-product-2.jpeg",
    highlight: "Skin Friendly",
    icon: Droplets,
    color: "blue"
  },
  {
    title: "Cashew Glow Pomade",
    description: "A refreshing blend with essential oils that revitalizes while protecting.",
    image: "/assets/Cashew-product-3.jpeg",
    highlight: "Refreshing Formula",
    icon: Sparkles,
    color: "amber"
  }
];

const colorMap = {
  emerald: "bg-gradient-to-r from-[#2E2668] to-[#027D00] hover:bg-[#027d00b2]",
  blue: "bg-gradient-to-r from-[#2E2668] to-[#027D00] hover:bg-[#2e266894]",
  amber: "bg-gradient-to-r from-[#2E2668] to-[#027D00] hover:hover:bg-[#027d00b2]"
};


const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isHovering,
    autoplaySpeed: 5000,
    
    beforeChange: (oldIndex, newIndex) => {
      setDirection(newIndex > oldIndex ? 1 : -1);
      setCurrentIndex(newIndex);
    }
  };

  const currentProduct = products[currentIndex];
  const ButtonColor = colorMap[currentProduct.color];
  const IconComponent = currentProduct.icon;

  return (
    <section className="p-16 px-6 md:px-14 border-b-2 overflow-hidden bg-gradient-to-b from-amber-50 to-white" id="products">
      {/* Section Heading */}
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00] text-center mb-6">Explore Our Products</h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-[#2E2668] mx-auto mb-4"
        />
        <p className="text-xl text-gray-600">Discover our carefully crafted Cream product made with premium cashew extracts for your skin's health and beauty.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pb-4">


        {/* Dynamic Product Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full md:w-1/2 lg:w-2/5 order-2 md:order-1"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.5 }}


          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-100"
            >
              <motion.div
                className={`absolute -top-4 -right-4 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm ${colorMap[currentProduct.color]}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <IconComponent size={16} />
                {products[currentIndex].highlight}
              </motion.div>


              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{products[currentIndex].title}</h3>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4">{products[currentIndex].description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Paraben-Free</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vegan</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Cruelty-Free</span>
                </div>

                {/* <motion.button
                  className="inline-flex items-center gap-2 text-amber-600 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn more <ArrowRight size={16} />
                </motion.button> */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="ml-3 flex items-center justify-center w-6 h-6"
                  style={{ transformOrigin: "center" }}
                >
                  <Sparkles size={26} className="text-amber-500" />
                </motion.div>

              </motion.div>
            </motion.div>

          </motion.div>

        </AnimatePresence>


        {/* Product Slider */}
        <div className="w-[120%] md:w-1/2 lg:w-3/7 order-1 md:order-2" onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Slider {...sliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white p-2 rounded-lg shadow-md flex justify-center hexagon">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-130 h-auto aspect-[1/1] object-cover rounded-md hexagon"
                    />
                  </div>
                </div>
              ))}
            </Slider>
            {/* Product number indicator */}
            <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-10">
              <div className="text-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00]">{currentIndex + 1}</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00] text-xs block">/ {products.length}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default Showcase;
