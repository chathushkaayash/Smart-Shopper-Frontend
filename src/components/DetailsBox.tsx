import { Box, Grid, GridItem } from "@chakra-ui/react";

interface props {
  orderId: string;
  orderPlacedOn: string;
  customer: string;
  contact: string;
  orderCost: string;
}



const DetailsBox = ({
  orderId,
  orderPlacedOn,
  customer,
  contact,
  orderCost,
}: props) => {
  return (
    <>
      <Box
        className="product-card border m-5"
        borderColor={"gray-300"}
        border={"rounded"}
        maxW={{ base: "100%" }}
        p={{ base: 2, md: 4 }}
        m={0}
        mb={4}
        borderRadius={10}
      >
        <Grid templateColumns="2fr 3fr" gap={3}>
          <GridItem fontWeight={"bold"}>Order Id</GridItem>
          <GridItem>: {orderId}</GridItem>
          <GridItem fontWeight={"bold"}>Order placed On</GridItem>
          <GridItem>: {orderPlacedOn}</GridItem>
          <GridItem fontWeight={"bold"}>Customer</GridItem>
          <GridItem>: {customer}</GridItem>
          <GridItem fontWeight={"bold"}>Contact Now</GridItem>
          <GridItem>: {contact}</GridItem>
          <GridItem fontWeight={"bold"}>order Cost</GridItem>
          <GridItem>: {orderCost}</GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default DetailsBox;
