import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosCommon = useAxiosCommon();
  const totalPrice = 100;
  //find payment intent when this page loaded
  useEffect(() => {
    if (totalPrice > 0) {
      const getData = async () => {
        const { data } = await axiosCommon.post("/create-payment-intent", {
          price: totalPrice,
        });
        // setClientSecret(data.clientSecret);
        console.log("came from backend", data.clientSecret);
        return data.clientSecret;
      };
      getData();
    }
  }, [axiosCommon]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
