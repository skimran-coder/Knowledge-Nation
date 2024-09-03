import React from "react";
import useCourses from "../../utils/useCourses";
import useDisplayCourses from "../../utils/useDisplayCourses";
import CoursesCard from "./CoursesCard";
import { useSelector } from "react-redux";
import Underline from "../DesignElement/Underline";

const Courses = () => {
  useCourses();
  useDisplayCourses();

  const courses = useSelector((state) => state.courses.videos);

  return (

    <div className="w-3/4 mx-auto my-12" id="courses">

    <div className="flex items-center flex-col mb-8">
    <h1 className="text-4xl font-bold">Our Courses</h1>
    <Underline/>
    <p className="text-gray-600 text-sm">Explore our classes for free.</p>
    </div>
    
    {courses.length > 0 && (

      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 ">
        {courses.map((course) => (
          
            <CoursesCard course={course} key={course.id} />
         
        ))}
      </div>
    )}
      </div>
  );
};

export default Courses;
