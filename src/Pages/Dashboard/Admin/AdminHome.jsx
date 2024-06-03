import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const AdminHome = () => {
  const axiosCommon = useAxiosCommon();
  const { data: withdrawRequests, refetch } = useQuery({
    queryKey: ["confirmWithdraw"],
    queryFn: async () => {
      const { data } = await axiosCommon("/withDrawConfirmAdmin");
      return data;
    },
  });
  console.log(withdrawRequests);
  const handlePaymentSuccess = async (id) => {
    console.log("payment success", id);
    const { data } = await axiosCommon.delete(`/approveWithdraw/${id}`);
    console.log(data.userCoinsUpdate);
    if (data.userCoinsUpdate.modifiedCount > 0) {
      refetch();
      toast.success("delete data form database and cut coins user ");
    }
  };
  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Withdraw Requests
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Worker Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Withdraw Coin
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Withdraw Amount
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Payment Number
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Payment System
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Withdraw Time
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawRequests?.map((request) => (
                <tr key={request._id} className="odd:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {request.worker_name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {request.withdraw_coin}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {request.withdraw_amount}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {request.payment_number}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {request?.payment_system}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {new Date(request.withdraw_time).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
                      onClick={() => handlePaymentSuccess(request._id)}
                    >
                      Payment Success
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

export default AdminHome;
