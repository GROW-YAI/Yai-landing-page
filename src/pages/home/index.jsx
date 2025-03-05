import React from "react";
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";
import CashewBanner from "./sections/CashewBanner";
import Vision from "./sections/Vision";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutInnovator />
      <AboutProduct />
      <CashewBanner />
      <Vision />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;
