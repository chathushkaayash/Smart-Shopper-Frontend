import { Box } from '@chakra-ui/react'
import { Divider, VStack, Text } from '@chakra-ui/react'

import SupermarketPriceRow from './SupermarketPriceRow'

import KeelsIcon from "../../assets/supermarket-icons/Keels.svg";
import SparIcon from "../../assets/supermarket-icons/Spar.svg";
import ArpicoIcon from "../../assets/supermarket-icons/Arpico.svg";

const PriceComparison = () => {
  return (
    <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={8}>
            Price Comparison
        </Text>
        <VStack w="full" spacing={4} divider={<Divider borderColor="gray.400" alignSelf="flex-start" w={570}/>}>
            <SupermarketPriceRow
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
            />
        </VStack>
    </Box>
  );
}

export default PriceComparison;