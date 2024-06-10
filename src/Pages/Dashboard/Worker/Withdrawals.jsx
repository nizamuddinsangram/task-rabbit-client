import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";

const Withdrawals = () => {
  const { user } = useAuth();
  // const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure;
  const [coinsToWithdraw, setCoinsToWithdraw] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [data, refetch] = useRole();

  const maxWithdrawAmount = data ? (data?.coins / 20).toFixed(2) : 0;
  //   console.log(maxWithdrawAmount);
  const handleWithdrawal = async (e) => {
    e.preventDefault();
    const form = e.target;
    const withdraw_coin = parseInt(form.coinsToWithdraw.value);
    const withdraw_amount = parseFloat((withdraw_coin / 20).toFixed(2));
    const payment_system = form.paymentSystem.value;
    const payment_number = form.accountNumber.value;
    if (withdraw_coin > data.coins) {
      toast.error("you have in supicient coins");
      return;
    }
    //send data to server
    const withdrawalDollars = {
      payment_number,
      worker_email: user?.email,
      worker_name: user?.displayName,
      withdraw_coin: withdraw_coin,
      withdraw_amount: withdraw_amount,
      payment_system: payment_system,
      withdraw_time: new Date(),
    };
    // console.log(withdrawalDollars);
    const withdraw = await axiosSecure.post("/withdraw", withdrawalDollars);
    // console.log(withdraw.data);
    if (withdraw.data.withdraw.insertedId) {
      toast.success("please wait for admin confirmation");
      refetch();
    }
  };
  const handleCoinsChange = (e) => {
    const coins = parseInt(e.target.value);
    setCoinsToWithdraw(coins);
    setWithdrawAmount((coins / 20).toFixed(2));
  };
  return (
    <>
      <Helmet>
        <title>Task Rabbit || Withdraw </title>
      </Helmet>
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Maximum Withdrawal Amount: ${maxWithdrawAmount}
          </h2>
          <form
            onSubmit={handleWithdrawal}
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Withdraw Form
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Coins to Withdraw
              </label>
              <input
                type="number"
                name="coinsToWithdraw"
                value={coinsToWithdraw}
                onChange={handleCoinsChange}
                className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Withdrawal Amount ($)
              </label>
              <input
                type="number"
                name="withdrawAmount"
                value={withdrawAmount}
                className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Select Payment System
              </label>
              <select
                name="paymentSystem"
                className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="Bkash">Bkash</option>
                <option value="Rocket">Rocket</option>
                <option value="Nagad">Nagad</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Withdraw
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Withdrawals;

// <div className="container mx-auto p-6">
//   <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
//     <h2 className="text-3xl font-bold mb-6 text-gray-800">
//       Maximum Withdrawal Amount: ${maxWithdrawAmount}
//     </h2>
//     <form
//       onSubmit={handleWithdrawal}
//       className="bg-white shadow-lg rounded-lg p-8"
//     >
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">
//         Withdraw Form
//       </h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2">
//           Coins to Withdraw
//         </label>
//         <input
//           type="number"
//           name="coinsToWithdraw"
//           className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2">
//           Withdrawal Amount ($)
//         </label>
//         <input
//           type="number"
//           name="withdrawAmount"
//           defaultValue={withdraw_amount}
//           className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           readOnly
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2">
//           Select Payment System
//         </label>
//         <select
//           name="paymentSystem"
//           className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         >
//           <option value="Bkash">Bkash</option>
//           <option value="Rocket">Rocket</option>
//           <option value="Nagad">Nagad</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-2">
//           Account Number
//         </label>
//         <input
//           type="text"
//           name="accountNumber"
//           className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//       >
//         Withdraw
//       </button>
//     </form>
//   </div>
// </div>
