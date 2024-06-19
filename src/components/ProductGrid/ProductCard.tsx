
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  Flex,
  Box,
  Button,
  useBreakpointValue,
  CardFooter,
  CardHeader,
  Tooltip,
  Icon,
} from "@chakra-ui/react";

import { Product } from "../../hooks/useProducts";
import FavouriteButton from "../Buttons/FavouriteButton";
import AddToCartIconBtn from "../Buttons/AddToCartIconBtn";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card bg="white" borderColor="gray.200" borderRadius="lg">
      <CardHeader>
        <Flex
          justify="center"
          align="center"
          h="50%"
          overflow="hidden"
          borderRadius="10"
          border="1px"
          borderColor="gray.200"
        >
          <Box maxW="full" maxH="full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody px={5} pb={5}>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center justify-between"></div>
      </CardBody>
      <CardFooter>
        <Flex justify="space-between" align="center" gap={5}>
          
          <FavouriteButton onClick={() => {}} isFavourite={true} />
          <AddToCartIconBtn onClick={() =>{}} />
          
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
