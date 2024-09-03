import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    videos: []
  },
  reducers: {
    addCourses: (state, action) => {
      state.videos = action.payload
    }
  },
})

export const { addCourses } = courseSlice.actions

export default courseSlice.reducer