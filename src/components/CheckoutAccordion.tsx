import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import useSupermarket from "@/hooks/useSupermarket";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  supermarketId: number;
}

// ProductAccordionItem function component
interface ProductAccordionItemProps {
  productId: number;
}

const ProductAccordionItem = ({ productId }: ProductAccordionItemProps) => {
  const product = useProduct(productId);
  return (
    <VStack>
      {/* <Text>{product.data?.name}</Text> */}
      <Image src={product.data?.imageUrl} w={"4vw"} />
      <Text>{product.data?.price}</Text>
    </VStack>
  );
};

const CheckoutAccordion = ({ supermarketId }: Props) => {
  const { data: cart } = useCart();
  const supermarket = useSupermarket(supermarketId);
  console.log(supermarket);

  const filteredItems = cart?.results.filter(
    (item) => item.supermarketItem?.supermarketId === supermarketId
  );

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
              <ProductAccordionItem
                key={index}
                productId={item.supermarketItem?.productId || 0}
              />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default CheckoutAccordion;
