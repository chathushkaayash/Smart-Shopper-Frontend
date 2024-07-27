import { SupermarketItem } from "@/hooks/usePriceLists";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import RatingStars from "../Inputs/Rating";
import useSupermarket from "@/hooks/useSupermarket";

interface Props {
  supermarketItem: SupermarketItem;
  selectedPriceList: SupermarketItem | null;
  onClick: () => void;
}

const SupermarketPriceRow = ({
  supermarketItem,
  selectedPriceList,
  onClick,
}: Props) => {
  const supermarket = supermarketItem?.supermarketId
    ? useSupermarket(supermarketItem?.supermarketId)
    : { data: null, isLoading: false, error: null };

  return (
    <HStack
      borderColor="primary"
      borderWidth={selectedPriceList?.id === supermarketItem.id ? "2px" : ""}
      justifyContent={"space-between"}
      px={10}
      py={3}
      borderRadius={15}
      w="full"
      bg="gray.100"
      onClick={onClick}
      cursor="pointer"
      divider={<Divider borderColor="gray.400" h="8vh" w="fit-content" />}
    >
      <Image src={supermarket.data?.logo || ""} w="6vw" />
      <VStack gap={3} w="20vw">
        <HStack gap={10} lineHeight={0.1} w="full">
          <Stack>
            <Text fontSize="xs" color="gray">
              Name
            </Text>
            <Heading fontSize="lg">{supermarket.data?.name}</Heading>
          </Stack>
          <Stack>
            <Text fontSize="xs" color="gray">
              Distance
            </Text>
            <Heading fontSize="lg">2.4 KM</Heading>
          </Stack>
        </HStack>
        <Stack w="full" lineHeight={0.1}>
          <Text fontSize="xs" color="gray">
            Reviews
          </Text>
          <Box>
            <RatingStars
              value={(supermarketItem?.id * 3) % 5}
              reviews={(supermarketItem?.id * 19) % 40}
            />
          </Box>
        </Stack>
      </VStack>

      <Text fontSize="xl" fontWeight={700}>
        {supermarketItem.price}
      </Text>
    </HStack>
  );
};

export default SupermarketPriceRow;
