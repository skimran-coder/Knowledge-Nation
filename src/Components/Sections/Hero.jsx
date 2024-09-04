import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="w-screen h-fit animated-gradient">
      <div className="w-3/4 m-auto flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex flex-col gap-4 pt-4 md:pt-0 text-white">
          <h2 className="lg:text-6xl text-4xl font-bold leading-tight ">
            Achieve Excellence in Commerce
          </h2>
          <p className="md:w-full text-lg opacity-90">
            Receive tailored support in commerce for Class 11 & 12 and B.Com.
            Missed a class? Catch up anytime with our extensive YouTube video
            library.
          </p>
          <div className="">
          <a
  href="#courses"
  className="bg-myGreen px-6 py-3 text-white text-sm rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-myGreen hover:shadow-xl inline-flex items-center"
>
  <FontAwesomeIcon icon={faExclamationCircle} className="pr-2" />
  Learn More
</a>

          </div>
        </div>

        <div className="overflow-hidden  md:h-full h-1/2 ">
          <picture className="flex justify-end  ">
            <source
              srcSet="/assets/heroHD3.png"
              media="(min-width: 768px)" 
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
