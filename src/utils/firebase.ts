// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7b112.firebaseapp.com",
  projectId: "mern-blog-7b112",
  storageBucket: "mern-blog-7b112.appspot.com",
  messagingSenderId: "153836343823",
  appId: "1:153836343823:web:9ae1e03301aa6ae64bc97a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
