import React from "react";

const CourseVideos = ({ item }) => {
  return (
    <div>
      <h2>{item.snippet.title}</h2>
      <div>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};
export default CourseVideos;
