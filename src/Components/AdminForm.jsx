import React, { useEffect, useRef, useState } from "react";
import addCourses from "../utils/addCourses";
import { courseValidation } from "../utils/helper";
import { serverTimestamp } from "firebase/firestore";

const AdminForm = () => {
  const [newCourseData, setNewCourseData] = useState({
    courseName: "",
    courseDesc: "",
    courseTags: [],
    playlistId: "",
    createdAt: serverTimestamp(),
  });

  let nameRef = useRef(null);
  let descRef = useRef(null);
  let tagsRef = useRef(null);
  let idRef = useRef(null);
  let passRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  const clickHandler = () =>
    courseValidation(
      nameRef,
      descRef,
      tagsRef,
      idRef,
      passRef,
      setErrorMessage,
      setNewCourseData
    );

  useEffect(() => {
    if (newCourseData.courseName && newCourseData.playlistId) {
      const addCourse = () => {
        addCourses(newCourseData, setErrorMessage);
        nameRef.current.value = "";
        descRef.current.value = "";
        tagsRef.current.value = "";
        idRef.current.value = "";
        passRef.current.value = "";
        setErrorMessage("");
      };

      addCourse();
    }
  }, [newCourseData]);

  return (
    <div className="w-3/4 md:w-2/4 mx-auto my-8 ">
      <h1 className="text-lg font-bold">Add Courses</h1>

      <form
        className="flex flex-col  mx-auto mb-8 mt-4 gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          name="course name"
          className=" p-2 border border-gray-300 rounded"
          ref={nameRef}
          placeholder="Course Name"
          required
        ></input>

        <textarea
          type="text"
          name="description"
          ref={descRef}
          placeholder="Description"
          className=" p-2 border border-gray-300 rounded"
          rows={2}
          required
        ></textarea>

        <input
          type="text"
          name="tags"
          ref={tagsRef}
          placeholder="Tags -- use comma(,) to seperate tags*"
          className=" p-2 border border-gray-300 rounded"
          required
        ></input>

        <input
          type="text"
          name="playlist id"
          ref={idRef}
          className=" p-2 border border-gray-300 rounded"
          placeholder="YouTube Playlist ID"
          required
        ></input>

        <input
          type="password"
          name="password"
          ref={passRef}
          className=" p-2 border border-gray-300 rounded"
          placeholder="Password"
          required
        ></input>
        <span>{errorMessage}</span>

        <button
          onClick={clickHandler}
          className="bg-myGreen text-white p-2 rounded"
        >
          ADD COURSE
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
