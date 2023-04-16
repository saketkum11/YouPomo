// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtBfFKzZTpa3zomEpF1FTRjcjm8xHJcHo",
  authDomain: "pomodoro-app-75878.firebaseapp.com",
  projectId: "pomodoro-app-75878",
  storageBucket: "pomodoro-app-75878.appspot.com",
  messagingSenderId: "842013451380",
  appId: "1:842013451380:web:28bce274e99926f4bf5d21",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export { fireBaseApp };
