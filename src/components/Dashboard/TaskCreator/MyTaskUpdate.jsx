import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const MyTaskUpdate = () => {
  const axiosCommon = useAxiosCommon();
  const { taskId } = useParams();
  const { data: task, refetch } = useQuery({
    queryKey: ["taskUpdate", taskId],
    queryFn: async () => {
      const { data } = await axiosCommon(`/singleTask/${taskId}`);
      return data;
    },
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const task_title = form.title.value;
    const submission_info = form.description.value;

    const updatedTask = {
      task_title,
      submission_info,
    };
    try {
      const { data } = await axiosCommon.patch(`/tasks/${taskId}`, updatedTask);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("updated successfully");
        refetch();
        console.log("Task updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form
        onSubmit={handleUpdate}
        className="max-w-md mx-auto mt-8 p-6 rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4">Update Task</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={task?.task_title}
            className="w-full px-3 py-2 border rounded-md text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            defaultValue={task?.submission_info}
            className="w-full px-3 py-2 border rounded-md text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Task
        </button>
      </form>
    </>
  );
};

export default MyTaskUpdate;
