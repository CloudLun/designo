import React from "react";

import Nav from "../Shared/Nav";
import Hero from "./Hero";
import DesignItems from "../Shared/DesignItems";
import Features from "./Features";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className="mt-[96px] md:mt-[131px] w-full">
      <Nav />
      <Hero />
      <DesignItems three={true}  web={true} app={true} graphic={true}/>
      <Features />
      <Footer cta={true} />
    </div>
  );
};

export default Home;
