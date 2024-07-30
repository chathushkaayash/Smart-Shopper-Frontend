import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import MiddleContainer from "@/components/Containers/MiddleContainer";
import usePriceLists, { SupermarketItem } from "@/hooks/usePriceLists";
import useProduct, { Product } from "@/hooks/useProduct";
import useCartStore, { CartItem } from "@/state-management/cart/store";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import ProductDescription from "@/components/PriceComparison/ProductDescription";
import PriceComparison from "@/components/PriceComparison/PriceComparison";
import APIClient from "@/services/api-client";
import { useQueryClient } from "@tanstack/react-query";

const apiClient = new APIClient<CartItem>("/carts");

const ProductDetail = () => {
  const { items: cartItems } = useCartStore();
  const queryClient = useQueryClient();

  const { id } = useParams();
  if (!id) return null;

  const product = useProduct(Number(id));

  const {
    data: priceLists,
    isLoading,
    error,
  } = usePriceLists({ productId: id });

  const [isLiked, setIsLiked] = useState(false);
  const [selectedSupermarketItem, setSupermarketItem] =
    useState<SupermarketItem | null>(null);

  useEffect(() => {
    if (priceLists && cartItems) {
      // find the index of the priceLists that matches
      const index = priceLists.results.findIndex(
        (i) => i.id === cartItemInCart?.supermarketItem?.id
      );

      if (index !== -1) {
        setSupermarketItem(priceLists.results[index]);
      } else {
        // if the product is not in the cart, select the first price list
        setSupermarketItem(priceLists.results[0]);
      }
    }
  }, [priceLists?.results && cartItems]);

  // get the the cart Item that is already added to the cart
  const cartItemInCart = cartItems.find(
    (i) => i.supermarketItem?.productId === Number(id)
  );

  // check if the product is in the cart but selected store price are different
  const shouldUpdateCart =
    cartItemInCart &&
    selectedSupermarketItem?.id !== cartItemInCart.supermarketItem?.id;

  const addCartItem = (item: CartItem) => {
    apiClient
      .create(item)
      .then(() => queryClient.invalidateQueries({ queryKey: ["carts"] }));
  };

  const removeCartItem = (item: CartItem) => {
    if (item.id)
      apiClient
        .delete(item.id)
        .then(() => queryClient.invalidateQueries({ queryKey: ["carts"] }));
  };

  const updateCartItem = (carItemInCart: CartItem, item: SupermarketItem) => {
    if (item.id)
      apiClient
        .create({
          id: carItemInCart.id,
          supermarketItem: selectedSupermarketItem,
          quantity: 1,
        })
        .then(() => queryClient.invalidateQueries({ queryKey: ["carts"] }));
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
              onClick={() => {
                if (shouldUpdateCart) {
                  updateCartItem(cartItemInCart, selectedSupermarketItem);
                } else {
                  if (cartItemInCart) {
                    removeCartItem(cartItemInCart);
                    priceLists && setSupermarketItem(priceLists.results[0]);
                  } else {
                    selectedSupermarketItem &&
                      addCartItem({
                        supermarketItem: selectedSupermarketItem,
                        quantity: 1,
                      });
                  }
                }
              }}
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
              supermarketItems={priceLists?.results || []}
              selectedSupermarketItem={selectedSupermarketItem}
              setSupermarketItem={setSupermarketItem}
            />
          </GridItem>
        </Grid>
      </Box>
    </MiddleContainer>
  );
};

export default ProductDetail;
