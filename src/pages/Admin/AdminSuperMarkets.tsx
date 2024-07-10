import { GridItem,Grid,Box,Table,TableContainer,Thead,Th,Tr,Tbody,
    Td,Tfoot,Heading,Image,Text,Flex,Select,Icon,Center,
    HStack,Button,useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
    VStack} from "@chakra-ui/react"

  import PieChart from "../../components/Charts/PieChart" 
  import LineChart from "../../components/Charts/LineChart";
  import { FaLocationDot } from "react-icons/fa6";
  import { IoStarSharp } from "react-icons/io5";
  import { SiCashapp } from "react-icons/si";
  import { GrUserWorker } from "react-icons/gr";
  import { FaCartFlatbed } from "react-icons/fa6";
  import { FaUser } from "react-icons/fa";
  import { MdFeedback } from "react-icons/md";
  import { MdNavigateNext } from "react-icons/md";


const AdminSuperMarkets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
    templateAreas={{
      base: `"main"
             "footer"`,
      lg: `" main"
           " footer"`
    }}
    gridTemplateRows={"auto auto" }
    gridTemplateColumns={{ base: '1fr', lg: 'auto' }}
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
>
  
  <GridItem pl='2' area={'main'}>
    
    <Grid templateAreas={{
      base: `"main1"
             "main2"`,     
      lg: `"main1 main2"`
    }}
    gridTemplateRows={{ base: 'auto auto', lg: '1fr' }}
  gridTemplateColumns={{base:'1fr',lg:'30% 65%'}}
  gap={5}
  >

  <GridItem  area={'main1'}>
    <Heading size={'lg'} my={4}>Super Market Earnings</Heading>
    <Box pt={10} boxShadow={'md'}>
    <PieChart title=''/>
    </Box>
  </GridItem>

  <GridItem area={'main2'} mt={12}>
    <LineChart topic=""/>
  </GridItem>


    </Grid>
    
  </GridItem>
  <GridItem pl='1' bg={''} area={'footer'} my={10} >

  <Box p={2} shadow='md' borderWidth='1px'  >
    <Flex justifyContent="space-between" >
    <Heading as='h3' size='lg' >
      Super Market Details
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
            <Th>Address</Th>
            <Th>Manager Name</Th>
            <Th>Contact Number</Th>
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
                <Text>Keells</Text>
              </HStack>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>Kaveesha Hettige</Td>
            <Td>07523458901</Td>
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
                <Text>Keells</Text>
              </HStack>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>Kaveesha Hettige</Td>
            <Td>07523458901</Td>
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
                <Text>Keells</Text>
              </HStack>
            </Td>
            <Td>235/1,Kanampitiya Road,Galle</Td>
            <Td>Kaveesha Hettige</Td>
            <Td>07523458901</Td>

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
              <Text fontSize={'xl'}>Keells</Text>
              <Flex>
              <Icon as={FaLocationDot} boxSize={5} color={'primary'}/>
              <Text fontSize={'sm'} ml={2}>85/3,HighLevel Road,Kirulapone,Colombo 6</Text>
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
            
              
                <Box>
                  <VStack>
                  <Box mb={8}>
                  <Icon as={SiCashapp} boxSize={5} color={'primary'}/>
                  </Box >
                  <Box mb={8}>
                  <Icon as={GrUserWorker} boxSize={5} color={'primary'}/>
                  </Box>
                  <Box mb={7}>
                  <Icon as={FaCartFlatbed} boxSize={5} color={'primary'} />
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
                  <Text fontSize={'lg'} fontWeight={'500'}>Manager</Text>
                  <Text fontSize={'sm'}>Kaveesha Hettige</Text>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Order Count</Text>
                  <Text fontSize={'sm'}>80</Text>
                  </VStack>
                </VStack>
                </Box>

                <Box ml={10}>
                  <VStack>
                  <Box mb={8}>
                  <Icon as={FaUser} boxSize={5} color={'primary'}/>
                  </Box >
                  <Box mb={8}>
                  <Icon as={MdFeedback} boxSize={5} color={'primary'}/>
                  </Box>
                  <Box mb={7}>
                  <Icon as={IoStarSharp} boxSize={5} color={'primary'} />
                  </Box>
                  </VStack>
                </Box>
                
              <Box ml={1}>
              <VStack>
                  
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Customers Shopped</Text>
                  <Text fontSize={'sm'}>56</Text>
                  </VStack>
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
  )
}

export default AdminSuperMarkets
