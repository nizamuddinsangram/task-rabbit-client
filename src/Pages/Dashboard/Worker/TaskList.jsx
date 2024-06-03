import { useQuery } from "@tanstack/react-query";
import TaskListCard from "../../../components/Dashboard/WorkerC/TaskListCard";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const TaskList = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: taskList,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["taskList"],

    queryFn: async () => {
      const { data } = await axiosCommon(`/tasks`);
      return data;
    },
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  // console.log(taskList);
  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 md:grid-cols-1">
      {taskList?.map((task) => (
        <TaskListCard task={task} key={task._id} />
      ))}
    </div>
  );
};

export default TaskList;
