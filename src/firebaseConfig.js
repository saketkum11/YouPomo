import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const authConfigure = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTED,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDID,
  appId: process.env.REACT_APP_FIREBASE_ID,
};

const app = initializeApp(authConfigure);
export const auth = getAuth(app);
export default app;
