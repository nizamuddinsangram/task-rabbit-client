import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import TaskListCard from "../../../components/Dashboard/WorkerC/TaskListCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TaskList = () => {
  // const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const {
    data: taskList,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["taskList"],

    queryFn: async () => {
      const { data } = await axiosSecure(`/tasks`);
      return data;
    },
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  // console.log(taskList);
  return (
    <>
      <Helmet>
        <title>Task Rabbit || Task List</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 md:grid-cols-1">
        {taskList?.map((task) => (
          <TaskListCard task={task} key={task._id} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
