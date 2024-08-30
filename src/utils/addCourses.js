import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const addCourses = async (course, setErrorMessage) => {
  try {
    await addDoc(collection(db, "courses"), course);
    setErrorMessage("Course added successfully!")
  } catch (e) {
    setErrorMessage("Error adding course: ", e);
  }
};
export default addCourses
