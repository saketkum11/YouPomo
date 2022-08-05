import axios from "axios";
import { createContext, useContext } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const signUp = async ({ firstName, lastName, email, password }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        firstName,
        lastName,
        password,
      });
      localStorage.setItem("token", response.data.endcodedToken);
    } catch (error) {
      console.error(error);
    }
  };
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.endcodedToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, token, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
