// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp98FS_1O_wzlI-UklTQttg5FUWfC9umU",
  authDomain: "knowledge-nation-2d01a.firebaseapp.com",
  projectId: "knowledge-nation-2d01a",
  storageBucket: "knowledge-nation-2d01a.appspot.com",
  messagingSenderId: "1013679011791",
  appId: "1:1013679011791:web:5a9bfaf522c5b9dc5344ba",
  measurementId: "G-GC7C5QY86B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);