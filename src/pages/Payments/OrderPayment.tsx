import SubmitButton from "@/components/Buttons/SubmitButton";
import useCreateOrderPayment from "@/services/Payments/useCreateOrderPayment";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderPayment = () => {
  const { id } = useParams();
  if (!id) return null;

  const formRef = React.useRef<HTMLFormElement>(null);

  const payhereRequest = useCreateOrderPayment(39);

  useEffect(() => {
    if (payhereRequest.isSuccess) {
      console.log(payhereRequest.data);
      formRef.current?.submit();
    }
  }, [payhereRequest.isSuccess]);

  if (!payhereRequest.data) return null;

  return (
    <Box bg="background" h="100%" pt={7} pb={10} pl={20} pr={20}>
      <h1>Order Payment</h1>
      <form
        action="https://sandbox.payhere.lk/pay/checkout"
        method="post"
        ref={formRef}
      >
        <input
          type="hidden"
          name="merchant_id"
          value={payhereRequest.data.merchant_id}
        />

        <input
          type="hidden"
          name="return_url"
          value={payhereRequest.data.return_url}
        />
        {/* <input type="hidden" name="recurrence" value="1 Month" /> */}
        {/* <input type="hidden" name="duration" value="Forever" /> */}
        <input
          type="hidden"
          name="cancel_url"
          value={payhereRequest.data.cancel_url}
        />
        <input
          type="hidden"
          name="notify_url"
          value={payhereRequest.data.notify_url}
        />

        <input
          type="hidden"
          name="order_id"
          value={payhereRequest.data.order_id}
        />
        <input type="hidden" name="items" value={payhereRequest.data.items} />
        <input
          type="hidden"
          name="currency"
          value={payhereRequest.data.currency}
        />
        <input type="hidden" name="amount" value={payhereRequest.data.amount} />

        <input
          type="hidden"
          name="first_name"
          value={payhereRequest.data.first_name}
        />
        <input
          type="hidden"
          name="last_name"
          value={payhereRequest.data.last_name}
        />
        <input type="hidden" name="email" value={payhereRequest.data.email} />
        <input type="hidden" name="phone" value={payhereRequest.data.phone} />
        <input
          type="hidden"
          name="address"
          value={payhereRequest.data.address}
        />
        <input type="hidden" name="city" value={payhereRequest.data.city} />
        <input
          type="hidden"
          name="country"
          value={payhereRequest.data.country}
        />
        <input type="hidden" name="hash" value={payhereRequest.data.hash} />
        <SubmitButton>Pay Now</SubmitButton>
      </form>
    </Box>
  );
};

export default OrderPayment;
