import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NI23TLZZKlHS9d2vef5smo4WlrVHMn3HLpNlLMAHjW7Kn4vqCLdAE2ftT8CnwITaOaBsNQfEBCmanZIdsnhSml500ZS0YabYr"
);

const PaymentPage = () => {
  const { amount } = useParams();
  const numericAmount = parseFloat(amount);

  console.log(numericAmount);
  console.log(typeof numericAmount);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={numericAmount} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
