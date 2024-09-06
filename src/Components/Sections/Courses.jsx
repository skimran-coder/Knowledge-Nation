import React from "react";
import useCourses from "../../utils/useCourses";
import useDisplayCourses from "../../utils/useDisplayCourses";
import CoursesCard from "./CoursesCard";
import { useSelector } from "react-redux";
import Underline from "../DesignElement/Underline";

const Courses = () => {
  useCourses();
  useDisplayCourses();

  const courses = useSelector((state) => state.courses.courseData);

  return (

    <div className="w-screen bg-gray-50">
      <div className="w-3/4 min-h-[75vh] mx-auto py-12" id="courses">

<div className="flex items-center flex-col mb-8">
<h1 className=" text-4xl lg:text-5xl font-extrabold text-gray-800">Our Courses</h1>
<Underline bgColor={"bg-myGreen"}/>
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
    </div>
  );
};

export default Courses;
