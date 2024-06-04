import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const TopEarners = () => {
  const axiosCommon = useAxiosCommon();
  const { data: topEarners, isLoading } = useQuery({
    queryKey: ["topEarners"],
    queryFn: async () => {
      const { data } = await axiosCommon("/top-earner");
      return data;
    },
  });
  console.log(topEarners);
  if (isLoading) {
    return <p>loading....................</p>;
  }
  return (
    <>
      {/* <section className="bg-white py-12">
        <div className="  mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#005149] mb-4">
              Top Earners
            </h2>
            <p className="text-gray-600 text-lg">
              Meet our top workers who have earned the most coins by completing
              tasks.
            </p>
          </div>
          <div className="flex  flex-wrap justify-center">
            {topEarners.map((earner) => (
              <div key={earner._id} className="w-full md:w-1/3 lg:w-1/4 p-4">
                <div className="border  rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-96 flex flex-col items-center">
                  <div className="w-full h-full flex flex-col">
                    <div className="h-2/3  mb-4 overflow-hidden rounded-lg  border-[#005149]">
                      <img
                        src={earner.image_url}
                        alt={`${earner.name}'s picture`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-1/3 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-[#005149] mb-2">
                        {earner.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{earner.coins} Coins</p>
                      <p className="text-gray-600">
                        Tasks Completed: {earner.tasksCompleted || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="bg-white py-12">
        <div className="mx-auto px-4  text-center sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#005149] mb-4">
              Top Earners
            </h2>
            <p className="text-gray-600 text-lg">
              Meet our top workers who have earned the most coins by completing
              tasks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topEarners.map((earner) => (
              <div key={earner._id} className="p-4">
                <div className="border rounded-lg p-6 text-left hover:shadow-lg transition-transform transform hover:scale-105 hover:border-[#005149] h-96 flex flex-col items-center">
                  <div className="w-full h-full flex flex-col">
                    <div className="h-2/3 mb-4 overflow-hidden rounded-lg border-[#005149]">
                      <img
                        src={earner.image_url}
                        alt={`${earner.name}'s picture`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-1/3 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-[#005149] mb-2">
                        {earner.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{earner.coins} Coins</p>
                      <p className="text-gray-600">
                        Tasks Completed: {earner.tasksCompleted || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopEarners;
// {
//   /* <section className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mb-12">
//             <h2 className="text-4xl font-bold text-[#005149] mb-4">
//               Top Earners
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Meet our top workers who have earned the most coins by completing
//               tasks.
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {topEarners.map((earner) => (
//               <div key={earner._id} className="w-full md:w-1/3 lg:w-1/4 p-4">
//                 <div className="border border-[#005149] rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-96 flex flex-col justify-center">
//                   <img
//                     src={earner.image_url}
//                     alt={`${earner.name}'s picture`}
//                     className="w-full h-24 mx-auto mb-4"
//                   />
//                   <h3 className="text-2xl font-semibold text-[#005149] mb-2">
//                     {earner.name}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{earner.coins} Coins</p>
//                   <p className="text-gray-600">
//                     Tasks Completed: {earner.tasksCompleted || "N/A"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */
// }
