import { Box, Center, Heading, HStack, Icon } from "@chakra-ui/react"
import SupermarketForm from "./Forms/SupermarketForm"
import { GiShop } from "react-icons/gi";


const AddSuperMarket = () => {
  return (
   <>
   <Box my={10} px={10} >
   <HStack align="center" spacing={4} mb={6}> {/* align items centrally and add spacing between */}
  <Icon
    as={GiShop}
    w={10}
    h={10}
    color="primary"
  />
  <Center> {/* Ensures that the heading is centered */}
    <Heading size="lg"> {/* Adjusts the bottom margin */}
      Add New SuperMarket
    </Heading>
  </Center>
</HStack>

    <SupermarketForm/>
   </Box>
   </>
  )
}

export default AddSuperMarket
