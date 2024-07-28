import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
interface Props {
  index: number;
}

const OptimizedInfo = ({ index }: Props) => {
  return (
    <Box
      p={4}
      shadow="md"
      borderWidth="2px"
      borderRadius={15}
      bg={index === 1 ? "white" : "lightOrange"}
      mt={4}
      w="100%"
    >
      <Grid gridTemplateColumns="2fr 1fr" width="100%" my={2} px={"5%"}>
        <GridItem>
          <Stack gap={2}>
            <Text color="gray">Total Distance</Text>
            <Text color="gray">Deliveries</Text>
            <Text fontWeight={700}>Total</Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={2} alignItems={"flex-end"}>
            <Text color="gray">2 KM</Text>
            <Text color="gray">250 LKR</Text>
            <Text fontWeight={700}>850 LKR</Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OptimizedInfo;
