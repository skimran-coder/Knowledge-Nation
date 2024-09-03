import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  const courseName = course.courseName;

  return (
    course?.items && (
      <div className="bg-gray-50 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex gap-4 flex-col justify-between ">
        <div className="">
          <img
            src={course?.items[0]?.snippet?.thumbnails?.maxres?.url}
            alt="thumbnail"
            className="w-full"
          />
        </div>
        <div className="pl-2 flex flex-col gap-2">
          <h2 className=" text-lg font-semibold text-gray-800">
            {course?.courseName}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2">
            {course?.courseDesc}
          </p>
          <div className="flex gap-2">
            {course.courseTags
              .filter((tag) => tag.length > 0)
              .map((tag) => (
                <p
                  className="bg-green-200 text-green-700  py-1 px-1 text-xs "
                  key={tag}
                >
                  {tag}
                </p>
              ))}
          </div>
        </div>
        <Link
          to={`/courses/${courseName}`}
          className="bg-myGreen text-white text-sm font-medium py-2 hover:bg-myGreenDarker transition-colors text-center"
        >
          <button className="">View Course</button>
        </Link>
      </div>
    )
  );
};

export default CoursesCard;
