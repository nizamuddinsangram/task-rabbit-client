import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import WorkerStates from "./WorkerStates";

const WorkerHome = () => {
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const { data: approved } = useQuery({
    queryKey: ["approved", user?.email],
    queryFn: async () => {
      const { data } = await axiosCommon(`/submissionApprove/${user?.email}`);
      return data;
    },
  });
  console.log(approved);
  return (
    <>
      <WorkerStates />

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center bg-[#005149">
          My Approved Submissions
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-[#005149] text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Task Title</th>
                <th className="px-4 py-2 border border-gray-300">
                  Payable Amount
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  Creator Name
                </th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {approved?.map((submission, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.task_title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.payment_amount}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.creator_name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.status}
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

export default WorkerHome;
