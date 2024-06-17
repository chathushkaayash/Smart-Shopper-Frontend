import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import QuentityChanger from "./QuentityChanger";
import SupermarketLogoContainer from "./SupermarketLogoContainer";


interface CartItemCardProps {
  imageSrc: string;
  itemName: string;
  price: number;
  quantity: number;
}

const CartItemCard = ({
  imageSrc,
  itemName,
}: CartItemCardProps) => {
  return (
    <Card
      overflow="hidden"
      variant="outline"
      borderColor="gray.200"
      w="full"
      p={4}
    >
      <Grid
        templateColumns={{ base: "1fr", sm: "auto 1fr auto auto" }}
        gap={4}
        alignItems="center"
      >
        <GridItem>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={imageSrc}
            alt={itemName}
          />
        </GridItem>
        <GridItem>
          <Box p={2}>
            <Heading size="md">{itemName}</Heading>
            <SupermarketLogoContainer />
            <Text fontSize="sm" fontWeight="bold"> Change Supermarket</Text>
             
          </Box>
        </GridItem>
        <GridItem>
          <QuentityChanger />
        </GridItem>
        <GridItem>
          
          <DeleteIcon
            cursor="pointer"
            // color="red.500"
            boxSize={6}
            _hover={{ color: "red.600" }}
          />
        </GridItem>
      </Grid>
    </Card>
  );
};

export default CartItemCard;
