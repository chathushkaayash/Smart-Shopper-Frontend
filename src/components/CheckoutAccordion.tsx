import useProduct from "@/services/Products/useProduct";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import useCartItems from "@/services/Cart/useCartItems";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { CartItem, Supermarket } from "@/services/types";

const CheckoutAccordion = () => {
  const { data: cartItems } = useCartItems();

  // ----------------------------- Grouping Cart Items By Supermarkets -----------------------------
  const cartItemMap: Map<number, CartItem[]> = new Map();

  cartItems?.results.forEach((item) => {
    const supermarketId = item.supermarketItem?.supermarketId;
    if (supermarketId) {
      if (!cartItemMap.has(supermarketId)) {
        cartItemMap.set(supermarketId, []);
      }
      cartItemMap.get(supermarketId)?.push(item);
    }
  });

  // ----------------------------- Fetching Supermarket Data -----------------------------
  const supermarketIds = Array.from(cartItemMap.keys());

  const supermarkets = useSupermarket(supermarketIds);
  const supermarketMap: Map<number, Supermarket> = new Map();
  supermarkets.forEach((supermarket) => {
    if (supermarket.data) {
      supermarketMap.set(supermarket.data.id, supermarket.data);
    }
  });

  return (
    <Accordion allowToggle>
      {Array.from(cartItemMap.keys()).map((i, index) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <HStack as="span" flex="1" textAlign="left">
                    <Text>{supermarketMap.get(i)?.address}</Text>
                    <Image src={supermarketMap.get(i)?.logo} w={"4vw"} />
                  </HStack>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {cartItemMap.get(i)?.map((item, index) => (
                  <ProductAccordionItem key={index} cartItem={item} />
                ))}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CheckoutAccordion;

// ---------------------------------- Product Accordion Item ----------------------------------
interface ProductAccordionItemProps {
  cartItem: CartItem;
}

const ProductAccordionItem = ({ cartItem }: ProductAccordionItemProps) => {
  const product = useProduct([cartItem.supermarketItem?.productId || 0]);

  return (
    <HStack justifyContent="space-between">
      <HStack h="8vh">
        <Image src={product[0].data?.imageUrl} w={"3vw"} />
        <Text>{product[0].data?.name.slice(0, 15)}...</Text>
      </HStack>
      <Box>
        <Text fontWeight={600}>
          Total {(cartItem.supermarketItem?.price || 1) * cartItem.quantity} LKR
        </Text>
      </Box>
    </HStack>
  );
};
