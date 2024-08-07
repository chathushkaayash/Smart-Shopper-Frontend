import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import AddToCartButton from "@/components/Buttons/AddToCartButton";
import MiddleContainer from "@/components/Containers/MiddleContainer";
import PriceComparison from "@/components/PriceComparison/PriceComparison";
import ProductDescription from "@/components/PriceComparison/ProductDescription";
import useProduct, { Product } from "@/hooks/useProduct";
import useSupermarketItems, {
  SupermarketItem,
} from "@/hooks/useSupermarketItems";
import useCartStore from "@/state-management/cart/store";
import { useQueryClient } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const {
    items: cartItems,
    addItem,
    updateItem,
    removeItem,
    getProductInCart,
  } = useCartStore();
  const queryClient = useQueryClient();

  const { id } = useParams();
  const productId = Number(id);

  if (!productId) return null;

  const product = useProduct(Number(productId));

  const {
    data: supermarketItems,
    isLoading,
    error,
  } = useSupermarketItems(productId);

  const [isLiked, setIsLiked] = useState(false);
  const [selectedSupermarketItem, setSupermarketItem] =
    useState<SupermarketItem | null>(null);

  // Get the cart item that is already added to the cart
  const cartItemInCart = getProductInCart(productId);

  // Check if the product is in the cart but the selected store price is different
  const shouldUpdateCart =
    cartItemInCart &&
    selectedSupermarketItem?.id !== cartItemInCart.supermarketItem?.id;

  useEffect(() => {
    if (supermarketItems?.results) {
      // Find the index of the supermarket item that matches the cart item
      const index = supermarketItems.results.findIndex(
        (i) => i.id === cartItemInCart?.supermarketItem?.id
      );

      // Set the supermarket item based on whether a match was found
      setSupermarketItem(
        index !== -1
          ? supermarketItems.results[index]
          : supermarketItems.results[0]
      );
    }
  }, [supermarketItems?.results, cartItems, cartItemInCart]);

  const handleOnClick = () => {
    if (cartItemInCart?.supermarketItem.id === selectedSupermarketItem?.id) {
      console.log("remove");
      if (cartItemInCart?.id) {
        removeItem(cartItemInCart.id, invalidateQueries);
      }
    } else if (cartItemInCart) {
      console.log("update");
      if (selectedSupermarketItem)
        updateItem(
          {
            id: cartItemInCart.id,
            supermarketItem: selectedSupermarketItem,
            quantity: 1,
          },
          invalidateQueries
        );
    } else {
      console.log("add");
      if (selectedSupermarketItem)
        addItem(
          {
            id: -1,
            supermarketItem: selectedSupermarketItem,
            quantity: 1,
          },
          invalidateQueries
        );
    }
  };

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ["carts"] });
  };

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error</Text>;
  if (!selectedSupermarketItem) return null;

  return (
    <MiddleContainer width="90vw">
      <Box pt="4vh" px="6vw" pos={"relative"}>
        <Flex justifyContent={"space-between"}>
          <HStack>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {product.data?.name}
            </Text>
            <VStack
              px={3}
              py={2}
              as="button"
              color={isLiked ? "red" : "black"}
              onClick={() => setIsLiked(!isLiked)}
              _hover={{ color: "red", transform: "scale(1.10)" }}
            >
              {isLiked ? (
                <FaHeart fontSize={35} />
              ) : (
                <FaRegHeart fontSize={35} />
              )}
            </VStack>
          </HStack>
          <Box mt={5}>
            <AddToCartButton
              text={
                shouldUpdateCart
                  ? "Update the Cart"
                  : cartItemInCart
                  ? "Remove from Cart"
                  : "Add to Cart"
              }
              checked={!!cartItemInCart && !shouldUpdateCart}
              onClick={handleOnClick}
            />
          </Box>
        </Flex>
        <Grid templateColumns="40% 60%" gap={6} mt={4}>
          <GridItem>
            <ProductDescription
              product={product.data || ({} as Product)}
              selectedSupermarketItem={selectedSupermarketItem}
            />
          </GridItem>
          <GridItem ml={2}>
            <PriceComparison
              supermarketItems={supermarketItems?.results || []}
              selectedSupermarketItem={selectedSupermarketItem}
              setSupermarketItem={setSupermarketItem}
            />
          </GridItem>
        </Grid>
      </Box>
    </MiddleContainer>
  );
};

export default ViewProduct;
