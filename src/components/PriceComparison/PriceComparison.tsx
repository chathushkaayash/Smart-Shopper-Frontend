import { Box, Divider, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import { SupermarketItem } from "@/hooks/usePriceLists";

interface Props {
  supermarketItems: SupermarketItem[];
  selectedSupermarketItem: SupermarketItem | null;
  setSupermarketItem: (priceList: SupermarketItem) => void;
}

const PriceComparison = ({
  supermarketItems,
  selectedSupermarketItem,
  setSupermarketItem,
}: Props) => {
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
        {supermarketItems.map((item, index) => (
          <SupermarketPriceRow
            key={index}
            supermarketItem={item}
            selectedPriceList={selectedSupermarketItem}
            onClick={() => setSupermarketItem(item)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
