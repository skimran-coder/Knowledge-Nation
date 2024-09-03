import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useDisplayCourses from "../../utils/useDisplayCourses";
import CourseVideos from "./CourseVideos";
import VideosList from "./VideosList";

const CourseDetails = () => {
  useDisplayCourses();
  const { courseName } = useParams();
  const videosArr = useSelector((state) => state.courses.videos);
  const filteredDetails = videosArr
    ? videosArr.find((video) => video.courseName === courseName)
    : null;

  const videos = filteredDetails ? filteredDetails.items : [];
  console.log(filteredDetails);

  return (
    <div className="w-4/5 mx-auto my-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          {filteredDetails?.courseName}
        </h2>
        <p className="text-gray-600 mt-2">{filteredDetails?.courseDesc}</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Course Content
        </h3>
        <div className="grid grid-cols-1 gap-4 bg-gray-50 shadow-lg rounded-lg p-2">
          {videos?.length > 0 &&
            videos?.map((video) => <VideosList key={video.id} video={video} />)}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
