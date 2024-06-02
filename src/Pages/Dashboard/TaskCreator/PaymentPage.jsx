import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NI23TLZZKlHS9d2vef5smo4WlrVHMn3HLpNlLMAHjW7Kn4vqCLdAE2ftT8CnwITaOaBsNQfEBCmanZIdsnhSml500ZS0YabYr"
);

const PaymentPage = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;
