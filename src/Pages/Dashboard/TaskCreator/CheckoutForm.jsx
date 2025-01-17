import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";

const CheckoutForm = ({ amount }) => {
  const [, refetch] = useRole();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  //   const totalPrice = 110;
  //find payment intent when this page loaded
  useEffect(() => {
    if (amount > 0) {
      const getData = async () => {
        const { data } = await axiosSecure.post("/create-payment-intent", {
          price: amount,
        });
        // setClientSecret(data.clientSecret);
        setClientSecret(data.clientSecret);
        // console.log("came from backend", data.clientSecret);
        return data.clientSecret;
      };
      getData();
    }
  }, [axiosSecure, amount]);
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
      // console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    //confirm payment method
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "no email ",
            name: user?.displayName || "no name",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        toast.success("payment successful");
        // console.log("taka keta nise", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        //post request start
        const { data } = await axiosSecure.post("/payment-info", {
          email: user?.email,
          name: user?.displayName,
          amount: amount,
          transactionId: paymentIntent.id,
        });
        if (data.updatedResult.modifiedCount > 0) {
          refetch();
          //   console.log(data.updatedResult.modifiedCount);
        }

        //post request end
      }
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
      <button
        className="btn bg-green-500 text-white btn-sm mt-3"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-400">Your transaction id {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
