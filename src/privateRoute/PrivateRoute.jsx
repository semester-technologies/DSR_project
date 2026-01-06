import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;