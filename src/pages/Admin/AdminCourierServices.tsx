
import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
  ,Heading,Text,TableContainer,HStack,Button,useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
  VStack,Icon} from "@chakra-ui/react"
import LineChart from "../../components/Charts/LineChart"
import LoginButton from "../../components/Buttons/LoginButton"
  import { IoStarSharp,IoBusiness ,IoCall} from "react-icons/io5";
  import { SiCashapp } from "react-icons/si";
  import { TbTruckDelivery } from "react-icons/tb";
  import { MdFeedback } from "react-icons/md";
  import { MdNavigateNext } from "react-icons/md";

const AdminCourierServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Grid
  templateAreas={{
                base:`"main"
                      "footer"`,
                lg:`"main"
                  "footer"`,
                
                }}
                gridTemplateRows={"auto auto"}
      gridTemplateColumns={{ base: "1fr", lg: "auto" }}
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  
  <GridItem pl='2' area={'main'} ml={8}>
    <Grid templateAreas={{
        base: `"main1"
              "main2"`,
       lg: `"main1 main2"`,
       
    }}
    gridTemplateRows={{ base: 'auto auto', lg: '1fr' }}
            gridTemplateColumns={{base:'1fr',lg:'65% 30%'}}
  gap={5}
    >
        <GridItem  area={'main1'} pb={2}>
    <LineChart topic='Courier Company Earnings'/>
  </GridItem>
  <GridItem   area={'main2'} mt={5}>
  <Card pt={7}>
  <CardBody>
    
 
    <Box mb={10}>
      <Flex>
        <Box px={3}>Company</Box>
        <Spacer/>
        <Box px={5}>No of Drivers</Box>
      </Flex>
    </Box>
    <Box mb={5}>
      <Flex>
      <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Island cabs</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>12</Box>
      </Flex>
    </Box>
    <Box mb={5}>
    <Flex>
    <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pronto</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>35</Box>
      </Flex>
    </Box>

    <Box mb={5}>
    <Flex>
    <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pick me</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>20</Box>
      </Flex>
    </Box>

    <Box mb={5}>
    <Flex>
    <HStack px={3}>
        <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='40px'
                  objectFit='cover'
                />
                <Box px={3} py={2}>Pick me</Box>
        </HStack>
        <Spacer/>
        <Box px={10} py={2}>20</Box>
      </Flex>
    </Box>

    <Box>
      <Center>
      <LoginButton text="View More" image=""/>
      </Center>
   
    </Box>

  </CardBody>
</Card>
  </GridItem>

    </Grid>
    
   
  </GridItem>
  <GridItem pl='2' area={'footer'} mx={10} my={10}>

  <Box p={2} shadow='md' borderWidth='1px'>
    <Flex justifyContent="space-between" px={20} py={10}>
    <Heading as='h3' size='lg' >
      Delivery Person Details
    </Heading>
    <Flex>
        <Box px={2}>
        <Select placeholder='Select option' >
        <option value='option1'>August</option>
        <option value='option2'>September</option>
        <option value='option3' selected>October</option>
    </Select>

        </Box>
    {/* <ActionButton url="/addcustomer">Add Customer</ActionButton> */}

    </Flex>
    
    </Flex>

  <TableContainer width={{ base: "100%", lg: "90%" }} ml={{ base: '0%', lg: '5%' }}>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Company</Th>
            <Th>Contact Number</Th>
            <Th>Deliveries Completed</Th>
            <Th>Earning</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
            <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Kaveesha Hettige</Text>
              </HStack>
            </Td>
            <Td>Island Cabs</Td>
            <Td>0766245650</Td>
            <Td>45</Td>
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm' onClick={onOpen}>View More</Button></Td>
          </Tr>
          <Tr>
          <Td>
          <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Kaveesha Hettige</Text>
              </HStack>
            </Td>
            <Td>Island Cabs</Td>
            <Td>0766245650</Td>
            <Td>45</Td>
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm'>View More</Button></Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
          <Td>
          <HStack>
                <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
                <Text>Kaveesha Hettige</Text>
              </HStack>
            </Td>
            <Td>Island Cabs</Td>
            <Td>0766245650</Td>
            <Td>45</Td>
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm'>View More</Button></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    </Box>
   
    
  </GridItem>
  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box borderBottomWidth={'1px'} p={2} >
            <VStack>
            <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='100px'
                  objectFit='cover'
                  borderRadius="50%"
                  mr={4}
                />
              <Text fontSize={'xl'}>Kaveesha Hettige</Text>
              <Flex>
              <Icon as={IoBusiness} boxSize={5} color={'primary'}/>
              <Text fontSize={'sm'} ml={2}>Uber Deliveries</Text>
              </Flex>

              <Box>
              <HStack fontSize={{base:"sm",md:"md"}} spacing={2} color="yellow.400">
              {Array(5).fill("").map((_, i) => (
              <IoStarSharp key={i} />
                ))}
              </HStack>
              </Box>     

            </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>

            <Flex>
            
              <Box mr={1}>
                
                <VStack>
                  <Box mb={8}>
                  <Icon as={SiCashapp} boxSize={5} color={'primary'}/>
                  </Box >
                  <Box mb={8}>
                  <Icon as={IoCall} boxSize={5} color={'primary'}/>
                  </Box>
                  <Box mb={9}>
                  <Icon as={TbTruckDelivery} boxSize={5} color={'primary'} />
                  </Box>
                </VStack>

              </Box>

              <Box ml={1}>
              <VStack>
                  
              <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Earning</Text>
                  <Text fontSize={'sm'}>Rs 134 000</Text>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Contact Number</Text>
                  <Text fontSize={'sm'}>076 63451236</Text>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Deliveries completed</Text>
                  <Text fontSize={'sm'}>80</Text>
                  </VStack>

                </VStack>
                
              </Box>
              <Box mr={1} ml={5}>    
                <VStack>
                <Box mb={7}>
                  <Icon as={MdFeedback} boxSize={5} color={'primary'} />
                  </Box>
                  <Box mb={7}>
                  <Icon as={IoStarSharp} boxSize={5} color={'primary'} />
                  </Box>
                </VStack>

              </Box>

              <Box ml={1}>
                  
              <VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Feedbacks</Text>
                  <HStack>
                    <Text fontSize={'sm'}>23</Text>
                    <Button  bg='white' color='primary' border='2px' borderColor='primary' size='xs' ml={5}>View
                      <Icon as={MdNavigateNext}/>
                    </Button>

                    </HStack>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Rating</Text>
                  <Text fontSize={'sm'}>5/5</Text>
                  </VStack>

                </VStack>
                
              </Box>
              
            </Flex>
            </Center>

          </ModalBody>

          <ModalFooter>
            <Button bg="primary" color='white' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
 
</Grid>
    </>
  )
}

export default AdminCourierServices
