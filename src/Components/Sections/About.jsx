import React from "react";
import { ABOUT_US_TEXT } from "../../Constant";

const About = () => {
  return (
    <div className="w-screen flex items-center ">
      <div className="pl-52 pt-20">
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 bg-[#20AD94]"></div>
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>
        <p className="w-2/4 pt-4">{ABOUT_US_TEXT}</p>
      </div>
      <div className="">
        <img src="/assets/Designer.png" alt="about" className="pr-32"></img>
      </div>
    </div>
  );
};

export default About;
