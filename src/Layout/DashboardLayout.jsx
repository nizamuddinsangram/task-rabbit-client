import {
  FaBars,
  FaClipboardList,
  FaHome,
  FaMoneyBillAlt,
  FaTasks,
  FaUserCog,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [data] = useRole();
  const role = data?.role;

  return (
    <>
      <div className="bg-[#005149] py-6 flex items-center justify-between px-4">
        <FaBars size={24} className="text-white lg:hidden cursor-pointer" />
        <NavLink to="/" className="text-white text-2xl font-bold ml-4">
          my website my wish
        </NavLink>
        <p className="text-white text-lg">coins {data?.coins}</p>
      </div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-[#53c7bb]">
          {role === "Worker" && (
            <>
              <NavLink
                className="flex items-center mt-4 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/workerHome"
              >
                <FaHome className="mr-2" />
                Worker Home
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/taskList"
              >
                <FaTasks className="mr-2" />
                TaskList
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/mySubmission"
              >
                <FaClipboardList className="mr-2" />
                My Submission
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/withdrawals"
              >
                <FaMoneyBillAlt className="mr-2" />
                Withdrawals
              </NavLink>
            </>
          )}
          {role === "TaskCreator" && (
            <>
              <NavLink
                className="flex items-center mt-4 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/taskCreator"
              >
                <FaHome className="mr-2" />
                Task Creator Home
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/addNewTask"
              >
                <FaTasks className="mr-2" />
                Add New Tasks
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/myTasks"
              >
                <FaClipboardList className="mr-2" />
                My Tasks
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/purchaseCoin"
              >
                <FaMoneyBillAlt className="mr-2" />
                Purchase Coin
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/paymentHistory"
              >
                <FaMoneyBillAlt className="mr-2" />
                Payment History
              </NavLink>
            </>
          )}
          {role === "admin" && (
            <>
              <NavLink
                className="flex items-center mt-4 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/adminHome"
              >
                <FaHome className="mr-2" />
                Admin Home
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/manageUsers"
              >
                <FaUserCog className="mr-2" />
                Manage Users
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/manageTasks"
              >
                <FaTasks className="mr-2" />
                Manage Tasks
              </NavLink>
            </>
          )}
        </div>
        <div className="flex-1 p-8 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

{
  /* <div className="bg-lime-500 py-6 flex items-center justify-between px-10">
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
      </div> */
}
