import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { YOUTUBE_URL } from "../../Constant";

const Hero = () => {
  return (
    <div className="w-screen h-fit animated-gradient">
      <div className="w-3/4 m-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex flex-col gap-4 pt-4 md:pt-0">
          <h2 className="lg:text-5xl  text-3xl font-semibold ">
            Achieve Excellence in Commerce
          </h2>
          <p className="md:w-full opacity-80">
            Receive tailored support in commerce for Class 11 & 12 and B.Com.
            Missed a class? Catch up anytime with our extensive YouTube video
            library.
          </p>
          <div className="">
            <a
              href="#courses"
              rel="noreferrer"
              className="bg-[#20AD94] px-4 py-2 text-white text-opacity-80 text-sm"
            >
              <FontAwesomeIcon icon={faExclamationCircle} className=" pr-2" />
              Learn More
            </a>
          </div>
        </div>

        <div className="overflow-hidden  md:h-full h-1/2 ">
          <picture className="flex justify-end  ">
            <source
              srcSet="/assets/heroHD3.png"
              media="(min-width: 768px)" // Matches 'md' breakpoint and up
            />
            <img
              src="/assets/heroHD_mob.png"
              className="w-1/2 object-cover pt-4 "
              alt="hero"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
