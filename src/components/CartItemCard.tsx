import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import useCartStore, { CartItem } from "@/state-management/cart/store";
import QuantityChanger from "./QuantityChanger";
import { useNavigate } from "react-router-dom";
import useProduct from "@/hooks/useProduct";
import useSupermarket from "@/hooks/useSupermarket";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const navigate = useNavigate();
  const removeItem = useCartStore((state) => state.removeItem);

  if (!cartItem) return null;
  const product = useProduct(cartItem.supermarketItem?.productId || 0);
  const supermarket = useSupermarket(
    cartItem.supermarketItem?.supermarketId || 0
  );

  return (
    <Card
      overflow="hidden"
      variant="outline"
      borderColor="gray.200"
      w="full"
      p={4}
    >
      <Grid
        templateColumns={{ base: "1fr", sm: "auto 1fr auto auto" }}
        gap={4}
        alignItems="center"
      >
        <GridItem>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={product.data?.imageUrl}
            alt={product.data?.name}
          />
        </GridItem>
        <GridItem>
          <Box p={2}>
            <Heading size="md">{product.data?.name}</Heading>
            <Image
              py={1}
              h={10}
              objectFit="cover"
              src={supermarket.data?.logo}
              alt="Dan Abramov"
            />
            <Text
              fontSize="sm"
              fontWeight={600}
              color="primary"
              onClick={() => navigate("/products/" + product.data?.id)}
              cursor="pointer"
            >
              Change Supermarket
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <QuantityChanger cartItem={cartItem} />
        </GridItem>
        <GridItem>
          <DeleteIcon
            onClick={() => removeItem(product.data?.id || -1)}
            cursor="pointer"
            boxSize={6}
            _hover={{ color: "red.600" }}
          />
        </GridItem>
      </Grid>
    </Card>
  );
};

export default CartItemCard;
