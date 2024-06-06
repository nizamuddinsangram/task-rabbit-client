import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const WorkerStates = () => {
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const { data: taskCreatorState = [] } = useQuery({
    queryKey: ["taskState", user?.email],
    queryFn: async () => {
      const taskState = await axiosCommon(`/workerStates?email=${user?.email}`);
      return taskState.data;
    },
  });
  console.log(taskCreatorState);
  return (
    <>
      <div>
        <p>Available Coins: {taskCreatorState.coins}</p>
        <p>Total Submissions: {taskCreatorState.totalSubmission}</p>
        <p>Total Earnings: {taskCreatorState.totalEarning}</p>
      </div>
    </>
  );
};

export default WorkerStates;
