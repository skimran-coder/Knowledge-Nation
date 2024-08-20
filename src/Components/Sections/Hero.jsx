import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
  return (
    <div className="w-screen max-h-fit   bg-gradient-to-tr from-[#d1dcd7] to-[#9a9a9a]">
      <div className="w-3/4 m-auto flex flex-wrap md:flex-nowrap items-center justify-between">

      <div className="flex flex-col gap-4 pt-4 md:pt-0">
        <h2 className="text-5xl font-semibold ">Achieve Excellence in Commerce</h2>
        <p className="md:w-2/4 opacity-80">Receive tailored support in commerce for Class 11 & 12 and B.Com. Missed a class? Catch up anytime with our extensive YouTube video library.</p>
        <div className="">
        <a href="https://www.youtube.com/@knowledgenationkolkata" className="bg-[#20AD94] px-4 py-2 text-white text-opacity-80 text-sm"><FontAwesomeIcon icon={faExclamationCircle} className=" pr-2" />Learn More</a>
      </div>
      </div>

      
      <div className="overflow-hidden flex justify-end md:h-full h-1/2">
        <img
          src="/assets/heroHD.png"
          className="md:w-96 hidden md:block w-1/2 object-cover pt-4"
          alt="hero"
        ></img>
        <img
          src="/assets/heroHD_mob.png"
          className="md:w-96 md:hidden w-1/2 object-cover pt-4"
          alt="hero"
        ></img>
      </div>
      </div>
    </div>
  );
};

export default Hero;
