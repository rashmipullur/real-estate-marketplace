// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8b610.firebaseapp.com",
  projectId: "mern-estate-8b610",
  storageBucket: "mern-estate-8b610.appspot.com",
  messagingSenderId: "993866020855",
  appId: "1:993866020855:web:c3cc7285fa36ea7300a0f2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
