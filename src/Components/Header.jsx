import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Icons from "./Sections/Icons";
import Sidebar from "./Sidebar";

const TopLayer = () => {
  return (
    <div className="w-full px-2 bg-myGreen py-1  ">
      <div className="sm:w-4/5 w-full m-auto flex justify-between items-center">
        <div className="flex flex-wrap md:flex-nowrap md:gap-8 gap-2 text-white opacity-80 text-sm">
          <div className="flex gap-2 items-center ">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <p className="text-xs md:text-sm"> +91 83348 35908 </p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="text-xs md:text-sm">59C GULAM JILANI KHAN ROAD</p>
          </div>
        </div>
        <Icons />
      </div>
    </div>
  );
};

const BottomLayer = ({ handleSidebar }) => {
  const { pathname } = useLocation();

  return (
    <div className="lg:w-3/4 w-full m-auto  flex items-center justify-between">
      <FontAwesomeIcon
        icon={faBars}
        className="text-2xl sm:hidden pl-4"
        onClick={handleSidebar}
      />

      <div className="sm:w-20 w-16">
        <a href="/">
          <img src={`/assets/logo.jpg`} alt="logo" className="w-full" />
        </a>
      </div>

      <nav className="sm:block hidden">
        <ul className="flex gap-8 text-base font-semibold uppercase ">
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className={`${
                pathname === "/"
                  ? "text-myGreen transition-colors duration-200 ease-in-out"
                  : ""
              }`}
            >
              Home
            </Link>
            <div
              className={`${
                pathname === "/"
                  ? "w-12 h-1 bg-myGreen transition-colors duration-500 ease-in-out"
                  : ""
              }`}
            ></div>
          </li>

          <li className="flex flex-col items-center">
            <Link
              to="/courses"
              className={`${
                pathname.includes("/courses")
                  ? "text-myGreen transition-colors duration-200 ease-in-out"
                  : ""
              }`}
            >
              Courses
            </Link>
            <div
              className={`${
                pathname.includes("/courses")
                  ? "w-20 h-1 bg-myGreen transition-colors duration-500 ease-in-out"
                  : ""
              }`}
            ></div>
          </li>

          <li className="flex flex-col items-center">
            <Link
              to="/about"
              className={`${
                pathname === "/about"
                  ? "text-myGreen transition-colors duration-200 ease-in-out"
                  : ""
              }`}
            >
              About Us
            </Link>
            <div
              className={`${
                pathname === "/about"
                  ? "w-24 h-1 bg-myGreen transition-colors duration-500 ease-in-out"
                  : ""
              }`}
            ></div>
          </li>

          <li className="flex flex-col items-center">
            <Link
              to="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-myGreen transition-colors duration-200 ease-in-out"
                  : ""
              }`}
            >
              Contact Us
            </Link>
            <div
              className={`${
                pathname === "/contact"
                  ? "w-28 h-1 bg-myGreen transition-colors duration-500 ease-in-out"
                  : ""
              }`}
            ></div>
          </li>
        </ul>
      </nav>

      {/* mobile */}

      <div className="bg-myOrange border-myOrange relative z-10 group send mr-4 md:mr-12 my-2 px-2 py-2 sm:px-6 sm:py-3 flex items-center cursor-pointer transition-all duration-200 ease-in-out border">
        <a href="tel:+918334835908" className=" text-white group-hover:text-myOrange text-sm transition-all duration-200 ease-in-out">
          Join Now
        </a>
        <FontAwesomeIcon icon={faPhoneVolume} className="text-white group-hover:text-myOrange pl-2 transition-all duration-200 ease-in-out" />
      </div>
    </div>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-screen flex flex-col">
      <TopLayer />
      <BottomLayer handleSidebar={handleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />
    </header>
  );
};

export default Header;
