import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHoYK4jty57EiO28XjmlquUMKxQ1x-wI",
  authDomain: "auth-development-8931e.firebaseapp.com",
  projectId: "auth-development-8931e",
  storageBucket: "auth-development-8931e.appspot.com",
  messagingSenderId: "579710342564",
  appId: "1:579710342564:web:6d2864197e7288f986dd31",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
