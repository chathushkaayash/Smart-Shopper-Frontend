import { Box, HStack } from "@chakra-ui/react";
import SimpleSlider from "../SimpleSlider";

import { ProductQuery } from "../../App";
import useProducts from "../../hooks/useProducts";
import ActionButton from "../Buttons/ActionButton";
import Section from "./Section";

import ProductCard from "../ProductGrid/ProductCard";
import ProductCardContainer from "../ProductGrid/ProductCardContainer";

const BestSellingProducts = () => {
  const { data: products } = useProducts({} as ProductQuery);

  const config = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1200,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  //   console.log(products?.pages[0].data.results);

  const rightSide = (
    <HStack gap={5}>
      <ActionButton className="!p-5 !rounded">View All</ActionButton>
    </HStack>
  );

  return (
    <Section
      heading="This Month"
      title="Best Selling Products"
      rightSide={rightSide}
    >
      <SimpleSlider config={config}>
        {products?.pages?.[0].results.map((product) => (
          <Box key={product.itemID}>
            {/*Added a margin right to remove the next items shadow */}
            <ProductCardContainer key={product.itemID} className="!mx-auto">
              <ProductCard product={product} />
            </ProductCardContainer>
          </Box>
        ))}
      </SimpleSlider>
    </Section>
  );
};

export default BestSellingProducts;
