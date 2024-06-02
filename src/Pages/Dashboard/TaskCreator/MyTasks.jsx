import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import AddNewTasksRow from "../../../components/Dashboard/AddNewTasksRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useRole from "../../../hooks/useRole";

const MyTasks = () => {
  const [, refetchRole] = useRole();

  const { user, loading } = useAuth();
  const axiosCommon = useAxiosCommon();
  const { data: newTasks = [], refetch } = useQuery({
    queryKey: ["addTask", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/tasks/${user?.email}`);
      return data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosCommon.delete(`/tasks/${id}`);
          console.log(data);
          if (data.result.deletedCount > 0) {
            refetch();
            refetchRole();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {newTasks.map((task) => (
            <AddNewTasksRow
              handleDelete={handleDelete}
              key={task._id}
              task={task}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTasks;
