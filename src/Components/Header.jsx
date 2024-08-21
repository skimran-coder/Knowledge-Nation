import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const TopLayer = () => {
  return (
    <div className="w-full px-2 bg-[#20AD94] py-1  ">
      <div className="sm:w-4/5 w-full m-auto flex justify-between items-center">
        <div className="flex flex-wrap md:flex-nowrap md:gap-8 gap-2 text-white opacity-80 text-sm">
          <div className="flex gap-2 items-center ">
            <FontAwesomeIcon icon={faPhone} className="-scale-x-100" />
            <p className="text-xs md:text-sm"> +91 83348 35908 </p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="text-xs md:text-sm">59C GULAM JILANI KHAN ROAD</p>
          </div>
        </div>
        <div className="text-black text-sm flex gap-2 items-center ">
          <FontAwesomeIcon
            icon={faYoutube}
            className="rounded-full bg-white md:p-3 p-2"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="rounded-full bg-white md:p-3 p-2"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="rounded-full bg-white md:p-3 p-2"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="rounded-full bg-white md:p-3 p-2"
          />
        </div>
      </div>
    </div>
  );
};

const BottomLayer = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="md:w-3/4 w-full m-auto  flex items-center justify-between">
      <div className="p-8 sm:hidden">
        <FontAwesomeIcon icon={faBars} className="text-2xl " />
      </div>

      <div className="sm:w-20 w-16">
        <img src={`/assets/logo.jpg`} alt="logo" className="w-full" />
      </div>

      <nav className="sm:block hidden">
        <ul className="flex gap-8 text-base font-semibold uppercase ">
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className={`${pathname === "/" ? "text-[#20AD94] transition-colors duration-200 ease-in-out" : ""}`}
            >
              Home
            </Link>
            <div
              className={`${pathname === "/" ? "w-12 h-1 bg-[#20AD94] transition-colors duration-500 ease-in-out" : ""}`}
            ></div>
          </li>

          <li className="flex flex-col items-center">
            <Link
              to="/about"
              className={`${pathname === "/about" ? "text-[#20AD94] transition-colors duration-200 ease-in-out" : ""}`}
            >
              About Us
            </Link>
            <div
              className={`${
                pathname === "/about" ? "w-20 h-1 bg-[#20AD94] transition-colors duration-500 ease-in-out" : ""
              }`}
            ></div>
          </li>

          <li className="flex flex-col items-center">
            <Link
              to="/contact"
              className={`${pathname === "/contact" ? "text-[#20AD94] transition-colors duration-200 ease-in-out" : ""}`}
            >
              Contact Us
            </Link>
            <div
              className={`${
                pathname === "/contact" ? "w-24 h-1 bg-[#20AD94] transition-colors duration-500 ease-in-out" : ""
              }`}
            ></div>
          </li>
        </ul>
      </nav>

      {/* mobile */}

      <div className="bg-[#FE4C1B] mr-4 md:mr-12 my-2 px-2 py-2 sm:px-6 sm:py-3 flex items-center">
        <a
          href="tel:+918334835908"
          className=" text-white text-sm"
        >
          Join Now{" "}
        </a>
        <FontAwesomeIcon icon={faPhone} className="text-white pl-2" />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-screen flex flex-col">
      <TopLayer />
      <BottomLayer />
    </header>
  );
};

export default Header;
