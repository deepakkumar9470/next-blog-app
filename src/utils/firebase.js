// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "next-blog-web-app-2023.firebaseapp.com",
  projectId: "next-blog-web-app-2023",
  storageBucket: "next-blog-web-app-2023.appspot.com",
  messagingSenderId: "545143227973",
  appId: process.env.APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);