import React, { useState, useEffect } from "react";

import webDesignImgSmall from "../assets/home/desktop/image-web-design-small.jpg";
import webDesignImgLarge from "../assets/home/desktop/image-web-design-large.jpg";
import appDesignImg from "../assets/home/desktop/image-app-design.jpg";
import graphicDesignImg from "../assets/home/desktop/image-graphic-design.jpg";
import { useNavigate } from "react-router-dom";

const DesignItems = ({ three, web, app, graphic }) => {
  const navigate = useNavigate();

  const navigateWeb = () => {
    navigate("/webDesign");
  };

  const navigateApp = () => {
    navigate("/appDesign");
  };

  const navigateGraphic = () => {
    navigate("/graphicDesign");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const webDesignImg = windowWidth >= 1024 ? webDesignImgLarge : webDesignImgSmall;
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
      className={`${
        three
          ? "grid grid-rows-3 lg:grid-cols-[1fr_24px_1fr] lg:grid-rows-[1fr_1fr] my-[120px]"
          : "flex flex-col lg:flex-row lg:gap-[30px] mb-[96px] md:mb-[120px] lg:mb-[160px]"
      }  gap-[24px] px-[24px] md:px-[39px] lg:px-[165px] w-full`}
    >
      {web && (
        <div
          className={`lg:col-start-1 lg:row-start-1 lg:row-end-3 flex flex-col justify-center items-center gap-[12px] w-full h-[250px] ${
            three ? "lg:h-[640px]" : "lg:h-[308px]"
          } bg-cover bg-center bg-no-repeat rounded-[15px] cursor-pointer`}
          style={{ backgroundImage: `url(${webDesignImg})` }}
          onClick={navigateWeb}
        >
          <h1 className="font-medium text-[28px] text-white tracking-[1.4px]">
            WEB DESIGN
          </h1>
          <h2 className="font-medium text-[15px] text-white tracking-[5px]">
            VIEW PROJECTS
          </h2>
        </div>
      )}
      {app && (
        <div
          className="border-5 lg:col-start-3 lg:row-start-1 flex flex-col justify-center items-center gap-[12px] w-full h-[250px] lg:h-[308px] bg-cover rounded-[15px]  cursor-pointer"
          style={{ backgroundImage: `url(${appDesignImg})` }}
          onClick={navigateApp}
        >
          <h1 className="font-medium text-[28px] text-white tracking-[1.4px]">
            APP DESIGN
          </h1>
          <h2 className="font-medium text-[15px] text-white tracking-[5px]">
            VIEW PROJECTS
          </h2>
        </div>
      )}
      {graphic && (
        <div
          className="border-2 lg:col-start-3 lg:row-start-2 flex flex-col justify-center items-center gap-[12px] w-full h-[250px] lg:h-[308px] bg-cover rounded-[15px] cursor-pointer"
          style={{ backgroundImage: `url(${graphicDesignImg})` }}
          onClick={navigateGraphic}
        >
          <h1 className="font-medium text-[28px] text-white tracking-[1.4px]">
            GRAPHIC DESIGN
          </h1>
          <h2 className="font-medium text-[15px] text-white tracking-[5px]">
            VIEW PROJECTS
          </h2>
        </div>
      )}
    </div>
  );
};

export default DesignItems;
