import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";

const TaskCreatorState = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const { data: taskStates } = useQuery({
    queryKey: ["task-creator"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/taskCreatorsState?email=${user.email}`
      );
      return data;
    },
  });
  console.log(taskStates);
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

{
  /* <div className="bg-white p-4 rounded-lg shadow-md w-full mb-6">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#005149" }}
        >
          Task Creator State
        </h2>
        <div className="flex justify-between">
          <div className="text-center flex-1">
            <h3 className="text-xl font-bold" style={{ color: "#005149" }}>
              {taskStates?.coins || 0}
            </h3>
            <p>Coins</p>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-xl font-bold" style={{ color: "#005149" }}>
              {taskStates?.pendingTasks || 0}
            </h3>
            <p>Pending Tasks</p>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-xl font-bold" style={{ color: "#005149" }}>
              {taskStates?.totalPaid || 0}
            </h3>
            <p>Total Paid</p>
          </div>
        </div>
      </div> */
}
