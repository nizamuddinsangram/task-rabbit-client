import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHomeStates = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["states"],
    queryFn: async () => {
      const stateData = await axiosSecure(`/admin-stats`);
      console.log(stateData.data);
      return stateData.data;
    },
  });
  console.log(data);

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md w-full mb-6">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "#005149" }}
        >
          Admin Stats
        </h2>
        <div className="flex justify-between">
          <div className="text-center flex-1">
            <h3 className="text-xl font-bold" style={{ color: "#005149" }}>
              {data?.users || 0}
            </h3>
            <p>Total Users</p>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-xl font-bold" style={{ color: "#005149" }}>
              {data?.coins || 0}
            </h3>
            <p>Total Coins</p>
          </div>
          <div className="text-center flex-1">
            <h3 className="text-xl font-bold" style={{ color: "#005149" }}>
              {data?.payment || 0}
            </h3>
            <p>Total Payments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomeStates;
