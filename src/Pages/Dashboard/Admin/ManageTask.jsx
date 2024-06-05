import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const ManageTask = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const axiosCommon = useAxiosCommon();
  const { data: taskManages } = useQuery({
    queryKey: ["manageTask"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/adminTasks`);
      return data;
    },
  });
  const handleDeleteTask = () => {
    console.log("deleteTask");
  };
  console.log(taskManages);
  const handleViewTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <>
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
                  <td className="py-2 px-4 border-b border-gray-200">
                    {task.task_title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {task.task_creator.creator_name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {task.task_quantity}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {task.payable_amount}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {task.task_quantity ? "Yes" : "No"}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                    <button
                      className="text-[#005149] mr-3 hover:text-[#004538]"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for viewing task details */}
        {selectedTask && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
              <h2 className="text-2xl mb-4 text-[#005149]">
                {selectedTask.task_title}
              </h2>
              <p>
                <strong>Task Creator Name:</strong>{" "}
                {selectedTask.task_creator.creator_name}
              </p>
              <p>
                <strong>Task Quantity:</strong> {selectedTask.task_quantity}
              </p>
              <p>
                <strong>Coin Needed:</strong> {selectedTask.payable_amount}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                {selectedTask.task_quantity ? "Yes" : "No"}
              </p>
              <button
                className="mt-6 py-2 px-4 bg-[#005149] text-white rounded hover:bg-[#004538]"
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
