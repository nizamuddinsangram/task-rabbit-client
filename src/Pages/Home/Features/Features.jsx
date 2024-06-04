import coin from "../../../assets/coins/coins.jpg";
import payment from "../../../assets/coins/payment2.avif";
import task from "../../../assets/coins/task-manage.png";
const Features = () => {
  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#005149] mb-4">
              Discover Our Key Features
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the unique features that make our platform stand out and
              help you achieve more efficiently and securely.
            </p>
          </div>
          <div className="flex flex-wrap justify-center ">
            <div className="w-full md:w-1/3 p-4">
              <div className="border  rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-center">
                <img
                  src={coin}
                  alt="Earn Coins Icon"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#005149] mb-4">
                  Earn Coins by Completing Tasks
                </h3>
                <p className="text-gray-600">
                  Accumulate coins by successfully completing various tasks and
                  challenges.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-center">
                <img
                  src={task}
                  alt="Create and Manage Tasks Icon"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#005149] mb-4">
                  Create and Manage Tasks
                </h3>
                <p className="text-gray-600">
                  Effortlessly create and organize tasks to streamline your
                  workflow.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-center">
                <img
                  src={payment}
                  alt="Secure Payments Icon"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#005149] mb-4">
                  Secure Payments
                </h3>
                <p className="text-gray-600">
                  Enjoy peace of mind with our secure payment system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
