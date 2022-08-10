import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { setTheUsername } from "npm-install";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = ({ email, password }) => {
    return signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
