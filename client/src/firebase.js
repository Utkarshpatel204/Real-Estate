// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2d8d7.firebaseapp.com",
  projectId: "real-estate-2d8d7",
  storageBucket: "real-estate-2d8d7.appspot.com",
  messagingSenderId: "293270732753",
  appId: "1:293270732753:web:8efbfb65d06097fe6b6af0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);