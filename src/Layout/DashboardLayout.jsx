import { Link, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [data, , refetch] = useRole();

  const role = data?.role;
  // console.log("dash board ", role);
  // console.log(data, role);
  return (
    <>
      <div className="bg-lime-500 py-6 flex items-center justify-between px-10">
        <Link to="/">my website my wish </Link>
        <p>coins {data?.coins}</p>
      </div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-sky-400">
          {role === "Worker" && (
            <>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/workerHome"
              >
                Worker Home
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/taskList"
              >
                TaskList
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/mySubmission"
              >
                My Submission
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/withdrawals"
              >
                WithDrawals
              </Link>
            </>
          )}
          {role === "TaskCreator" && (
            <>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/taskCreator"
              >
                Task Creator Home
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/addNewTask"
              >
                Add New Tasks
              </Link>
              <Link className="w-full btn btn-sm mt-4 " to="/dashboard/myTasks">
                My Tasks
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/purchaseCoin"
              >
                Purchase Coin
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/paymentHistory"
              >
                Payment History
              </Link>
            </>
          )}
          {role === "admin" && (
            <>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/adminHome"
              >
                Admin Home
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/manageUsers"
              >
                Manage Users
              </Link>
              <Link
                className="w-full btn btn-sm mt-4 "
                to="/dashboard/manageTasks"
              >
                Manage Tasks
              </Link>
            </>
          )}
        </div>
        <div className="flex-1 p-8 bg-sky-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
