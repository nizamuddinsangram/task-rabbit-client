import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../../../../components/Dashboard/TaskCreator/Modal";
import useAuth from "../../../../hooks/useAuth";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import TaskCreatorState from "./TaskCreatorState";

const TaskCreatorHome = () => {
  const { user, loading } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const {
    data: taskReviews = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["taskReview"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/pendingSubmissions/${user?.email}`);
      console.log(data);
      return data;
    },
  });
  // console.log("task creation home", taskReviews);

  const handleApprove = async (
    id,
    payment_amount,
    worker_email,
    task_title,
    task_creator_name
  ) => {
    console.log(
      id,
      payment_amount,
      worker_email,
      task_title,
      task_creator_name
    );
    const approveData = {
      status: "approve",
      payment_amount,
      worker_email,
      task_title,
      task_creator_name,
    };
    try {
      const approve = await axiosCommon.patch(`/approve/${id}`, approveData);
      // console.log(approve.data);
      if (approve.data.modifiedCount > 0) {
        refetch();
        toast.success("status will be updated");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleReject = async (id) => {
    // console.log("reject");
    const { data } = await axiosCommon.patch(`/approve/${id}`, {
      status: "reject",
    });
    // console.log(data);
    if (data.modifiedCount > 0) {
      refetch();
      toast.success("reject the request");
    }
  };
  if (isLoading || loading) {
    return <p>alhamdulillah </p>;
  }
  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <TaskCreatorState />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-[#005149]">
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
                  <td className="px-4 py-2 border border-gray-300 text-center text-blue-500">
                    <button
                      onClick={() => openModal(submission)}
                      className="hover:underline"
                    >
                      Submission Details
                    </button>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.status === "pending" && (
                      <div className="flex justify-center space-x-2">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-full"
                          onClick={() =>
                            handleApprove(
                              submission._id,
                              submission.payment_amount,
                              submission.workerInfo.worker_email,
                              submission.task_title,
                              submission.creator_name
                            )
                          }
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
      {isModalOpen && (
        <Modal onClose={closeModal} submission={selectedSubmission} />
      )}
    </>
  );
};

export default TaskCreatorHome;
{
  /* <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-[#005149]">
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
                  <td className="px-4 py-2 border border-gray-300 text-center text-blue-500">
                    <button
                      onClick={() => {
                       
                      }}
                      className="hover:underline"
                    >
                      Submission Details
                    </button>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.status === "pending" && (
                      <div className="flex justify-center space-x-2">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-full"
                          onClick={() =>
                            handleApprove(
                              submission._id,
                              submission.payment_amount,
                              submission.workerInfo.worker_email
                            )
                          }
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
      </div> */
}
