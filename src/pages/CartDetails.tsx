
import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import Accordian from "../components/Accordian";
import IconButton from "../components/Buttons/IconButton";
import TextButton from "../components/Buttons/TextButton";
import CartItemCard from "../components/CartItemCard";
import MainContainer from "../components/MainContainer";

const CardDetails = () => {
    const accordionItems = [
        {
          title: "Item 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
        },
        {
            title: "Item 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
          },
          {
            title: "Item 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat."
          },
      ];
  return (
    <MainContainer>
      <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(2, 1fr)" }}
      h="100%"
      gap={{ base: 4, md: 6, lg: 10 }}
    >
        <GridItem h="100%">
          <Flex>
            <Flex flexDirection="column">
              <Heading as='h2' size='lg'>Your shopping cart</Heading>
                <Text>Not ready to checkout? Continue Shopping</Text>
            </Flex>
            <Spacer />

              <IconButton Icon={AddIcon} />
          </Flex>
          <VStack spacing={5} mt={10}>
            <CartItemCard
              imageSrc="https://essstr.blob.core.windows.net/essimg/ItemAsset/Pic91287.jpg"
              itemName="Cream Craker"
              price={100}
              quantity={1}
            />
            <CartItemCard
              imageSrc="https://essstr.blob.core.windows.net/essimg/ItemAsset/Pic4603.jpg"
              itemName="Product Name"
              price={200}
              quantity={2}
            />
            <CartItemCard
              imageSrc="https://essstr.blob.core.windows.net/essimg/ItemAsset/Pic915007.jpg"
              itemName="Product 3"
              price={300}
              quantity={3}
            />
          </VStack>
        </GridItem>

        <GridItem>
        <Heading as='h2' size='lg' mb={10}>Order Information</Heading>
          <Accordian items={accordionItems}/>
          <Spacer />
          <TextButton text="Proceed to checkout" onClick={() => {}} />
          
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default CardDetails;
