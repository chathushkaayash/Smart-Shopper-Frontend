import { Box, Divider, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import usePriceList from "@/hooks/usePriceLists";

interface Props {
  productId?: string;
}

const PriceComparison = ({ productId }: Props) => {
  if (!productId) return null;

  const { data: priceList } = usePriceList(productId || "");

  console.log(priceList?.results);
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        Price Comparison
      </Text>
      <VStack
        w="full"
        spacing={4}
        divider={
          <Divider borderColor="gray.400" alignSelf="flex-start" w={570} />
        }
      >
        {priceList?.results.map((item, index) => (
          <SupermarketPriceRow
            key={index}
            image={item.supermarket.logo}
            price={item.price}
            distance="2.3Km"
          />
        ))}
        {/* <SupermarketPriceRow
          image={KeelsIcon}
          price="233.00 LKR"
          distance="2.3Km"
        />
        <SupermarketPriceRow
          image={SparIcon}
          price="240.00 LKR"
          distance="2.1Km"
        />
        <SupermarketPriceRow
          image={ArpicoIcon}
          price="230.00 LKR"
          distance="3.3Km"
        /> */}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
