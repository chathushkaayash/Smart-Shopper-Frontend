import {
    Box,
    Grid,
    GridItem,
  } from "@chakra-ui/react";
  
  import BackArrow from "../components/PriceComparison/BackArrow";
  import AddToCartButton from "../components/Buttons/AddToCartButton";
  import PriceComparison from "../components/PriceComparison/PriceComparison";
  import ProductDescription from "../components/PriceComparison/ProductDescription";
  
  import cream from "../assets/creamcracker.svg";
  
  const ProductDetail = () => {
    return (
      <Box pt={4} pl={20} pr={20}>
        <Box fontSize="28px">
          <BackArrow />
        </Box>
        <Grid templateColumns="45% 55%" gap={6} mt={4}>
          <GridItem>
            <ProductDescription
              topic="Munchee Cream Cracker"
              detail="Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless"
              image={cream}
            />
          </GridItem>
          <GridItem ml={2}>
            <Box alignSelf="flex-start" mb={6} mt={10}>
              <AddToCartButton text="Add to Cart" />
            </Box>
            <PriceComparison />
          </GridItem>
        </Grid>
      </Box>
    );
  };
  
  export default ProductDetail;
  