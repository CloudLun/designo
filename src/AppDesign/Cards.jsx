import React from "react";
import Card from "../Shared/Card";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

const data = [
  {
    img: airfilter,
    title: "AIRFILTER",
    intro:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    img: eyecam,
    title: "EYECAM",
    intro:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: faceit,
    title: "FACEIT",
    intro: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    img: todo,
    title: "TODO",
    intro: "A todo app that features cloud sync with light and dark mode",
  },
  {
    img: loopstudios,
    title: "LOOPSTUDIOS",
    intro: "A VR experience app made for Loopstudios",
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
