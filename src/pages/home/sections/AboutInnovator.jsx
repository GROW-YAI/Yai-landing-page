import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faCheckSquare, faLeaf, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

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

const AboutInnovator = () => {

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mt-3 pb-1 border-b-2 flex flex-col md:flex-row items-center md:place-items- max-md:mt-9 bg-gradient-to-b from-amber-30" id="about_innovator">
      {/* Left Image Section */}
      <motion.div className="w-full md:w-1/2 pl-18">
        <img
          src="/assets/About-Image.jpeg"
          alt="Innovator's Portrait"
          className="w-130 h-full object-cover z-10"
        />

      </motion.div>
      

        {/* Right Text Section */}

      <motion.div variants={itemVariants} className="w-full md:w-1/2 flex flex-col justify-center px-3 md:px-1 space-y-">

          {/* About Us Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00] inline-block mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >Meet The CEO</motion.h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: "#2E2668" }}></div>
          

          <motion.h4 
            className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00] inline-block mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >Emmanuel Sekye</motion.h4>
          
          <p className="text-lg text-[#2E2668] text-center">The visionary behind our sustainable innovation</p>



          {/* First paragraph */}
          <div className="max-sm:pl-4">
            <p className="text-sm sm:text-base md:text-lg leading-normal sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-wide">
            From Sunyani West in the Bono Region, turning challenges into opportunities. Despite being visually challenged, <b>his sharp business sense and innovative spirit are redefining sustainability in the cashew industry.</b>
            </p>
          </div>


          {/* Second paragraph */}
          <div className="max-sm:pl-4">
            <p className="text-sm sm:text-base md:text-lg leading-normal sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-wide pb-3">
            Frustrated by the waste of cashew fruits, he saw potential where others saw a problem. His solution? Transforming these overlooked fruits into high-quality pomade—ensuring nothing goes to waste while creating a natural, beneficial product. With a commitment to sustainability and a passion for innovation, he aims to scale production to meet demand, proving that great ideas can reshape industries. Driven, resourceful, and determined, <b>Mr. Emmanuel Sekye isn’t just making pomade—he’s making an impact.</b>
            </p>
          </div>

          {/* overlapping paragraph */}
          <motion.div className="relative max-md:pt-5 flex justify-center md:justify-center z-10 mt-4" {...floatAnimation}>
            <div className="p-8 sm:p-7 rounded-lg shadow-lg w-[63%] -ml-10 max-sm:-ml-20 max-md:-ml-0 lg:-ml- relative mb-12 max-md:w-[60%] max-md:justify-center bg-gradient-to-r from-[#2E2668] to-[#027D00] backdrop-blur-md border border-[rgba(255,255,255,0.7)]">
              <FontAwesomeIcon icon={faLightbulb} className="text-2xl sm:text-3xl md:text-4xl absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-amber-500" />
              <p className="text-sm sm:text-base md:text-lg text-white">
                Sustainability and innovation drive us to promote valuable and eco-friendly products.
              </p>
              <FontAwesomeIcon icon={faLeaf} className="text-2xl sm:text-3xl md:text-4xl absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 text-[#2E2668]" />
            </div>
          </motion.div>



      </motion.div>

    </div>
  );
};

export default AboutInnovator;
