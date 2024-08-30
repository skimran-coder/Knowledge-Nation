import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const updateCourse = async (courseId, updatedData) => {
  const courseRef = doc(db, "courses", courseId);
  try {
    await updateDoc(courseRef, updatedData);
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export default updateCourse
