import React, { useState, useEffect } from "react";

import circleThree from "../assets/shared/desktop/bg-pattern-three-circles.svg";

const AboutContent = ({
  order,
  img_mobile,
  img_tablet,
  img_desktop,
  title,
  content,
  contentTwo,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl =
    windowWidth >= 1024
      ? img_desktop
      : windowWidth >= 768
      ? img_tablet
      : img_mobile;

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
    <div className={`relative lg:flex ${order === 'left' ? "lg:justify-start" : "lg:justify-between" }   lg:items-center md:mx-[39px] lg:mx-[165px] md:mt-[120px] lg:mt-[160px] md:rounded-[15px]  bg-card_peach overflow-hidden`}>
      <img
        src={imageUrl}
        alt=""
        className={`${order === 'left' ? "lg:order-1" : "lg:order-2" } w-full lg:w-[43%] h-[320px] lg:h-[640px]  md:rounded-t-[15px]  ${order === 'left' ? "lg:rounded-bl-[15px] lg:rounded-r-[0px]" : "lg:rounded-br-[15px] lg:rounded-l-[0px]" }`}
      />
      <div className={`${order === 'left' ? "lg:order-2" : "lg:order-1" } flex flex-col items-center lg:items-start px-[24px] md:px-[50px] lg:px-[89px] py-[84px] md:py-[66px] text-white text-center lg:text-start`}>
        <h2 className="mb-[24px] md:mb-[32px] font-medium text-[32px] text-peach md:text-[48px] leading-[36px]">
          {title}
        </h2>
        <p className="md:max-w-[573px] lg:max-w-[458px] font-regular text-[15px] md:text-[16px] text-font_black leading-[25px]">
          {content}
          <br />
          <br />
          {contentTwo}
        </p>
        <img src={circleThree} alt="" className="absolute top-0 md:top- left-0" />
      </div>
    </div>
  );
};

export default AboutContent;
