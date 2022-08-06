import axios from "axios";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
      toast.success("Successfully Logged in");
      navigate("/dashboard");
      console.log("response from login", response.data);
    } catch (error) {
      console.error(error);
      toast.error(error.errors);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, token, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
