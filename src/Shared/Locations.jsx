import React from "react";

import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import circle from "../assets/shared/desktop/bg-pattern-small-circle.svg";

import { useNavigate } from "react-router-dom";

const data = [
  { country: "CANADA", img: canada },
  { country: "AUSTRALIA", img: australia },
  { country: "UNITED KINGDOM", img: unitedKingdom },
];

const Location = () => {
  const navigate = useNavigate();

  const navigateLocation = () => {
    navigate("/locations");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-[48px] md:gap-[58px] lg:gpa-[30px] py-[120px]">
      {data.map((d, i) => {
        return (
          <div key={i} className="flex flex-col items-center">
            <div className="relative">
              <img src={circle} alt="" className="rotate-[90deg]" />
              <img
                src={d.img}
                alt=""
                className="absolute top-0 left-0 w-[202px] h-[202px]"
              />
            </div>
            <h1 className="mt-[48px] mb-[32px] font-medium text-[20px] text-center text-dark_grey tracking-[5px] leading-[26px]">
              {d.country}
            </h1>
            <div
              className="flex justify-center items-center w-[152px] h-[56px] bg-peach rounded-[8px] cursor-pointer"
              onClick={navigateLocation}
            >
              <h3 className="text-[15px] text-white tracking-[1px] ">
                SEE LOCATION
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
