import React, { useState, useEffect } from "react";

import circle from "../assets/home/desktop/bg-pattern-hero-home.svg";
import circleThree from "../assets/shared/desktop/bg-pattern-three-circles.svg";
import leaf from "../assets/shared/desktop/bg-pattern-leaf.svg";

const HeroForDesign = ({ title, content }) => {
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
    <div className="relative flex flex-col justify-center items-center gap-[24px] px-[24px] md:mx-[39px] lg:mx-[165px] h-[320px] text-center text-white bg-peach overflow-hidden md:rounded-[15px]">
      <h2 className="font-medium text-[32px] md:text-[48px] leading-[36px]">
        {title}
      </h2>
      <p className="md:w-[400px] font-thin text-[15px] md:text-[16px] leading-[25px]">
        {content}
      </p>

      {windowWidth < 768 && (
        <img
          src={circle}
          alt=""
          className="absolute right-0 w-[292px] rotate-180"
        />
      )}

      {windowWidth >= 768 && (
        <img
          src={circleThree}
          alt=""
          className="absolute top-[-50%] right-0  rotate-180"
        />
      )}

      {windowWidth >= 1024 && (
        <img
          src={leaf}
          alt=""
          className="absolute top-[50%] left-[-165px] opacity-[18%]"
        />
      )}
    </div>
  );
};

export default HeroForDesign;
