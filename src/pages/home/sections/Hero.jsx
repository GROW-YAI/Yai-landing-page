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
    appendDots: dots => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="mt-2 w-2 h-2 bg-gradient-to-r from-[#7668e4] to-[#027D00] rounded-full"></div> // Red dots
    ),
  };

  return (
    <section className="relative z-0 border-b-2 mb-11" id="home">
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
          <span className=" text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7668e4] to-[#027D00]">Welcome </span>
          <h1 className="text-4xl font-bold mt-4">Where innovation meets creativity <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7668e4] to-[#027D00]">Impression</span></h1>
          <p className="mt-4 text-xl">A product birthed out of a place where nature’s abundance meets innovation.</p>
          <a href="#contacts" className="mt-6 inline-block bg-gradient-to-br from-[#2E2668] to-[#027D00]  hover:bg-[#2E2668]text-white py-3 px-6 rounded-lg text-lg">
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
      <div className="absolute inset-0  bg-[#000000] opacity-70 "></div>

        <div className="text-center text-white relative z-10 px-6">
          <span className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fffdfd99] to-[#027D00]">Akwaaba</span>
          <h1 className="text-4xl font-bold mt-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fffdfd99] to-[#027D00]">Sustainability </span>And Creativity <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fffdfd99] to-[#027D00]">Birthed</span> Into a Product</h1>
          <p className="mt-4 text-xl">Inspired by the rich potential of cashew fruits, this pomade transforms what was once considered waste into a nourishing,<br /> all-natural solution.</p>
        <a href="#contacts" className="mt-6 inline-block bg-gradient-to-br from-[#027D00] to-[#2E2668] hover:bg-[#2E2668] text-white py-3 px-6 rounded-lg text-lg">
            Get in touch
          </a>
        </div>
      </div>
    </Slider>
  </section>
  );
};

export default Hero;
