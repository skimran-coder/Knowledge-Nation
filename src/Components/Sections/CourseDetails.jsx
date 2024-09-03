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
      <div className="mb-8 grid  md:grid-cols-3 grid-cols-1 justify-between">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-gray-800">
            {filteredDetails?.courseName}
          </h2>
          <p className="text-gray-600 mt-2">{filteredDetails?.courseDesc}</p>
          <div>

        <h3 className="text-2xl font-semibold text-gray-700 my-4">
          Course Content
        </h3>
        <div className="grid grid-cols-1 gap-4 rounded-lg p-2">
          {videos?.length > 0 &&
            videos?.map((video) => <VideosList key={video.id} video={video} />)}
        </div>
      </div>
          </div>
          
          <div className="order-first md:order-last pb-8">
            <div className="bg-gray-200 max-w-full md:p-8 p-2 flex flex-col gap-4 rounded-md">
              <img
                src={videos[0]?.snippet.thumbnails.maxres.url}
                alt="thumbnail"
                className="w-fit p-2 md:p-0 overflow-hidden rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
              ></img>
          
            <button className="bg-myGreen text-white text-sm font-medium py-2 hover:bg-myGreenDarker transition-colors text-center rounded-md">START LEARNING</button>
            </div>

        </div>
      </div>


     
    </div>
  );
};

export default CourseDetails;
