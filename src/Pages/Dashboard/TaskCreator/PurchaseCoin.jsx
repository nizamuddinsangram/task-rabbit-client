import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import coinImage from "../../../assets/coins/coins.jpg";

const PurchaseCoin = () => {
  const purchaseOptions = [
    {
      plan: "Basic",
      coins: 10,
      price: 1,
      description: "Basic plan with essential features.",
    },
    {
      plan: "Standard",
      coins: 100,
      price: 9,
      description: "Standard plan with additional features.",
    },
    {
      plan: "Premium",
      coins: 500,
      price: 19,
      description: "Premium plan with more features.",
    },
    {
      plan: "Pro",
      coins: 1000,
      price: 39,
      description: "Pro plan with all features.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Task Rabbit || Purchase Coin</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {purchaseOptions.map((option) => (
          <div key={option.coins} className="m-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#e0f7f3] text-[#005149] text-center py-4">
                <h3 className="text-2xl font-bold">{option.plan}</h3>
                <div className="flex justify-center items-center my-2">
                  <img src={coinImage} alt="Coin" className="w-8 h-8 mr-2" />
                  <p className="text-lg font-bold text-[#d4af37]">
                    {option.coins} Coins
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 text-center">
                <p className="text-gray-700 mb-4">{option.description}</p>
                <p className="text-2xl font-bold mb-4">${option.price}</p>
                <Link
                  to={`/dashboard/payment/${option.price}`}
                  className="bg-[#005149] hover:bg-[#00382d] text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PurchaseCoin;
