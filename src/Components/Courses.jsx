import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesList = querySnapshot.docs.map(doc => doc.data());
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
