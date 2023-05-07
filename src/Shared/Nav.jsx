import React, { useState } from "react";

import logo from "../assets/shared/desktop/logo-dark.png";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [closed, setClosed] = useState(true);
  const handleSidebar = () => {
    setClosed(!closed)
  }
  
  const navigate = useNavigate();
  const navigateMain = () => {
    navigate("/");
  };

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
    <>
      <div className="fixed top-0 left-0 flex justify-between items-center px-[24px] md:px-[39px] lg:px-[165px] py-[35px] md:py-[64px] w-full h-[96px] bg-white z-[100]">
        <img
          src={logo}
          alt=""
          className="w-[202px] h-[27px] cursor-pointer"
          onClick={navigateMain}
        />
        <img
          src={closed ? hamburger : close}
          alt=""
          className="md:hidden cursor-pointer"
          onClick={handleSidebar}
        />
        <div className="hidden md:flex md:gap-[42px] font-jost font-regular text-[14px] text-dark_grey leading-[26px] tracking-[5]">
          <div className="cursor-pointer" onClick={navigateAbout}>
            OUR COMPANY
          </div>
          <div className="cursor-pointer" onClick={navigateLocation}>
            LOCATIONS
          </div>
          <div className="cursor-pointer" onClick={navigateContact}>
            CONTACT
          </div>
        </div>
      </div>
      <div className={`fixed ${closed ? "hidden" : "flex"} flex-col top-[96px] left-0 w-[100vw] h-[100vh] z-[100]`}>
        <div className="flex flex-col justify-center gap-[32px] pl-[24px] w-full h-[235px] text-white bg-black opacity-[100%]">
          <div className="text-[24px] tracking-[2px] leading-[25px] cursor-pointer" onClick={navigateAbout}>
            OUR COMPANY
          </div>
          <div className="text-[24px] tracking-[2px] leading-[25px] cursor-pointer" onClick={navigateLocation}>
            LOCATIONS
          </div>
          <div className="text-[24px] tracking-[2px] leading-[25px] cursor-pointer" onClick={navigateContact}>
            CONTACT
          </div>
        </div>
        <div className="flex-1 w-full bg-black opacity-[80%]"></div>
      </div>
    </>
  );
};

export default Nav;
