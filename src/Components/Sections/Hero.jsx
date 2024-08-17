import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
  return (
    <div className="w-screen h-screen  flex items-center justify-between bg-gradient-to-tr from-[#d1dcd7] to-[#9a9a9a]">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-semibold px-52">Achieve Excellence in Commerce</h2>
        <p className="px-52 opacity-80">Receive tailored support in commerce for Class 11 & 12 and B.Com. Missed a class? Catch up anytime with our extensive YouTube video library.</p>
        <div className="px-52">
        <a href="https://www.youtube.com/@knowledgenationkolkata" className="bg-[#20AD94] px-4 py-2 text-white text-opacity-80 text-sm"><FontAwesomeIcon icon={faExclamationCircle} className=" pr-2" />Learn More</a>
      </div>
      </div>
      <div className="overflow-hidden h-full">
        <img
          src="/assets/hero4.png"
          className="h-full object-cover"
          alt="hero"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
