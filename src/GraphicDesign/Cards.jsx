import React from "react";
import Card from "../Shared/Card";

import timBrown from "../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg"


const data = [
  {
    img: timBrown,
    title: "TIM BROWN",
    intro:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    img: boxedWater,
    title: "BOXED WATER",
    intro:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: science,
    title: "SCIENCE!",
    intro: "Get to meet your favorite internet superstar with the faceit app",
  }
];

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[32px] lg:gap-[30px] px-[24px] md:px-[39px] lg:px-[165px] py-[96px] md:py-[120px] lg:py-[160px]">
      {data.map((d, i) => {
        return (
          <div key={i} className="w-full">
            <Card img={d.img} title={d.title} intro={d.intro} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;