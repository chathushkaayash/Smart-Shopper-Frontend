import {
  Card,
  CardBody,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import RatingStars from "../Inputs/Rating";
import { useNavigate } from "react-router-dom";
import useLikedProducts from "@/services/LikedProducts/useLikedProducts";
import useCreateLikedProducts from "@/services/LikedProducts/useCreateLikedProducts";
import useDeleteLikedProducts from "@/services/LikedProducts/useDeleteLikedProducts";
import useAuthStore from "@/state-management/auth/store";
import { Product } from "@/services/types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);
  const { data: likedProducts } = useLikedProducts();

  const createLikedProduct = useCreateLikedProducts();
  const deleteLikedProduct = useDeleteLikedProducts();

  const prices = product.supermarketItems.length ? product.supermarketItems.map((item) => item.price) : [product.price];
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // ---------------------------------- Load the Liked State ----------------------------------------------
  useEffect(() => {
    if (likedProducts?.results) {
      const isLiked = likedProducts.results.some(
        (likedProduct) => likedProduct.productId === product.id
      );
      setIsLiked(isLiked);
    }
  }, [likedProducts]);

  // ------------------------------------ Toggle Liked ----------------------------------------------------
  const toggleLiked = () => {
    setIsLiked(!isLiked);
    const productId = product.id || -1;

    if (isLiked) {
      const likedProduct = likedProducts?.results.find(
        (i) => i.productId === productId
      );
      deleteLikedProduct.mutate(likedProduct?.id || -1);
    } else {
      createLikedProduct.mutate({ productId });
    }
  };

  return (
    <Card
      h="full"
      boxShadow=""
      className="shadow-lg rounded-3xl"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <Center h={240}>
        {user && (
          <IconButton
            zIndex={999}
            borderRadius={5}
            color="primary"
            icon={isLiked ? <FaHeart /> : <FaRegHeart />}
            aria-label="Search database"
            size="md"
            position={"absolute"}
            top={6}
            right={4}
            bg="#edf2f7"
            onClick={(event) => {
              event.stopPropagation();
              toggleLiked();
            }}
          />
        )}

        <Image src={product.imageUrl} w={170} />
      </Center>
      <CardBody p={[5, 3]}>
        <Stack spacing={1}>
          <Text fontSize="sm" fontWeight={600}>
            {product.name}
          </Text>
          <Flex gap={3}>
            <Text color="primary">Rs{minPrice}</Text>
            <Text as="del">Rs{maxPrice}</Text>
          </Flex>
          <RatingStars className="mb-10" value={5} reviews={75} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
