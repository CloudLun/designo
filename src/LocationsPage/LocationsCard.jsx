import React, { useState, useEffect } from "react";

import circleThree from "../assets/shared/desktop/bg-pattern-three-circles.svg";

const LocationsCard = ({
  key,
  side,
  country,
  office,
  address,
  addressTwo,
  phone,
  mail,
  img_desktop,
  img_tablet,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 1024 ? img_desktop : img_tablet;

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
    <div
      key={key}
      className="lg:flex lg:gap-[30px] md:px-[39px] lg:px-[165px] w-[100vw]"
    >
      <img
        src={imageUrl}
        className={`${
          side === "right" ? "lg:order-2" : "lg:order-1"
        } md:mb-[31px] w-full lg:w-[350px] h-[320px] md:h-[326px] md:rounded-[15px]`}
      />
      <div
        className={`relative  ${
          side === "right" ? "lg:order-1" : "lg:order-2"
        } lg:flex-1 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 justify-center items-center md:pl-[77px] py-[84px] w-full lg:max-width-[540px] lg:h-[326px] text-center md:text-start md:rounded-[15px] bg-card_peach overflow-hidden`}
      >
        <h2 className="md:col-start-1 md:col-end-3 md:rows-1 md:mb-[32px] font-medium text-[32px] text-peach md:text-[48px] leading-[36px]">
          {country}
        </h2>
        <div className="md:col-start-1 md:rows-2 my-[24px]">
          <p className="font-bold text-[15px] leading-[25px]">{office}</p>
          <p className="font-regular text-[15px] leading-[25px]">{address}</p>
          <p className="font-regular text-[15px] leading-[25px]">
            {addressTwo}
          </p>
        </div>
        <div className="md:col-start-2 md:rows-2">
          <p className="font-bold text-[15px] leading-[25px]">Contact</p>
          <p className="font-regular text-[15px] leading-[25px]">{phone}</p>
          <p className="font-regular text-[15px] leading-[25px]">{mail}</p>
        </div>
        <img src={circleThree} alt="" className="absolute bottom-0" />
      </div>
    </div>
  );
};

export default LocationsCard;
