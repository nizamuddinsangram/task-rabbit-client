import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
// import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useAxiosSecure from "../../../hooks//useAxiosSecure";
const WorkerStates = () => {
  // const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: taskCreatorState = [] } = useQuery({
    queryKey: ["taskState", user?.email],
    queryFn: async () => {
      const taskState = await axiosSecure(`/workerStates?email=${user?.email}`);
      return taskState.data;
    },
  });
  // console.log(taskCreatorState);
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Worker Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Available Coins
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {taskCreatorState.coins}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Total Submissions
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {taskCreatorState.totalSubmission}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Total Earnings
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              {taskCreatorState.totalEarning}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkerStates;
