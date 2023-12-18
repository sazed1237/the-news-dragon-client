// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKYNpfNPTK4ta1x665q3QQCnxsqO1T6jc",
  authDomain: "the-news-dragon-d6af1.firebaseapp.com",
  projectId: "the-news-dragon-d6af1",
  storageBucket: "the-news-dragon-d6af1.appspot.com",
  messagingSenderId: "692489226685",
  appId: "1:692489226685:web:638a6b0193852069ebaad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;