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
import TaskCreatorHome from "../Pages/Dashboard/TaskCreator/TaskCreatorHome";
import MySubmissions from "../Pages/Dashboard/Worker/MySubmissions";
import TaskList from "../Pages/Dashboard/Worker/TaskList";
import WorkerHome from "../Pages/Dashboard/Worker/WorkerHome";
import WorkerTaskDetails from "../Pages/Dashboard/Worker/WorkerTaskDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyTaskUpdate from "../components/Dashboard/TaskCreator/MyTaskUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>oppos this is an error</p>,
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
    element: <DashboardLayout />,
    children: [
      {
        path: "workerHome",
        element: <WorkerHome />,
      },
      {
        path: "taskList",
        element: <TaskList />,
      },
      {
        path: "mySubmission",
        element: <MySubmissions />,
      },
      {
        path: "taskCreator",
        element: <TaskCreatorHome />,
      },
      {
        path: "addNewTask",
        element: <AddNewTasks />,
      },
      {
        path: "myTasks",
        element: <MyTasks />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "manageTasks",
        element: <ManageTask />,
      },
      {
        path: "myTaskUpdate/:taskId",
        element: <MyTaskUpdate />,
      },
      {
        path: "purchaseCoin",
        element: <PurchaseCoin />,
      },
      {
        path: "payment/:amount",
        element: <PaymentPage />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "taskDetails/:taskId",
        element: <WorkerTaskDetails />,
      },
    ],
  },
]);
export default router;
