import React from "react";

const AboutProduct = () => {
  return (
    <section className="relative z-0 pb-[5em] pt-[em] border-b-2">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/product-about.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 h-[300px] bg-[#000000] opacity-60 "></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white z-10 pt-5 pb-2">
          <h4 className="text-4xl font-bold mt-3">About Product</h4>
      </div>

      {/* Overlapping Card */}
      <div className="relative mx-auto mt-10 w-12/14 sm:w-5/6 md:w-4/5 lg:w-224 lg:h-130 bg-white text-gray-800 p-8 rounded-2xl shadow-2xl pt-13 transform transition-transform duration-300 hover:scale-105">
        <h5 className="text-2xl font-semibold text-center text-[#17b978] mb-9">
          Transforming Challenges into Opportunities
        </h5>
        <p className="text-xl sm:text-base leading-relaxed text-gray-700 pb-6">
          We believe in transforming challenges into opportunities. Our innovative solution tackles 
          the issue of cashew fruits going to waste by repurposing them into high-quality, natural 
          pomade. By harnessing the nourishing properties of cashew fruit, we create a sustainable 
          and eco-friendly product that not only reduces waste but also provides a healthy alternative 
          for skincare.
        </p>
        <p className="text-lg sm:text-base leading-relaxed text-gray-700 mt-3">
          With a commitment to scalability, we produce in response to demand, ensuring efficiency while 
          making a positive environmental impact. Our pomade is more than just a product—it’s a step toward 
          a sustainable future, where every cashew fruit is put to good use.
        </p>
      </div>
    </section>
  );
};

export default AboutProduct;
