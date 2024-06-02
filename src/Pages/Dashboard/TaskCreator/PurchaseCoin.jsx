import { Link } from "react-router-dom";

const PurchaseCoin = () => {
  const purchaseOptions = [
    { coins: 10, price: 1 },
    { coins: 100, price: 9 },
    { coins: 500, price: 19 },
    { coins: 1000, price: 39 },
  ];
  return (
    <div className="grid grid-cols-2  justify-center">
      {purchaseOptions.map((option) => (
        <div key={option.coins} className="m-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{option.coins} Coins</h3>
                <p className="text-lg mb-2">${option.price}</p>
                <Link
                  to={`/payment/${option.price}`}
                  className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseCoin;
