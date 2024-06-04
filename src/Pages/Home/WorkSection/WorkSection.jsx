import register from "../../../assets/coins/register.jpg";
import rewards from "../../../assets/coins/rewardPoint.png";
import tasks from "../../../assets/coins/task.jpg";
const WorkSection = () => {
  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#005149] mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Follow these simple steps to start earning rewards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="border  rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-center">
                <img
                  src={register}
                  alt="Register Icon"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#005149] mb-4">
                  Register
                </h3>
                <p className="text-gray-600">
                  Sign up and create your account to get started.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="border  rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-center">
                <img
                  src={tasks}
                  alt="Complete Tasks Icon"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#005149] mb-4">
                  Complete Tasks
                </h3>
                <p className="text-gray-600">
                  Choose and complete tasks to earn points and rewards.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="border  rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-center">
                <img
                  src={rewards}
                  alt="Earn Rewards Icon"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#005149] mb-4">
                  Earn Rewards
                </h3>
                <p className="text-gray-600">
                  Redeem your points for exciting rewards and benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSection;
