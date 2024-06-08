import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const WorkerRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  const [data, , isLoading] = useRole();
  const role = data?.role === "Worker";
  if (loading || isLoading) {
    return <p>......loading.........</p>;
  }
  if (user && role) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default WorkerRoute;
