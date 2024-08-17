import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const TopLayer = () => {
  return (
    <div className="px-52 bg-[#20AD94] py-1  flex justify-between items-center">
      <div className="flex gap-8 text-white opacity-80 text-sm">
        <div className="flex gap-2 items-center ">
          <FontAwesomeIcon icon={faPhone} className="-scale-x-100" />
          <p> +91 83348 35908 </p>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>59C GULAM JILANI KHAN ROAD</p>
        </div>
      </div>
      <div className="text-black text-sm flex gap-2 items-center ">
        <FontAwesomeIcon
          icon={faYoutube}
          className="rounded-full bg-white p-3"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="rounded-full bg-white p-3"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="rounded-full bg-white p-3"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className="rounded-full bg-white p-3"
        />
      </div>
    </div>
  );
};

const BottomLayer = () => {
  return (
    <div className="px-60 py-2 flex items-center justify-between">
      <div>
        <img src={`/assets/logo.jpg`}  alt="logo" className="w-20"/>
      </div>

      <nav>
        <ul className="flex gap-8 text-base font-semibold uppercase">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <a href="tel:+918334835908" className="bg-[#FE4C1B] px-6 py-3 text-white text-opacity-80 text-sm">Join Now <FontAwesomeIcon icon={faPhone} className=" pl-2" /></a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-screen flex flex-col">
      <TopLayer />
      <BottomLayer/>
    </header>
  );
};

export default Header;
