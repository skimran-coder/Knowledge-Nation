import React from "react";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from "../Constant";

const Icons = () => {
  return (
    <div className="text-black text-sm flex gap-2 items-center ">
      <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faYoutube}
          className="rounded-full bg-white md:p-3 p-2"
        />
      </a>

      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faInstagram}
        className="rounded-full bg-white md:p-3 p-2"
      />
      </a>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faFacebook}
        className="rounded-full bg-white md:p-3 p-2"
      />
      </a>
      
    </div>
  );
};

export default Icons;
