import React from "react";
import Card from "../Shared/Card";

import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";

const data = [
  {
    img: express,
    title: "EXPRESS",
    intro: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: transfer,
    title: "TRANSFER",
    intro: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    img: photon,
    title: "PHOTON",
    intro:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    img: builder,
    title: "BUILDER",
    intro: "Connects users with local contractors based on their location",
  },
  {
    img: blogr,
    title: "BLOGR",
    intro: "Blogr is a platform for creating an online blog or publication",
  },
  {
    img: camp,
    title: "CAMP",
    intro: "Get expert training in coding, data, design, and digital marketing",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 items-center gap-[40px] md:gap-[32px] lg:gap-[30px] px-[24px] md:px-[39px] lg:px-[165px] py-[96px] md:py-[120px] lg:py-[160px]">
      {data.map((d, i) => {
        return (
          <div key={i} className="w-full">
            <Card img={d.img} title={d.title} intro={d.intro} />
            {/* <Footer /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
