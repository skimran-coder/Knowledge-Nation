import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import VideosList from "./VideosList";
import { useDispatch } from "react-redux";
import { addVideoList } from "../../utils/redux/courseSlice";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { course } = location.state || {};
  const videos = course ? course.items : [];
  const { courseName } = useParams();
  const videoTitle = videos[0]?.snippet?.title
    .split(" ")
    .filter((text) => !text.includes("#"))
    .join(" ");
  const video = videos[0];

  useEffect(() => {
    if (videos.length > 0) {
      dispatch(addVideoList(videos));
    }
  }, [videos, dispatch]);

  return (
    <div className="w-4/5 mx-auto my-12">
      <div className="mb-8 grid  md:grid-cols-3 grid-cols-1 justify-between">
        <div className="md:col-span-2 md:mr-16">
          <h2 className="text-3xl font-bold text-gray-800">
            {course?.courseName}
          </h2>
          <p className="text-gray-600 mt-2">{course?.courseDesc}</p>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 my-4">
              Course Content
            </h3>
            <div className="grid grid-cols-1 bg-gray-200 rounded-lg ">
              {videos?.length > 0 &&
                videos?.map((video) => (
                  <VideosList key={video.id} video={video} />
                ))}
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

            <Link
              to={`/courses/${courseName}/${videoTitle}`}
              state={{ video }}
              className="bg-myGreen text-white text-sm font-medium py-2 hover:bg-myGreenDarker transition-colors text-center rounded-md"
            >
              START LEARNING
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
