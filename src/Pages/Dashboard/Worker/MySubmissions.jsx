import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySubmissions = () => {
  const { user, loading } = useAuth();
  // const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const { data: mySubmissions = [] } = useQuery({
    queryKey: ["my-submissions", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/submission/${user?.email}`);
      return data;
    },
    enabled: !loading || !!user?.email,
  });
  // console.log(mySubmissions);
  return (
    <>
      <Helmet>
        <title>Task Rabbit || My Submissions</title>
      </Helmet>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-[#005149]">
          My Submissions
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-[#005149] text-white">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Task Title</th>
                <th className="px-4 py-2 border border-gray-300">
                  Submission Date
                </th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {mySubmissions?.map((submission, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="px-4 py-2 border border-gray-300 text-black">
                    {submission.task_title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-black">
                    {new Date(submission.current_data).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-black">
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

export default MySubmissions;
