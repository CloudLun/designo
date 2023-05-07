import React from "react";

import Nav from "../Shared/Nav";
import HeroForDesign from "../Shared/HeroForDesign";
import Cards from "./Cards";
import DesignItems from "../Shared/DesignItems";
import Footer from "../Shared/Footer";

const data = {
  title: "Web Design",
  content:
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
};

const WebDesign = () => {
  return (
    <div className="mt-[96px] md:mt-[131px]">
      <Nav />
      <HeroForDesign title={data.title} content={data.content} />
      <Cards />
      <DesignItems three={false} web={false} app={true} graphic={true} />
      <Footer />
    </div>
  );
};

export default WebDesign;
