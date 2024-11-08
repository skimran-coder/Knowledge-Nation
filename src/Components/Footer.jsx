import { faLocationArrow, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Icons from "./Sections/Icons";

const Footer = () => {
  return (
    <footer className="w-screen text-white bg-black">
      <div className="w-3/5 flex flex-wrap sm:justify-between justify-center mx-auto items-center">
        <div className="flex flex-col gap-2 pb-8">
          <h1 className="pb-8 pt-8 text-2xl">Contact Details</h1>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationArrow} className="text-myGreen" />
            <p className="text-xs md:text-sm">59C GULAM JILANI KHAN ROAD</p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-myGreen" />
            <p className="text-xs md:text-sm"> +91 83348 35908 </p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-myGreen" />
            <p className="text-xs md:text-sm"> knowledgenation525@gmail.com </p>
          </div>
        </div>
        <div>
          <h1 className="pb-8 pt-4 text-2xl">Social Links</h1>
          <Icons />
        </div>
      </div>
      <hr className="text-white h-1 w-3/5 mx-auto my-8"></hr>
      <div className="text-center py-4">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Knowledge Nation. All rights reserved.
        </p>
        <p className="text-xs md:text-sm mt-4">
          Developed by{" "}
          <a
            href="mailto:skimranhussain4@gmail.com"
            className="text-myGreen hover:underline"
          >
            Sk. Imran Hussain
          </a>
        </p>
        <button className="bg-myGreen text-white py-1 px-4 rounded-md mt-2">
          <a href="https://www.linkedin.com/in/sk-imran-hussain/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            Connect on LinkedIn
          </a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
