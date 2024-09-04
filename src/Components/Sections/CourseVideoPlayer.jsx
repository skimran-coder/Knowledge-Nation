import React from "react";
import { useLocation } from "react-router-dom";
import VideosList from "./VideosList";
import { useSelector } from "react-redux";

const CourseVideoPlayer = () => {
  const location = useLocation();
  const { video } = location.state || {};
  // console.log(video);
  const videoList = useSelector((state) => state.courses.videosList || []);
  console.log(videoList);
  return (
    <div className="w-full bg-gray-100 min-h-screen flex justify-center items-start py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="col-span-4 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full mb-6">
            <iframe
              src={`https://www.youtube.com/embed/${video?.snippet?.resourceId?.videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video rounded-lg"
            ></iframe>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {video?.snippet?.title}
          </h2>
          <p className="text-gray-600">{video?.snippet?.description}</p>
        </div>

        <div className="col-span-4 md:col-span-2 w-full bg-white p-4 md:p-6 rounded-lg shadow-lg overflow-y-auto max-h-[75vh]">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            More Videos
          </h3>
          <div className="flex flex-col gap-4">
            {videoList.length > 0 ? (
              videoList.map((video) => (
                <VideosList key={video.id} video={video} />
              ))
            ) : (
              <p className="text-gray-500">No other videos available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseVideoPlayer;
