// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eb2d9.firebaseapp.com",
  projectId: "mern-estate-eb2d9",
  storageBucket: "mern-estate-eb2d9.firebasestorage.app",
  messagingSenderId: "629626429518",
  appId: "1:629626429518:web:e806f7adb8116b9b4de31f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
