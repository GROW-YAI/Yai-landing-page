import React from "react";
import Hero from "./sections/Hero";
import AboutProduct from "./sections/AboutProduct";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";
import CashewBanner from "./sections/CashewBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutInnovator />
      <AboutProduct />
      <CashewBanner />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;
