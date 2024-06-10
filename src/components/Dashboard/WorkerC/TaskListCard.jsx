import { FaMoneyBillWave, FaRegCalendarAlt, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskListCard = ({ task }) => {
  // console.log(task);
  return (
    // <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
    //   <figure className="w-full h-48 overflow-hidden">
    //     <img
    //       src={task.image_url}
    //       alt="Task Image"
    //       className="object-cover w-full h-full"
    //     />
    //   </figure>
    //   <div className="p-6">
    //     <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    //       {task.task_creator.creator_name}
    //     </h2>
    //     <div className="flex items-center text-gray-600 mb-2">
    //       <FaRegCalendarAlt className="mr-2" />
    //       <p>{task.completion_date}</p>
    //     </div>
    //     <div className="flex items-center text-gray-600 mb-2">
    //       <FaMoneyBillWave className="mr-2" />
    //       <p>{task.payable_amount}</p>
    //     </div>
    //     <div className="flex items-center text-gray-600 mb-4">
    //       <FaTasks className="mr-2" />
    //       <p>{task.task_quantity}</p>
    //     </div>
    //     <div className="flex justify-end">
    //       <Link
    //         to={`/dashboard/taskDetails/${task._id}`}
    //         className="btn btn-outline bg-slate-100 border-0 border-b-4"
    //         style={{ borderColor: "#005149", color: "#005149" }}
    //       >
    //         View Details
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <figure className="w-full h-48 overflow-hidden">
        <img
          src={task.image_url}
          alt="Task Image"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {task.task_creator.creator_name}
        </h2>
        <div className="flex items-center text-gray-600 mb-2">
          <FaRegCalendarAlt className="mr-2" />
          <p>Completion Date: {task.completion_date}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaMoneyBillWave className="mr-2" />
          <p>Payable Amount: {task.payable_amount}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <FaTasks className="mr-2" />
          <p>Quantity: {task.task_quantity}</p>
        </div>
        <div className="flex justify-center">
          <Link
            to={`/dashboard/taskDetails/${task._id}`}
            className="btn btn-outline bg-slate-100 border-0 border-b-4"
            style={{ borderColor: "#005149", color: "#005149" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskListCard;
