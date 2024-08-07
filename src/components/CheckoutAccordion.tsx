import useCart from "@/hooks/useCart";
import { CartItem } from "@/hooks/useCartItem";
import useProduct from "@/hooks/useProduct";
import useSupermarket from "@/hooks/useSupermarket";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  supermarketId: number;
}

// ProductAccordionItem function component
interface ProductAccordionItemProps {
  cartItem: CartItem;
}

const ProductAccordionItem = ({ cartItem }: ProductAccordionItemProps) => {
  const product = useProduct(cartItem.supermarketItem?.productId || 0);


  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Image src={product.data?.imageUrl} w={"3vw"} />
        <Text>{product.data?.name.slice(0, 15)}...</Text>
      </HStack>
      <Box>
        <Text fontWeight={600}>
          Total {(cartItem.supermarketItem?.price || 1) * cartItem.quantity} LKR
        </Text>
      </Box>
    </HStack>
  );
};

const CheckoutAccordion = ({ supermarketId }: Props) => {
  const { data: cart } = useCart();
  const supermarket = useSupermarket(supermarketId);

  const filteredItems = cart?.results.filter(
    (item) => item.supermarketItem?.supermarketId === supermarketId
  );

  console.log(filteredItems);

  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <HStack as="span" flex="1" textAlign="left">
                <Text>{supermarket.data?.name}</Text>
                <Image src={supermarket.data?.logo} w={"4vw"} />
              </HStack>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {filteredItems?.map((item, index) => (
              <ProductAccordionItem key={index} cartItem={item} />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default CheckoutAccordion;
