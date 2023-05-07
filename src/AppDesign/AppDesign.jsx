import React from "react";

import Nav from "../Shared/Nav";
import HeroForDesign from "../Shared/HeroForDesign";
import Cards from "./Cards";
import DesignItems from "../Shared/DesignItems";
import Footer from "../Shared/Footer";

const data = {
  title: "App Design",
  content:
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
};

const AppDesign = () => {
  return (
    <div className="mt-[96px] md:mt-[131px]">
      <Nav />
      <HeroForDesign title={data.title} content={data.content} />
      <Cards />
      <DesignItems three={false} web={true} app={false} graphic={true} />
      <Footer cta={true} />
    </div>
  );
};

export default AppDesign;
