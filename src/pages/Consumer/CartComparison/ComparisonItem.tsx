import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import CreamCracker from "../../../assets/creamcracker.svg";

import DeleteImage from "../../../assets/delete.svg";
import SparImage from "../../../assets/spar.svg";
import { CartItem } from "@/state-management/cart/store";

interface Props {
  cartItem: CartItem;
}

const ComparisonItem = ({ cartItem }: Props) => {
  
  return (
    <Box>
      <Grid gridTemplateColumns="2fr 5fr 1fr">
        <GridItem>
          <Image src={CreamCracker} w={"18vh"} />
        </GridItem>

        <GridItem ml={4}>
          <Text whiteSpace="nowrap" fontSize="xl" fontWeight={600}>
            Cream cracker 500g
          </Text>

          <Grid gridTemplateColumns="1fr 2fr" alignItems={"flex-end"}>
            <Image src={SparImage} mt={2} w={"4vw"} />
            <Text>Distance : 2 Km</Text>
            <Text>Quantity : 1</Text>
          </Grid>
          <Text fontSize="20px" fontWeight={600}>
            150 LKR
          </Text>
        </GridItem>
        <GridItem>
          <Stack justifyContent={"flex-end"} h="full">
            <Image src={DeleteImage} ml="auto" />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ComparisonItem;
