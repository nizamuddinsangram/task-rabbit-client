import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaClipboardList,
  FaHome,
  FaMoneyBillAlt,
  FaTasks,
  FaUserCog,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import NotificationPopup from "../components/Dashboard/NotificationPopup";
import useAuth from "../hooks/useAuth";
import useAxiosCommon from "../hooks/useAxiosCommon";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to manage sidebar visibility
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const [data] = useRole();
  const role = data?.role;

  const handleNotifications = async () => {
    const { data } = await axiosCommon(`/notifications/${user?.email}`);
    setNotifications(data);
    setShowNotificationPopup(true);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="bg-[#005149] py-6 flex items-center justify-between px-4">
        <div className="flex items-center">
          <FaBars
            size={24}
            className="text-white lg:hidden cursor-pointer"
            onClick={toggleSidebar} // Toggle sidebar on click
          />
          <NavLink to="/" className="text-white text-2xl font-bold ml-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FF6347] to-[#FFBF00]">
              TASKRABBIT
            </span>
          </NavLink>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center text-white mr-4">
            <div className="flex justify-between items-center">
              <div className="text-center flex">
                <p>
                  {role} | {user?.displayName}
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="text-lg">Coins {data?.coins}</p>
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 mx-2 rounded-full"
                />
              )}
            </div>
          </div>

          <div className="flex items-center">
            <FaBell
              size={24}
              className="text-white cursor-pointer ml-4"
              onClick={handleNotifications}
            />
          </div>

          {showNotificationPopup && (
            <NotificationPopup
              notifications={notifications}
              onClose={() => setShowNotificationPopup(false)}
            />
          )}
        </div>
      </div>
      <div className="flex">
        <div
          className={`w-64 min-h-screen bg-[#53c7bb] lg:block ${
            isSidebarVisible ? "block" : "hidden"
          }`}
        >
          {role === "Worker" && (
            <>
              <NavLink
                className="flex items-center mt-4 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard"
              >
                <FaHome className="mr-2" />
                Worker Home
              </NavLink>
              <NavLink
                className="flex items-center mt-2 text-white no-underline text-lg py-2 pl-4"
                to="/dashboard/taskList"
              >
                <FaTasks className="mr-2" />
                Task List
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
                to="/dashboard"
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
                to="/dashboard"
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
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
