import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const ManageUsers = () => {
  const axiosCommon = useAxiosCommon();
  const { data: managesUsers, refetch } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/worker`);
      return data;
    },
  });
  const handleRemoveUser = async (id) => {
    console.log("remove user", id);
    const { data } = await axiosCommon.delete(`/worker/${id}`);
    console.log(data);
    if (data.deletedCount > 0) {
      toast.success("delete user");
      refetch();
    }
  };
  // const handleRoleChange = () => {
  //   console.log("role change");
  // };
  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Manage Users
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Display Name
                </th>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Photo
                </th>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Coins
                </th>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {managesUsers?.map((user) => (
                <tr key={user._id} className="bg-white odd:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                    <img
                      src={user.image_url}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                    <select
                      // value={user.role}
                      // onChange={(e) => handleRoleChange(user._id, e)}
                      className="border rounded p-2 text-gray-700 bg-white"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Task-Creator">Task-Creator</option>
                      <option value="Worker">Worker</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                    {user.coins}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-200"
                      onClick={() => handleRemoveUser(user._id)}
                    >
                      Remove
                    </button>
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

export default ManageUsers;
