import React from "react";
import { ABOUT_US_TEXT_PARA_1, ABOUT_US_TEXT_PARA_2, ABOUT_US_TEXT_PARA_3 } from "../../Constant";

const About = () => {
  return (
    <div className="w-3/4 pb-20 mx-auto flex flex-wrap items-center justify-between gap-8 lg:gap-0">
      <div className="2xl:w-[620px] xl:w-[512px] lg:w-[410px] pt-20 left-section">
        <div className="flex items-center gap-2">
          <div className="w-1 h-12 bg-[#20AD94]"></div>
          <h2 className="lg:text-4xl text-3xl font-bold">About Us</h2>
        </div>
        <div className="w-full flex flex-col sm:gap-6 lg:gap-8 gap-4 pt-4">
          <p className="text-sm xl:text-base">{ABOUT_US_TEXT_PARA_1}</p>
          <p className="text-sm xl:text-base">{ABOUT_US_TEXT_PARA_2}</p>
          {
            window.innerWidth > 640 && <p className="text-sm xl:text-base">{ABOUT_US_TEXT_PARA_3}</p>
          } 
        </div>
      </div>

      <div className="right-section flex items-center lg:pt-20 lg:mx-0 sm:mx-auto lg:flex-col grid-rows-3 overflow-hidden gap-2 lg:gap-8">
        <div className="xl:w-96 lg:w-80 w-96 lg:flex justify-start">
          <img
            src="/assets/about_1.jpg"
            alt="about 1"
            className="xl:w-60 lg:w-48  object-cover"
          ></img>
        </div>
        <div className="xl:w-96 lg:w-80 w-96 flex justify-end">
          <img
            src="/assets/about_2.jpg"
            alt="about 1"
            className="xl:w-60 lg:w-48  object-cover"
          ></img>
        </div>
        <div className="xl:w-96 lg:w-80 w-96 flex justify-start">
          <img
            src="/assets/about_3.jpg"
            alt="about 1"
            className="xl:w-60 lg:w-48 object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
