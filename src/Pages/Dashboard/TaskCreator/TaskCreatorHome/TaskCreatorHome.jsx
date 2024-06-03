import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";

const TaskCreatorHome = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const { data: taskReviews, refetch } = useQuery({
    queryKey: ["taskReview"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/pendingSubmissions/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  console.log("task creation home", taskReviews);

  const handleApprove = () => {
    console.log("approve");
  };
  const handleReject = () => {
    console.log("reject");
  };
  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Submissions to Review
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-300">
                  Worker Name
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  Worker Email
                </th>
                <th className="px-4 py-2 border border-gray-300">Task Title</th>
                <th className="px-4 py-2 border border-gray-300">
                  Payable Amount
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  View Submission
                </th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {taskReviews?.map((submission) => (
                <tr key={submission._id} className="odd:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {submission?.workerInfo?.worker_name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission?.workerInfo?.worker_email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.task_title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.payment_amount}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Submission Details
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.status === "pending" && (
                      <div>
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-full mr-2"
                          onClick={() => handleApprove(submission._id)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full"
                          onClick={() => handleReject(submission._id)}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskCreatorHome;
