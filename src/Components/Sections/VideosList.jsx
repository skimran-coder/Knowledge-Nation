import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const VideosList = ({ video }) => {
  const { courseName } = useParams();
  const videoTitle = video.snippet.title
    .split(" ")
    .filter((text) => !text.includes("#"))
    .join(" ");
  const videoTitleParam = videoTitle.split(" ").join("-")

  return (
    <Link to={`/courses/${courseName}/${videoTitleParam}`} state={{video}}>
      <div className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors duration-200 rounded-lg gap-4">
        <div className="text-myGreen text-lg">
          <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
        </div>
        <div className="flex-1">
          <h1 className="text-gray-800 font-medium text-md">{videoTitle}</h1>
        </div>
      </div>
    </Link>
  );
};

export default VideosList;
