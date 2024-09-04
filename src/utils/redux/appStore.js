// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Local storage for persistence
import courseSlice from './courseSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, courseSlice);

const appStore = configureStore({
  reducer: {
    courses: persistedReducer,
  },
});

export const persistor = persistStore(appStore);
export default appStore;
