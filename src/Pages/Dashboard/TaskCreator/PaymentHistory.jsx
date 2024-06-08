import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/payment-info/${user?.email}`);
      return data;
    },
  });
  // console.log(payments);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>{payment.name}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
