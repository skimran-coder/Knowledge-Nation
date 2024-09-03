import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './courseSlice';

const appStore = configureStore({
  reducer: {
    courses: courseSlice
  },
})

export default appStore;