import useCartItems from "@/services/Cart/useCartItems";
import useUpdateCartItems from "@/services/Cart/useUpdateCartItem";
import { Button } from "@chakra-ui/react";

const Test = () => {
  const {data:cartItems} = useCartItems();
  const updateSupermarketItem = useUpdateCartItems();

  

  const handleUpdate = () => {
    updateSupermarketItem.mutate({
      id: 28,
      quantity: 25,
      supermarketitemId: 1,
      productId: 1,
      consumerId: 1,
      orderId: -1,
    });
  };

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      {cartItems?.results.map((cartItem) => (
        <div key={cartItem.id}>{cartItem.id}{cartItem.quantity}</div>
      ))}
      alwef
      {/* <Button onClick={handleClick}>awef</Button> */}
      <Button onClick={handleUpdate}>Update</Button>
    </div>
  );
};

export default Test;
