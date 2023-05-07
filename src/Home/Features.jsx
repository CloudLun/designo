import React, { useState } from "react";

import passionateImg from "../assets/home/desktop/illustration-passionate.svg";
import resourcefulImg from '../assets/home/desktop/illustration-resourceful.svg'
import friendlyImg from '../assets/home/desktop/illustration-friendly.svg'

const Features = () => {
  return (
    <div className="mb-[300px] md:mb-[370px] lg:mb-[384px] px-[24px] md:px-[39px] lg:px-[165px]">
      <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[30px] mb-[120px]">
        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-[48px]">
          <img src={passionateImg} alt="" className="w-[188px]" />
          <div className="mt-[48px] md:mt-0 text-center md:text-start lg:text-center">
            <h2 className="pb-[32px] md:pb-[16px] font-medium text-[20px] text-dark_grey leading-[26px] tracking-[5px]">
              PASSIONATE
            </h2>
            <p className="font-thin text-[16px] leading-[26px]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-[48px]">
          <img src={resourcefulImg} alt="" className="w-[188px]" />
          <div className="mt-[48px] md:mt-0 text-center md:text-start lg:text-center">
            <h2 className="pb-[32px] md:pb-[16px] font-medium text-[20px] text-dark_grey leading-[26px] tracking-[5px]">
              RESOURCEFUL
            </h2>
            <p className="font-thin text-[16px] leading-[26px]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-[48px]">
          <img src={friendlyImg} alt="" className="w-[188px]" />
          <div className="mt-[48px] md:mt-0 text-center md:text-start lg:text-center">
            <h2 className="pb-[32px] md:pb-[16px] font-medium text-[20px] text-dark_grey leading-[26px] tracking-[5px]">
              FRIENDLY
            </h2>
            <p className="font-thin text-[16px] leading-[26px]">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
