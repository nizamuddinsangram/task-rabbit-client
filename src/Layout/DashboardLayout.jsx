import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-lime-500 py-6 flex items-center justify-center">
        <p>my website my wish </p>
      </div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-sky-400">
          <Link className="w-full btn btn-sm mt-4 " to="/dashboard/workerHome">
            Worker Home
          </Link>
          <Link className="w-full btn btn-sm mt-4 " to="/dashboard/taskList">
            TaskList
          </Link>
          <Link
            className="w-full btn btn-sm mt-4 "
            to="/dashboard/mySubmission"
          >
            My Submission
          </Link>
          <Link className="w-full btn btn-sm mt-4 " to="/dashboard/taskCreator">
            Task Creator Home
          </Link>
          <Link className="w-full btn btn-sm mt-4 " to="/dashboard/addNewTask">
            Add New Tasks
          </Link>
          <Link className="w-full btn btn-sm mt-4 " to="/dashboard/myTasks">
            My Tasks
          </Link>
        </div>
        <div className="flex-1 p-8 bg-sky-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
