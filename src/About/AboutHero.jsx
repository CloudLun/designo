import React, { useState, useEffect } from "react";

import hero_mobile from "../assets/about/mobile/image-about-hero.jpg";
import hero_tablet from "../assets/about/tablet/image-about-hero.jpg";
import hero_desktop from "../assets/about/desktop/image-about-hero.jpg";

import circle from "../assets/home/desktop/bg-pattern-hero-home.svg";
import leaf from "../assets/shared/desktop/bg-pattern-leaf.svg";

const AboutHero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl =
    windowWidth >= 1024
      ? hero_desktop
      : windowWidth >= 768
      ? hero_tablet
      : hero_mobile;

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
    <div className="relative lg:flex lg:justify-between lg:items-center md:mx-[39px] lg:mx-[165px] md:rounded-[15px] lg:h-[480px]  bg-peach overflow-hidden">
      <img
        src={imageUrl}
        alt=""
        className="lg:order-2 w-full lg:w-[43%] h-[320px] lg:h-full md:rounded-t-[15px] lg:rounded-br-[15px] lg:rounded-l-[0px] "
      />
      <div className="flex flex-col items-center lg:items-start px-[24px] md:px-[50px] lg:px-[89px] py-[84px] md:py-[66px] text-white text-center lg:text-start">
        <h2 className="mb-[24px] md:mb-[32px] font-medium text-[32px] md:text-[48px] leading-[36px]">
          About us
        </h2>
        <p className="md:max-w-[573px] lg:max-w-[458px] font-regular text-[15px] md:text-[16px] leading-[25px]">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>

      <img src={circle} alt="" className="absolute top-[30%] md:top-[-20%] right-0 md:left-[-10%] lg:left-[0]  w-[292px] md:w-[640px] opacity-5" />

      {windowWidth >= 1024 && (
        <img
          src={leaf}
          alt=""
          className="absolute top-[328px] left-[-165px] opacity-[18%]"
        />
      )}
    </div>
  );
};

export default AboutHero;
