import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageTask from "../Pages/Dashboard/Admin/ManageTask";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AddNewTasks from "../Pages/Dashboard/TaskCreator/AddNewTasks";
import MyTasks from "../Pages/Dashboard/TaskCreator/MyTasks";
import PaymentHistory from "../Pages/Dashboard/TaskCreator/PaymentHistory";
import PaymentPage from "../Pages/Dashboard/TaskCreator/PaymentPage";
import PurchaseCoin from "../Pages/Dashboard/TaskCreator/PurchaseCoin";
import TaskCreatorHome from "../Pages/Dashboard/TaskCreator/TaskCreatorHome/TaskCreatorHome";
import MySubmissions from "../Pages/Dashboard/Worker/MySubmissions";
import TaskList from "../Pages/Dashboard/Worker/TaskList";
import Withdrawals from "../Pages/Dashboard/Worker/Withdrawals";
import WorkerHome from "../Pages/Dashboard/Worker/WorkerHome";
import WorkerTaskDetails from "../Pages/Dashboard/Worker/WorkerTaskDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardHome from "../components/Dashboard/DashboardHome";
import MyTaskUpdate from "../components/Dashboard/TaskCreator/MyTaskUpdate";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PribateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "workerHome",
        element: (
          <PrivateRoute>
            <WorkerHome />
          </PrivateRoute>
        ),
      },
      {
        index: true,
        element: <DashboardHome />,
      },
      // {
      //   index: true,
      //   element: (
      //     <PrivateRoute>
      //       <WorkerHome />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "taskList",
        element: (
          <PrivateRoute>
            <TaskList />
          </PrivateRoute>
        ),
      },
      {
        path: "mySubmission",
        element: (
          <PrivateRoute>
            <MySubmissions />
          </PrivateRoute>
        ),
      },
      {
        path: "taskCreator",
        element: (
          <PrivateRoute>
            <TaskCreatorHome />
          </PrivateRoute>
        ),
      },
      {
        path: "addNewTask",
        element: (
          <PrivateRoute>
            <AddNewTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "myTasks",
        element: (
          <PrivateRoute>
            <MyTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // {
      //   index: true,
      //   element: (
      //     <PrivateRoute>
      //       <AdminRoute>
      //         <AdminHome />
      //       </AdminRoute>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageTasks",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageTask />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myTaskUpdate/:taskId",
        element: (
          <PrivateRoute>
            <MyTaskUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "purchaseCoin",
        element: (
          <PrivateRoute>
            <PurchaseCoin />
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:amount",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "taskDetails/:taskId",
        element: (
          <PrivateRoute>
            <WorkerTaskDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "withdrawals",
        element: (
          <PrivateRoute>
            <Withdrawals />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
