import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const WorkerTaskDetails = () => {
  const { user } = useAuth();
  const { taskId } = useParams();
  const axiosCommon = useAxiosCommon();

  const {
    data: task,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["singleTask", taskId],
    queryFn: async () => {
      const { data } = await axiosCommon(`/singleTask/${taskId}`);
      return data;
    },
    enabled: !!taskId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  // console.log(task);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const submission_details = e.target.elements.textarea?.value;
    // console.log(submission_details);
    const taskSubmit = {
      submission_details,
      task_id: task._id,

      task_title: task.task_title,
      task_detail: task.task_detail,
      task_img_url: task.task_image_url,
      payment_amount: task.payable_amount,
      creator_name: task.task_creator.creator_name,
      creator_email: task.task_creator.creator_email,
      current_data: new Date(),
      workerInfo: {
        worker_name: user?.displayName,
        worker_email: user?.email,
      },
      status: "pending",
    };

    // console.log(taskSubmit);
    try {
      const submission = await axiosCommon.post("/submission", taskSubmit);
      // console.log(submission.data);
      if (submission.data.insertedId) {
        toast.success("Add a new submission");
      }
      //   console.log("Submit");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Task Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-xl">
                <strong>Title:</strong> {task.task_title}
              </p>
              <p className="text-xl">
                <strong>Detail:</strong> {task.task_detail}
              </p>
              <p className="text-xl">
                <strong>Payable Amount:</strong> {task.payable_amount}
              </p>
              <p className="text-xl">
                <strong>Creator Name:</strong> {task.task_creator.creator_name}
              </p>
              <p className="text-xl">
                <strong>Creator Email:</strong>{" "}
                {task.task_creator.creator_email}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={task.task_image_url}
                alt={task.task_title}
                className="rounded-lg shadow-md max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmission}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Submit Your Work
          </h2>
          <textarea
            name="textarea"
            placeholder="Enter your submission details here"
            className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default WorkerTaskDetails;

//   const { mutateAsync } = useMutation({
//   //     mutationFn: async (submitData) => {
//   //       const { data } = await axiosCommon.post("/submit", submitData);
//   //       return data;
//   //     },
//   //     onSuccess: () => {
//   //       toast.success("submit my data ");
//   //     },
//   //   });
//   const { mutateAsync } = useMutation({
//     mutationFn: async (submitData) => {
//       const { data } = await axiosCommon.post("/submit", submitData);
//       return data;
//     },
//     onSuccess: () => {
//       toast.success("Submission successful!");
//     },
//     onError: (err) => {
//       toast.error(`Submission failed: ${err.message}`);
//     },
//   });
