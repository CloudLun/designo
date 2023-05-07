import React, { useState } from "react";

import logo from "../assets/shared/desktop/logo-light.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";

import circleThree from "../assets/shared/desktop/bg-pattern-three-circles.svg";

import { useNavigate } from "react-router-dom";

const Footer = ({ cta }) => {
  const navigate = useNavigate();

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateLocation = () => {
    navigate("/locations");
  };

  const navigateContact = () => {
    navigate("/contact");
  };

  return (
    <div
      className={`relative ${
        cta ? "mt-[312px] md:mt-[380px]" : "mt-0 md:mt-0"
      }   px-[24px] md:px-[39px] lg:px-[165px] pt-[250px] md:pt-[168px] pb-[64px] md:pb-[80px] md:min-w-[768px]  bg-black`}
    >
      <div className="md:flex md:items-center md:justify-between md:mb-[80px]">
        <div className="flex justify-center m-auto md:m-0 w-[202px] ">
          <img src={logo} alt="" className="align-center" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between lg:justify-end gap-[32px] lg:gap-[40px] mt-[65px] mb-[40px] md:m-0 font-regular text-[14px] text-white leading-[14px] tracking-[2px] cursor-pointer">
          <h3 className="" onClick={navigateAbout}>
            OUR COMPANY
          </h3>
          <h3 className="" onClick={navigateLocation}>
            LOCATIONS
          </h3>
          <h3 className="" onClick={navigateContact}>
            CONTACT
          </h3>
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div className="flex flex-col md:flex-row lg:justify-start gap-[40px] md:gap-[60px] lg:gap-[180px] mb-[40px] text-[16px] text-center md:text-start text-white leading-[26px] opacity-[0.4]">
          <div className="md:min-w-[223px]">
            <h1 className="font-bold ">Designo Central Office</h1>
            <h3 className="font-thin">3886 Wellington Street</h3>
            <h3 className="font-thin">Toronto, Ontario M9C 3J5</h3>
          </div>
          <div className="md:min-w-[223px]">
            <h1 className="font-bold">Contact Us (Central Office)</h1>
            <h3 className="font-thin">P : +1 253-863-8967</h3>
            <h3 className="font-thin">M : contact@designo.co</h3>
          </div>
        </div>
        <div className="flex justify-center md:items-end gap-[16px] h-[78px]">
          <img src={facebook} alt="" className="w-[24px] h-[24px]" />
          <img src={youtube} alt="" className="w-[24px] h-[24px]" />
          <img src={twitter} alt="" className="w-[24px] h-[24px]" />
          <img src={pinterest} alt="" className="w-[24px] h-[24px]" />
          <img src={instagram} alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>
      {cta ? (
        <div className="absolute top-[-196px] md:top-[-270px] lg:top-[-220px] left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row justify-center lg:justify-between items-center px-[40px] lg:px-[96px] w-[calc(100%-48px)] md:w-[calc(100%-78px)] lg:w-[calc(100%-330px)] h-[379px] md:h-[350px] lg:h-[292px] text-center lg:text-start bg-peach rounded-[15px] overflow-hidden z-10">
          <div>
            <h2 className="font-medium text-[32px] lg:text-[40px] lg:w-[268px] text-white leading-[36px] lg:leading-[40px]">
              Let’s talk about your project
            </h2>
            <p className="mt-[12px] mb-[32px] w-[279px] lg:w-[459px] md:w-[573px] font-thin lg:text-[16px] text-white">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <div
            className="flex justify-center items-center w-[152px] h-[56px] bg-white rounded-[8px]  cursor-pointer z-10"
            onClick={navigateContact}
          >
            <h3
              className="text-[15px] text-dark_grey tracking-[1px]"
              onClick={navigateContact}
            >
              GET IN TOUCH
            </h3>
          </div>
          <img src={circleThree} alt="" className="absolute top-[50%] z-0" />
          <img src={circleThree} alt="" className="absolute z-0" />
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
