import React from "react";

import circle from "../assets/home/desktop/bg-pattern-hero-home.svg";

const ContactForm = () => {
  return (
    <div className=" md:px-[39px] lg:px-[165px] w-[100vw]">
      <div className="relative lg:flex lg:justify-between lg:gap-[93px] px-[24px] lg:px-[96px] pt-[80px] lg:pt-0 w-full h-[764px] lg:h-[640px] text-white bg-peach md:rounded-[15px] overflow-hidden">
        <div className="flex flex-col items-center md:items-start lg:justify-center text-center md:text-start">
          <h1 className="font-medium text-[32px] md:text-[48px] leading-[36px] md:leading-[48px]">
            Contact Us
          </h1>
          <p className="mt-[24px] md:mt-[32px] mb-[48px] md:mb-[40px] lg:my-[45px] lg:min-w-[445px] font-regular text-[15px] lg:text-[16px] md:text-start leading-[25px] md:leading-[26px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="flex flex-col lg:justify-center gap-[33px] lg:gap-[25px] w-full">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            className="border-b-2 pb-[11px] w-full font-medium text-[15px] text-start text-white leading-[26px] placeholder-white placeholder:opacity-[50%] placeholder:pl-[15px] bg-peach "
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email Address"
            className="border-b-2 pb-[11px] w-full font-medium text-[15px] text-start text-white leading-[26px] placeholder-white placeholder:opacity-[50%] placeholder:pl-[15px] bg-peach "
          />
          <input
            type="text"
            name="phone"
            id=""
            placeholder="Phone"
            className="border-b-2 pb-[11px] w-full font-medium text-[15px] text-start text-white leading-[26px] placeholder-white placeholder:opacity-[50%] placeholder:pl-[15px] bg-peach "
          />
          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            className="border-b-2 pb-[88px] w-full font-medium text-[15px] text-start text-white leading-[26px] placeholder-white placeholder:opacity-[50%] placeholder:pl-[15px] bg-peach "
          ></textarea>
          <div className="flex justify-center md:justify-end mt-[7px]">
            <div className="flex justify-center items-center w-[152px] h-[56px] bg-white rounded-[8px]">
              <h3 className="text-[15px] text-dark_grey tracking-[1px]">
                SUBMIT
              </h3>
            </div>
          </div>
        </div>
        <img src={circle} alt="" className="absolute top-[-10%] left-[-15%] lg:top-0 lg:left-0" />
      </div>
    </div>
  );
};

export default ContactForm;
