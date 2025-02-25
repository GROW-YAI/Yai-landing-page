import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faCheckSquare, faLeaf, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const AboutInnovator = () => {
  return (
    <div className="mt-0 border-b-2 flex flex-col md:flex-row items-center md:items-stretch max-md:mt-9">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 pl-18">
        <img
          src="/assets/tonic2.jpg"
          alt="about the innovator"
          className="w-140 h-full object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 space-y-8">
        {/* About Us Title */}
        <h4 className="text-4xl font-bold text-center mt-5 pt-10">About Us</h4>

                   {/* First paragraph */}
            <div className="max-sm:pl-4">
              <p className="text-sm sm:text-base md:text-lg leading-normal sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-wide">
                We believe in turning challenges into opportunities. Founded by a visionary young entrepreneur, our mission is to combat the waste of brcash fruits by transforming them into high-quality, natural pomade.
              </p>
            </div>

          
 {/* Second paragraph */}
 <div className="max-sm:pl-4">
              <p className="text-sm sm:text-base md:text-lg leading-normal sm:leading-relaxed md:leading-loose tracking-normal sm:tracking-wide">
                We are committed to scaling production based on demand, ensuring a sustainable and efficient approach to tackling fruit waste while providing a product that is beneficial for all.
              </p>
          </div>

 {/* overlapping paragraph */}
 <div className="relative max-md:pt-5 flex justify-center md:justify-start">
  <div className="p-7 sm:p-8 rounded-lg shadow-lg w-[80%] -ml-10 max-sm:-ml-20 max-md:-ml-0 lg:-ml-76 relative mb-32 max-md:w-[60%] max-md:justify-center">
    <FontAwesomeIcon icon={faLightbulb} className="text-2xl sm:text-3xl md:text-4xl absolute -top-2 sm:-top-4 -left-2 sm:-left-4" />
    <p className="text-sm sm:text-base md:text-lg">
      Sustainability and innovation drive us to promote valuable and eco-friendly products.
    </p>
    <FontAwesomeIcon icon={faLeaf} className="text-2xl sm:text-3xl md:text-4xl absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4" />
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutInnovator;
