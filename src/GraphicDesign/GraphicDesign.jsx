import React from "react";

import Nav from "../Shared/Nav";
import HeroForDesign from "../Shared/HeroForDesign";
import Cards from "./Cards";
import DesignItems from "../Shared/DesignItems";
import Footer from "../Shared/Footer";

const data = {
  title: "Graphic Design",
  content:
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
};

const GraphicDesign = () => {
  return (
    <>
      <Nav />
      <HeroForDesign title={data.title} content={data.content} />
      <Cards />
      <DesignItems three={false} web={true} app={true} graphic={false} />
      <Footer cta={true} />
    </>
  );
};

export default GraphicDesign;