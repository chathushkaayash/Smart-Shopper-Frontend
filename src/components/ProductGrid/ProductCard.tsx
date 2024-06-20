import {
  Card,
  CardBody,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Product } from "../../hooks/useProducts";
import RatingStars from "../Inputs/Rating";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card h="full" boxShadow="" className="shadow-lg rounded-3xl">
      <Center h={240}>
        <VStack
          spacing={0}
          className="absolute top-6 right-4 text-2xl p-1 bg-[#edf2f7] rounded-3xl "
        >
          <IconButton
            borderRadius={25}
            color="primary"
            icon={isLiked ? <FaHeart /> : <FaRegHeart />}
            aria-label="Search database"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
          />
          <IconButton
            icon={<IoEyeOutline />}
            aria-label="Search database"
            size="sm"
          />
        </VStack>

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
            <Text color="primary">Rs{product.amount}</Text>
            <Text as="del">Rs{product.amount}</Text>
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
