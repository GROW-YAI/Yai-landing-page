import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Cashew pomade",
    description: "Contains only cashew, for a better glow.",
    image: "/assets/Cashew-product-1.jpeg"
  },
  {
    title: "Cashew pomade",
    description: "A butter gentle for the skin.",
    image: "/assets/Cashew-product-2.jpeg"
  },
  {
    title: "Cashew pomade",
    description: "A refreshing fusion of cashew, gentle on the skin.",
    image: "/assets/Cashew-product-3.jpeg"
  }
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex)
  };

  return (
    <section className="p-14 border-b-2">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold pb-4">Explore Our Products</h2>
        <p className="text-lg text-gray-600">Discover our carefully crafted natraceutical products.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pb-4">
        {/* Dynamic Product Description */}
        <div className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left md:ml-4 md:pl-3">
          <h3 className="text-2xl font-semibold mb-4">{products[currentIndex].title}</h3>
          <p className="text-gray-700 text-lg">{products[currentIndex].description}</p>
        </div>

        {/* Product Slider */}
        <div className="w-full md:w-1/2 lg:w-3/5">
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <div key={index} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-78 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};



export default Showcase;
