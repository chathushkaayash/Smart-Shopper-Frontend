import SubmitButton from "@/components/Buttons/SubmitButton";
import useCreateOrderPayment from "@/services/Payments/useCreateOrderPayment";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderPayment = () => {
  const { id } = useParams();
  if (!id) return null;

  const payhereRequest = useCreateOrderPayment(39);

  //submit a form

  if (!payhereRequest.data) return null;

  return (
    <Box bg="background" h="100%" pt={7} pb={10} pl={20} pr={20}>
      <form action="https://sandbox.payhere.lk/pay/checkout" method="post">
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
          type="text"
          name="order_id"
          value={"Order 39"}
        />
        <input type="text" name="items" value={payhereRequest.data.items} />
        <input type="text" name="currency" value={payhereRequest.data.currency} />
        <input type="text" name="amount" value={payhereRequest.data.amount} />

        <input
          type="text"
          name="first_name"
          value={payhereRequest.data.first_name}
        />
        <input
          type="text"
          name="last_name"
          value={payhereRequest.data.last_name}
        />
        <input type="text" name="email" value={payhereRequest.data.email} />
        <input type="text" name="phone" value={payhereRequest.data.phone} />
        <input type="text" name="address" value={payhereRequest.data.address} />
        <input type="text" name="city" value={payhereRequest.data.city} />
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
