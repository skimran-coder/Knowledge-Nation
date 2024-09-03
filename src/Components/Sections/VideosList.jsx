import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const VideosList = ({ video }) => {
  return (
    <div className="flex gap-2 ">
      <div>
        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
      </div>
      <div>
        <h1>
          {
          video.snippet.title
          .split(" ")
          .filter((text) => !text.includes("#"))
          .join(" ")
          }
        </h1>
      </div>
    </div>
  );
};

export default VideosList;
