import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase";

const useDisplayCourses = (setCourses) => {
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        // console.log(querySnapshot);
        const coursesList = querySnapshot?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(coursesList);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);
};

export default useDisplayCourses;
