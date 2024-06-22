import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";


import PaymentImage from "../assets/Payment-successful/payment.svg";
import BarcodeImage from "../assets/Payment-successful/clarity_qr-code-line.svg"
import MiddleContainer from "../components/Containers/MiddleContainer";




const PaymentSuccessful = () => {
  return (
    <MiddleContainer>
      <Grid gridTemplateColumns="1fr 1fr" h="100%">
        <GridItem h="100%">
          <Center h="100%">
            <Image src={PaymentImage} w="80%" />
          </Center>
        </GridItem>

        <GridItem px={55} py={10}>
          <VStack alignItems="flex-start" mt="10%">
            <Text lineHeight= "1.1em" fontSize="5xl" fontWeight="bold" m={0}>
              {" "}
              Thanks for placing <br/>Order with us!
            </Text>
           
            <Box display="inline" fontSize="2xl" fontWeight="">
              <Text as="span">Smart list.</Text>
              <Text color="primary" as="span">
                Best Prices.
              </Text>
              <Text as="span">Fast Delivery</Text>
            </Box>
          </VStack>

          
          <Center my="10%">
            <Image src={BarcodeImage} />
          </Center>
          

         

            <Button type="submit" width="full" bg="primary" color="white" mt={3}>
              Track your Oder
            </Button>
         
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default PaymentSuccessful;
