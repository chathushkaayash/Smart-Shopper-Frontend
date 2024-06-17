import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import { Product } from "../../hooks/useProducts";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={product.imageUrl} width={200}/>
      <CardBody bg="#EFF2F6" paddingX={0}>
        <Text fontSize="md" fontWeight="bold">
          {product.name}
        </Text>
        <HStack justifyContent="space-between" marginBottom={3}>
          {/* <PlatformIconList
            platforms={Product.parent_platforms?.map((p) => p.platform)}
          /> */}
          <Text fontWeight="bold">Rs {product.amount}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
