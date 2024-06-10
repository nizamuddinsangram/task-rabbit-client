import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageTask = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedTask, setSelectedTask] = useState(null);

  // const axiosCommon = useAxiosCommon();
  const { data: taskManages, refetch } = useQuery({
    queryKey: ["manageTask"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/adminTasks`);
      return data;
    },
  });
  const handleDeleteTask = async (id) => {
    try {
      const res = await axiosSecure(`/adminTasksDelete/${id}`);
      if (res.data.deletedCount) {
        refetch();
        toast.success("task deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(taskManages);
  const handleViewTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <>
      <Helmet>
        <title>Task-Rabbit || Manage Task</title>
      </Helmet>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-[#005149]">Manage Tasks</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                  Task Title
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                  Task Creator Name
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                  Task Quantity
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                  Coin Needed
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                  Availability
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {taskManages?.map((task) => (
                <tr key={task._id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b border-gray-200">
                    {task.task_title}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    {task.task_creator.creator_name}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    {task.task_quantity}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    {parseFloat(task?.payable_amount) *
                      parseFloat(task?.task_quantity)}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    {task.task_quantity ? "Yes" : "No"}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <button
                        className="text-[#005149] hover:text-[#004538]"
                        onClick={() => handleViewTask(task)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteTask(task._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedTask && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-auto shadow-lg">
              <h2 className="text-2xl mb-4 text-[#005149] font-bold font-serif">
                {selectedTask.task_title}
              </h2>
              <p className="font-sans text-gray-700">
                <strong className="font-semibold">Task Creator Name:</strong>{" "}
                {selectedTask.task_creator.creator_name}
              </p>
              <p className="font-sans text-gray-700">
                <strong className="font-semibold">Task Quantity:</strong>{" "}
                {selectedTask.task_quantity}
              </p>
              <p className="font-sans text-gray-700">
                <strong className="font-semibold">Coin Needed:</strong>{" "}
                {selectedTask
                  ? selectedTask.payable_amount * selectedTask.task_quantity
                  : ""}
              </p>
              <p className="font-sans text-gray-700">
                <strong className="font-semibold">Availability:</strong>{" "}
                {selectedTask.task_quantity ? "True" : "False"}
              </p>
              <button
                className="mt-6 py-2 px-4 bg-[#005149] text-white rounded hover:bg-[#004538] font-medium"
                onClick={() => setSelectedTask(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageTask;
