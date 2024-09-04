import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courseData: [],
    videosList: [],
  },
  reducers: {
    addCourses: (state, action) => {
      state.courseData = action.payload;
    },
    addVideoList: (state, action) => {
      state.videosList = action.payload;
    },
  },
});

export const { addCourses, addVideoList } = courseSlice.actions;

export default courseSlice.reducer;
