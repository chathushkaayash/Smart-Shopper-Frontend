import { Box, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import { SupermarketItemWithRelations } from "@/hooks/useSupermarketItems";

interface Props {
  supermarketItems: SupermarketItemWithRelations[];
  selectedSupermarketItem: SupermarketItemWithRelations | null;
  setSupermarketItem: (supermarketItem: SupermarketItemWithRelations) => void;
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
