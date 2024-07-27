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
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import RatingStars from "../Inputs/Rating";
import { useNavigate } from "react-router-dom";
import { Product } from "@/hooks/useProduct";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  return (
    <Card
      h="full"
      boxShadow=""
      className="shadow-lg rounded-3xl"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <Center h={240}>
        <IconButton
          borderRadius={5}
          color="primary"
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          aria-label="Search database"
          size="md"
          position={"absolute"}
          top={6}
          right={4}
          bg="#edf2f7"
          onClick={() => setIsLiked(!isLiked)}
        />

        {/* <FaRegHeart className="absolute top-1 right-6 text-2xl" /> */}
        {/* <IconButton  className="absolute top-6 right-6 text-2xl"/> */}

        <Image src={product.imageUrl} w={170} />
      </Center>
      <CardBody p={[5, 3]}>
        <Stack spacing={1}>
          <Text fontSize="sm" fontWeight={600}>
            {product.name}
          </Text>
          <Flex gap={3}>
            <Text color="primary">Rs{product.price}</Text>
            <Text as="del">Rs{product.price}</Text>
          </Flex>
          <RatingStars className="mb-10" value={5} reviews={75} />
        </Stack>
        {/* <Text fontSize="sm" color="gray.500">(589 Reviews)</Text> */}
      </CardBody>
      {/* <CardFooter>
        <Flex justify="space-between" align="center" gap={5}>
          
          <FavouriteButton onClick={() => {}} isFavourite={true} />
          <AddToCartIconBtn onClick={() =>{}} />
          
        </Flex>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
