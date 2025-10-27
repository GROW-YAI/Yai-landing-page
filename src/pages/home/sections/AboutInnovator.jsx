import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lightbulb, Leaf, Award, Heart, ArrowRight } from 'lucide-react';

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
    <div id="about_innovator" className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col lg:flex-row items-center gap-12">
           {/* Image Section */}
           <div className="w-full lg:w-1/2">
             <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-[#2E2668]/40 to-[#027D00]/40 rounded-3xl transform -rotate-4"></div>
               <img
                src="/assets/About-Image.jpeg"
                alt="Emmanuel Sekye - CEO"
                className="relative rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#2E2668]" />
                  <span className="font-medium text-lg">Visionary Leader</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E2668] to-[#027D00]">
                Meet The CEO
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2E2668] to-[#027D00]"></div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                Emmanuel Sekye
              </h3>
              <p className="text-xl text-[#2E2668]/80">
                Transforming Sustainability Through Innovation
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="text-xl">
                From Sunyani West in the Bono Region, Emmanuel is a testament to turning challenges into opportunities. Despite being visually challenged, his sharp business acumen and innovative mindset are revolutionizing the cashew industry.
              </p>
              <p className="text-xl">
                Driven by a vision to eliminate waste in the cashew industry, Emmanuel pioneered the transformation of discarded cashew fruits into premium pomade. This innovative solution not only addresses waste management but also creates sustainable value in the market.
              </p>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Lightbulb className="w-8 h-8 text-[#2E2668] mb-4" />
                <h4 className="font-semibold text-2xl mb-2">Innovation First</h4>
                <p className="text-gray-600 text-xl">Transforming industry challenges into sustainable solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <Heart className="w-8 h-8 text-[#027D00] mb-4" />
                <h4 className="font-semibold text-2xl mb-2">Social Impact</h4>
                <p className="text-gray-600 text-xl">Creating value while preserving our environment</p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative mt-12 bg-gradient-to-r from-[#2E2668] to-[#027D00] p-8 rounded-2xl text-white">
              <Leaf className="absolute -top-6 right-6 w-12 h-12 text-white/20" />
              <p className="text-xl font-medium italic">
                "Sustainability isn't just a goal—it's our commitment to future generations."
              </p>
              <p className="mt-4 font-semibold">— Emmanuel Sekye</p>
            </div>
          </div>
        </div>
     </div>


    </div>
  );
};

export default AboutInnovator;


