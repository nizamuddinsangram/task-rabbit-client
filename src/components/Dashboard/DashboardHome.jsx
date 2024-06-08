import AdminHome from "../../Pages/Dashboard/Admin/AdminHome";
import TaskCreatorHome from "../../Pages/Dashboard/TaskCreator/TaskCreatorHome/TaskCreatorHome";
import WorkerHome from "../../Pages/Dashboard/Worker/WorkerHome";
import useRole from "../../hooks/useRole";

const DashboardHome = () => {
  const [data] = useRole();
  return (
    <div>
      {data?.role === "admin" && <AdminHome />}
      {data?.role === "Worker" && <WorkerHome />}
      {data?.role === "TaskCreator" && <TaskCreatorHome />}
    </div>
  );
};

export default DashboardHome;
