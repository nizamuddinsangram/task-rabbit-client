const WorkerHome = () => {
  const submissions = [];
  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          My Approved Submissions
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
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
              {submissions.map((submission) => (
                <tr key={submission._id} className="odd:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.task_title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {submission.payable_amount}
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
