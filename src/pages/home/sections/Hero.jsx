import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="relative z-0 border-b-2 mb-8">
    <Slider {...sliderSettings}>
      {/* Slide 1 */}
      <div className="relative h-screen flex items-center justify-center py-50">
        
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-1.webp')" }}
      ></div>

        {/* Overlay */}
      <div className="absolute inset-0  bg-[#000000] opacity-70 "></div>

        <div className="text-center text-white relative z-10 px-6">
          <span className=" text-4xl font-bold uppercase tracking-wide">Welcome </span>
          <h1 className="text-4xl font-bold mt-4">Where innovation meets creativity <span className="text-blue-400">Impression</span></h1>
          <p className="mt-4 text-lg">A product birthed out of a place where nature’s abundance meets innovation.</p>
          <a href="#contact-section" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg">
            Get in touch
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-screen flex items-center justify-center py-50">
        
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-3.webp')" }}
      ></div>

        {/* Overlay */}
      <div className="absolute inset-0  bg-[#000000] opacity-50 "></div>

        <div className="text-center text-white relative z-10 px-6">
          <span className="text-4xl font-bold uppercase tracking-wide">Akwaaba</span>
          <h1 className="text-4xl font-bold mt-4"><span className="text-blue-400">Sustainability</span>And Creativity <span className="text-blue-400">Birthed</span> Into a Product</h1>
          <p className="mt-4 text-lg">Inspired by the rich potential of cashew fruits, this pomade transforms what was once considered waste into a nourishing, all-natural solution.</p>
          <a href="#contact-section" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg">
            Get in touch
          </a>
        </div>
      </div>
    </Slider>
  </section>
  );
};

export default Hero;
