import useReviews from "@/services/Reviews/useReviews";
import useSupermarket from "@/services/Supermarket/useSupermarket";
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
import { SupermarketItem } from "@/services/types";

interface Props {
  supermarketItem: SupermarketItem;
  selectedSupermarketItem: SupermarketItem | null;
  onClick: () => void;
}

const SupermarketPriceRow = ({
  supermarketItem,
  selectedSupermarketItem: selectedSupermarketItem,
  onClick,
}: Props) => {
  const supermarket = supermarketItem?.supermarketId
    ? useSupermarket([supermarketItem?.supermarketId])
    : [{ data: null, isLoading: false, error: null }];

  const reviews = useReviews({
    reviewType: "supermarketItem",
    targetId: supermarketItem.id,
  });

  const reviewCount = reviews.data?.count || 0;
  const totalStars =
    reviews.data?.results.reduce((acc, review) => acc + review.rating, 0) || 0;

  return (
    <HStack
      borderColor="primary"
      borderWidth={
        selectedSupermarketItem?.id === supermarketItem.id ? "2px" : ""
      }
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
      <Box minW="10%" maxW="10%">
        <Image src={supermarket[0].data?.logo || ""} w="6vw" />
      </Box>
      <VStack gap={3} minW="50%" maxW="50%">
        <HStack gap={10} lineHeight={0.1} w="full">
          <Stack>
            <Text fontSize="xs" color="gray">
              Name
            </Text>
            <Heading fontSize="lg">{supermarket[0].data?.name}</Heading>
          </Stack>
          <Stack>
            <Text fontSize="xs" color="gray">
              Distance
            </Text>
            <Heading fontSize="lg">2.4 KM</Heading>
          </Stack>
        </HStack>
        <HStack gap={0} lineHeight={0.1} w="full">
          <Stack w="full" lineHeight={0.1}>
            <Text fontSize="xs" color="gray">
              Reviews
            </Text>
            <Box>
              <RatingStars
                value={totalStars / reviewCount}
                reviews={reviewCount}
                url={`/reviews/supermarket_items/${supermarketItem.supermarketId}`}
              />
            </Box>
          </Stack>
          <Stack w={"40%"} justifyContent={"flex-end"}>
            <Text
              fontSize="sm"
              whiteSpace={"nowrap"}
              color={supermarketItem.availableQuantity < 10 ? "red" : ""}
            >
              {supermarketItem.availableQuantity < 99
                ? supermarketItem.availableQuantity
                : "99+"}{" "}
              Available
            </Text>
          </Stack>
        </HStack>
      </VStack>

      <Box minW="20%" maxW="20%">
        <Text fontSize="xl" fontWeight={700} whiteSpace={"nowrap"}>
          {supermarketItem.price} LKR
        </Text>
      </Box>
    </HStack>
  );
};

export default SupermarketPriceRow;
