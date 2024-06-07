import toast from "react-hot-toast";
import { imageUpload } from "../../../../public/utils";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useRole from "../../../hooks/useRole";

const AddNewTasks = () => {
  const [data, refetch] = useRole();
  console.log("add new taska component", data.coins);
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.task_image_url.files[0];
    const task_title = form.task_title.value;
    const task_detail = form.task_detail.value;
    const task_quantity = Number(form.task_quantity.value);
    const payable_amount = Number(form.payable_amount.value);
    const completion_date = form.completion_date.value;
    const submission_info = form.submission_info.value;
    const task_creator = {
      creator_email: user?.email,
      creator_name: user?.displayName,
      current_time: new Date().toISOString(),
    };
    // total cost calculate and throw a message to the user
    const total_cost = parseFloat(task_quantity * payable_amount);
    console.log(typeof total_cost);
    if (total_cost > data?.coins) {
      toast.error("Not available Coin. Purchase Coin ");
      return;
    }

    try {
      const image_url = await imageUpload(image);
      const addTasks = {
        task_title,
        task_detail,
        task_quantity,
        payable_amount,
        completion_date,
        submission_info,
        task_creator,
        image_url,
        total_cost,
      };
      //test code
      const test = await axiosCommon.post(`/tasks/${user?.email}`, addTasks);
      if (test.data.insertDoc.insertedId) {
        refetch();
        toast.success("added successfully");
      }
      console.log(test.data.insertDoc.insertedId);
      //post tasks data to the server
      // const { data } = await axiosCommon.post(`/tasks`, addTasks);
      // console.log(data);
      // //reduce coins for database
      // const reduce_coins = await axiosCommon.patch(
      //   `/user/reduce-coins/${user?.email}`,
      //   { total_cost }
      // );
      // console.log(reduce_coins.data, "reduce-coins");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg lg:max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#005149]">
          Add New Task
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Title:
          </label>
          <input
            type="text"
            name="task_title"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Detail:
          </label>
          <textarea
            name="task_detail"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Quantity:
          </label>
          <input
            type="number"
            name="task_quantity"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Payable Amount:
          </label>
          <input
            type="number"
            name="payable_amount"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Completion Date:
          </label>
          <input
            type="date"
            name="completion_date"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Submission Info:
          </label>
          <textarea
            name="submission_info"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Image URL:
          </label>
          <input
            type="file"
            name="task_image_url"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-[#005149] hover:bg-[#003f3a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewTasks;
{
  /* <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Task</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Title:
          </label>
          <input
            type="text"
            name="task_title"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Detail:
          </label>
          <textarea
            name="task_detail"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Quantity:
          </label>
          <input
            type="number"
            name="task_quantity"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Payable Amount:
          </label>
          <input
            type="number"
            name="payable_amount"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Completion Date:
          </label>
          <input
            type="date"
            name="completion_date"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Submission Info:
          </label>
          <textarea
            name="submission_info"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task Image URL:
          </label>
          <input
            type="file"
            name="task_image_url"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Task
          </button>
        </div>
      </form> */
}
