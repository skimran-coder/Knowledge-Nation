import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
          <div className="fixed top-0 left-0 h-full w-64 bg-white z-50 p-4">
            <button
              onClick={onClose}
              className="text-2xl absolute top-4 right-4"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <nav className="mt-16">
              <ul className="flex flex-col gap-4 text-base font-semibold">
                <li>
                  <Link
                    to="/"
                    className={`${
                      pathname === "/" ? "text-[#20AD94]" : ""
                    }`}
                    onClick={onClose}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`${
                      pathname === "/about" ? "text-[#20AD94]" : ""
                    }`}
                    onClick={onClose}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`${
                      pathname === "/contact" ? "text-[#20AD94]" : ""
                    }`}
                    onClick={onClose}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
