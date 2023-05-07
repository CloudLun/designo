import React, { useState, useEffect } from "react";

import phone from "../assets/home/desktop/image-hero-phone.png";
import circle from "../assets/home/desktop/bg-pattern-hero-home.svg";
import leaf from "../assets/shared/desktop/bg-pattern-leaf.svg";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const navigateAbout = () => {
    navigate("/about");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="relative md:px-[39px] lg:px-[165px] w-full">
      <div className="relative lg:flex lg:justify-between lg:items-center px-[24px] lg:px-[80px] pt-[80px] w-full h-[843px] lg:h-[640px] bg-peach md:rounded-[15px] overflow-hidden">
        <div className="flex flex-col items-center lg:items-start relative mb-[80px] md:mb-[70px]  text-center lg:text-start text-white z-10">
          <h1 className="m-auto w-[327px] md:w-[573px] font-medium text-[32px] md:text-[48px]  leading-[36px] md:leading-[48px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="mt-[14px] md:mt-[40px] mb-[24px] md:mb-[25px] lg:my-[45px] w-[327px] md:w-[445px] font-regular text-[15px] md:text-[16px] leading-[25px] md:leading-[26px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div
            className="flex justify-center items-center w-[152px] h-[56px] bg-white rounded-[8px] cursor-pointer"
            onClick={navigateAbout}
          >
            <h3 className="text-[15px] text-dark_grey tracking-[1px]">
              LEARN MORE
            </h3>
          </div>
        </div>
        <div className="absolute top-[400px] md:top-[350px] lg:top-[-15px] left-0 lg:left-[50%]  w-[100%] lg:w-[50%]">
          <img src={phone} alt="" className="w-full" />
        </div>
        <img
          src={circle}
          alt=""
          className="absolute right-0 md:left-[20%] lg:right-0  top-[50%]  w-[640px] aspect-square translate-y-[-320px] z-1"
        />
      </div>
      {windowWidth >= 1024 && (
        <img
          src={leaf}
          alt=""
          className="absolute top-[328px] left-0 opacity-[8%]"
        />
      )}
    </div>
  );
};
export default Hero;
