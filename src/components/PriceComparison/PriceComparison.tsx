import { Box, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import { SupermarketItem } from "@/hooks/useSupermarketItems";

interface Props {
  supermarketItems: SupermarketItem[];
  selectedSupermarketItem: SupermarketItem | null;
  setSupermarketItem: (supermarketItem: SupermarketItem) => void;
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
      <VStack w="full" spacing={4}>
        {supermarketItems.map((item, index) => (
          <SupermarketPriceRow
            key={index}
            supermarketItem={item}
            selectedSupermarketItem={selectedSupermarketItem}
            onClick={() => setSupermarketItem(item)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
