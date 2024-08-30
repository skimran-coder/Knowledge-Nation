import React, { useState } from "react";
import useCourses from "../../utils/useCourses";
import useDisplayCourses from "../../utils/useDisplayCourses";
import CoursesCard from "./CoursesCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useCourses();
  useDisplayCourses(setCourses);

  console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <CoursesCard course={course} key={course.id}/>
      ))}
    </div>
  );
};

export default Courses;
