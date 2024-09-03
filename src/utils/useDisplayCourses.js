import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase";
import { addCourses } from "./courseSlice";
import { useDispatch } from "react-redux";

const useDisplayCourses = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesList = querySnapshot?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(addCourses(coursesList))
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);
};

export default useDisplayCourses;
