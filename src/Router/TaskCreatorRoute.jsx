import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const TaskCreatorRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [data, , isLoading] = useRole();
  console.log(data);
  const role = data?.role === "TaskCreator";
  console.log("TaskCreator role", role);
  if (loading || isLoading) {
    return <p>......loading.....</p>;
  }
  if (user && role) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default TaskCreatorRoute;
