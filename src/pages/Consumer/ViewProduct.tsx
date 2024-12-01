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
import useProduct from "@/services/Products/useProduct";
import useSupermarketItems from "@/services/SupermarketItems/useSupermarketItems";
import useCartItems from "@/services/Cart/useCartItems";
import useCreateCartItems from "@/services/Cart/useCreateCartItems";
import useDeleteCartItems from "@/services/Cart/useDeleteCartItem";
import useUpdateCartItems from "@/services/Cart/useUpdateCartItem";
import useCreateLikedProducts from "@/services/LikedProducts/useCreateLikedProducts";
import useDeleteLikedProducts from "@/services/LikedProducts/useDeleteLikedProducts";
import useLikedProducts from "@/services/LikedProducts/useLikedProducts";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { CartItem, Product, SupermarketItem } from "@/services/types";
import useCreateUserPreference from "@/services/UserPreference/useCreateUserPreference";
import useAuthStore from "@/state-management/auth/store";
import useUser from "@/services/User/useUser";

const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);

  if (!productId) return null;

  const product = useProduct([Number(productId)])[0];

  const {
    data: supermarketItems,
    isLoading,
    error,
  } = useSupermarketItems({ productId });

  const [isLiked, setIsLiked] = useState(false);
  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  const { data: likedProducts } = useLikedProducts();
  const createLikedProduct = useCreateLikedProducts();
  const deleteLikedProduct = useDeleteLikedProducts();

  const { data: cartItems } = useCartItems();
  const createCartItems = useCreateCartItems();
  const updateCartItems = useUpdateCartItems();
  const deleteCartItems = useDeleteCartItems();

  const createPreference = useCreateUserPreference();
  const { user: authUser, logout } = useAuthStore();
  const user = useUser([authUser?.id || 0])[0].data;

  const [selectedSupermarketItem, setSupermarketItem] =
    useState<SupermarketItem | null>(null);

  // ---------------------------------- Load the Liked State ----------------------------------------------
  useEffect(() => {
    if (likedProducts?.results) {
      const isLiked = likedProducts.results.some(
        (likedProduct) => likedProduct.productId === productId
      );
      setIsLiked(isLiked);
    }
  }, [likedProducts]);

  // ---------------------------------- Load the Cart Item State ----------------------------------------------
  useEffect(() => {
    if (cartItems?.results && supermarketItems?.results) {
      const matchedCartItem = cartItems?.results.find(
        (item) => item.productId === productId
      );

      if (matchedCartItem) {
        setCartItem(matchedCartItem);
        const supermarketItemsId = supermarketItems.results.findIndex(
          (i) => i.id === matchedCartItem.supermarketItem.id
        );
        setSupermarketItem(supermarketItems.results[supermarketItemsId]);
      } else {
        setCartItem(null);
        setSupermarketItem(supermarketItems.results[0]);
      }
    }
  }, [cartItems, supermarketItems]);

  // ------------------------------------ Handle Cart Item ----------------------------------------------------
  const handleCartItem = () => {
    if (!cartItem) {
      console.log("create cart item");

      createCartItems.mutate({
        productId: productId,
        quantity: 1,
        supermarketitemId: selectedSupermarketItem?.id || -1,
        consumerId: -1,
        orderId: -1,
      });

      createPreference.mutate({
        userId: user?.id || 0,
        preferenceType: "Cart",
        referenceId: productId,
      });
    }
    // Update the cart item
    else if (cartItem.supermarketItem.id !== selectedSupermarketItem?.id) {
      updateCartItems.mutate({
        id: cartItem.id,
        supermarketitemId: selectedSupermarketItem?.id || -1,
        quantity: 1,
        productId: productId,
        consumerId: -1,
        orderId: -1,
      });
    }

    // Remove the cart item
    else {
      deleteCartItems.mutate(cartItem.id);
    }
  };

  // ------------------------------------ Toggle Liked ----------------------------------------------------
  const toggleLiked = () => {
    setIsLiked(!isLiked);
    const productId = product.data?.id || -1;

    if (isLiked) {
      const likedProduct = likedProducts?.results.find(
        (i) => i.productId === productId
      );
      deleteLikedProduct.mutate(likedProduct?.id || -1);
    } else {
      createLikedProduct.mutate({ productId });
    }
  };

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error</Text>;

  return (
    <MiddleContainer width="90vw">
      <Box pt="4vh" px="6vw" pos={"relative"}>
        <Flex justifyContent={"space-between"}>
          <VStack spacing={0} paddingBottom={2}>
            <HStack>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                {product.data?.name}
              </Text>
              <VStack
                px={3}
                py={2}
                as="button"
                color={isLiked ? "red" : "black"}
                onClick={toggleLiked}
                _hover={{ color: "red", transform: "scale(1.10)" }}
              >
                {isLiked ? (
                  <FaHeart fontSize={35} />
                ) : (
                  <FaRegHeart fontSize={35} />
                )}
              </VStack>
            </HStack>
            <HStack w={"full"}>
              <Text>Not ready to checkout?</Text>
              <Text
                onClick={() => navigate("/")}
                color="primary"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                Continue Shopping
              </Text>
            </HStack>
          </VStack>
          <Box mt={5}>
            <AddToCartButton
              text={
                !cartItem
                  ? "Add to Cart"
                  : cartItem.supermarketItem.id !== selectedSupermarketItem?.id
                  ? "Update the Cart"
                  : "Remove from Cart"
              }
              checked={
                cartItem?.supermarketItem.id === selectedSupermarketItem?.id
              }
              onClick={handleCartItem}
            />
          </Box>
        </Flex>
        <Grid templateColumns="40% 53%" gap={"6%"} mt={4}>
          <GridItem>
            {selectedSupermarketItem && (
              <ProductDescription
                product={product.data || ({} as Product)}
                selectedSupermarketItem={selectedSupermarketItem}
              />
            )}
          </GridItem>
          <GridItem ml={2} w={"full"}>
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
