import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../Context/Auth/Auth-Context";
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ pathname: location }} replace></Navigate>
  );
};
export { RequireAuth };
