import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../../servies/firebase";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
