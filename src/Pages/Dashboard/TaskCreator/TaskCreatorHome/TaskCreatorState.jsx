import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TaskCreatorState = () => {
  const { user } = useAuth();
  // const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const { data: taskStates = [] } = useQuery({
    queryKey: ["task-creator"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/taskCreatorsState?email=${user.email}`
      );
      return data;
    },
  });
  // console.log(taskStates);
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#005149]">
          Task Creator State
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Available Coins
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {taskStates?.coins || 0}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Pending Tasks
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {taskStates?.pendingTasks || 0}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Total Paid</h3>
            <p className="text-3xl font-bold text-purple-600">
              {taskStates?.totalPaid || 0}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCreatorState;
