import { Box, Grid, GridItem } from "@chakra-ui/react";

import AddToCartButton from "../components/Buttons/AddToCartButton";
import BackArrow from "../components/PriceComparison/BackArrow";
import PriceComparison from "../components/PriceComparison/PriceComparison";
import ProductDescription from "../components/PriceComparison/ProductDescription";

import useProduct from "@/hooks/useProduct";
import { Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useProduct(id || "");

  if (product.isLoading) return <Spinner />;
  if (product.isError) return <div>Error...</div>;

  return (
    <Box pt={4} pl={20} pr={20}>
      <Box fontSize="28px" onClick={() => navigate("/")}>
        <BackArrow />
      </Box>
      <Grid templateColumns="45% 55%" gap={6} mt={4}>
        <GridItem>
          <ProductDescription
            topic={product.data?.name}
            detail={product.data?.description}
            image={product.data?.imageUrl}
          />
        </GridItem>
        <GridItem ml={2}>
          <Box alignSelf="flex-start" mb={6} mt={10}>
            <AddToCartButton text="Add to Cart" />
          </Box>
          <PriceComparison productId={id} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
