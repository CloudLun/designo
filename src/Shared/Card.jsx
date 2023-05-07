import React from "react";

const Card = ({ img, title, intro }) => {
  return (
    <div className="md:flex lg:flex-col">
      <div className="md:w-[50%] lg:w-[100%]">
        <img
          src={img}
          alt=""
          className="h-full w-full rounded-t-[15px] md:rounded-tr-[0px] md:rounded-bl-[15px] md:rounded-br-[0px] lg:rounded-t-[15px] lg:rounded-b-[0px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-[22px] md:w-[50%] lg:w-[100%] h-[158px] md:h-[371px] lg:h-[158px] text-center bg-card_peach rounded-b-[15px] md:rounded-bl-[0px] md:rounded-tr-[15px] md:rounded-br-[15px] lg:rounded-b-[15px] lg:rounded-t-[0px]">
        <h2 className="font-medium text-[20px] text-peach tracking-[5px]">
          {title}
        </h2>
        <p className="w-[267px] md:w-[277px] font-thin text-black">{intro}</p>
      </div>
    </div>
  );
};

export default Card;
