import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return ProtectedRoute;
};

export default ProtectedRoute;
