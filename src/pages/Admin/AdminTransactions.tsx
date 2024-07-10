import { Grid, GridItem,Card,CardBody,Box,Flex,Image,Spacer,Center,Select,Table,Thead,Tr,Th,Tbody,Td,Tfoot
    ,Heading,Text,TableContainer,HStack,Circle,Button,useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
    VStack,Icon,ListItem,List} from "@chakra-ui/react"
  import LineChart from "../../components/Charts/LineChart"
  import LoginButton from "../../components/Buttons/LoginButton" 
  import { MdPayment } from "react-icons/md";
  import { FaShoppingBag } from "react-icons/fa";
  import { GiStorkDelivery } from "react-icons/gi";
  import { FaUser } from "react-icons/fa6";


const AdminTransactions = () => {
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

  <GridItem  area={'main'} ml={8} mt={1}>
    <Grid templateAreas={{
        base: `"main1"
              "main2"`,
       lg: `"main1 main2"`,
       
    }}
    gridTemplateRows={{ base: 'auto auto', lg: '1fr' }}
    gridTemplateColumns={{base:'1fr',lg:'69% 28%'}}
    gap={5}
    >
        <GridItem pl='2' area={'main1'} pb={2}>
        <Flex>
        <Box px={2}>
        <Select placeholder='Select option' >
        <option value='option3' selected>3 Month</option>
        <option value='option1'>6 Month</option>
        <option value='option2'>1 Month</option>
        
    </Select>

        </Box>

        </Flex>
            
    <LineChart topic='Money Flow'/>
  </GridItem>
  <GridItem pl='2'  area={'main2'}>
  <Card mt={14} pt={2}>
  <CardBody>
    
 
    <Box mb={10}>
        <Heading fontSize="20px" mb={4} mt={0}>Top Buyers</Heading>
      <Flex justifyContent={'space-between'}>
        <Box px={3}>Customer</Box>
        <Spacer/>
        <Box px={3}>Items Purchased</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
                <Box px={3} py={2}>Kaveesha Hettige</Box>
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
      Transaction Details
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
            <Th>Type</Th>
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
            <Td>customer</Td>
            <Td>2024.06.01</Td>
            <Td>
            <HStack>
                <Circle bg='red' size='10px'></Circle>
                <Text>Cancelled</Text>
                </HStack>
            </Td>
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
            <Td>Super Market</Td>
            <Td>2024.06.01</Td>
            <Td>
            <HStack>
                <Circle bg='yellow' size='10px'></Circle>
                <Text>Delivered</Text>
                </HStack>
            </Td>
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
            <Td>customer</Td>
            <Td>2024.06.01</Td>
            <Td>
            <HStack>
                <Circle bg='primary' size='10px'></Circle>
                <Text>Delivered</Text>
                </HStack>
            </Td>
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
              <HStack>
              <Icon as={FaUser} boxSize={4} color='primary'/>
              <Text fontSize={'sm'}>Customer</Text>

              </HStack>
              
            </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Center borderBottomWidth={'1px'} pb={6}>

            <Flex >
            
            
              <Box mr={1} >
                
                <VStack>
                  <Box mb={8}>
                  <Icon as={MdPayment} boxSize={5} color={'primary'}/>
                  </Box>
                  <Box mb={7}>
                  <Icon as={GiStorkDelivery} boxSize={5} color={'primary'} />
                  </Box>
                </VStack>

              </Box>
              <Box ml={1}>
              <VStack>
                  
              <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Price</Text>
                  <Text fontSize={'sm'}>Rs 4000</Text>
                  </VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>Delivery Type</Text>
                  <Text fontSize={'sm'}>Collected</Text>
                  </VStack>
                </VStack>
                
              </Box>

              <Box mr={1} ml={6}>
                
                <VStack>
                  <Box mb={7}>
                  <Icon as={FaShoppingBag} boxSize={5} color={'primary'} />
                  </Box>
                </VStack>

              </Box>
              <Box ml={1}>
              <VStack>
                  <VStack>
                  <Text fontSize={'lg'} fontWeight={'500'}>No of Items</Text>
                  <Text fontSize={'sm'}>4</Text>
                  </VStack>
                </VStack>
                
              </Box>
              
            </Flex>
            </Center>

            <Box mt={1}>
            <HStack>
              <Heading fontSize={'md'} color='primary' fontWeight={'500'}>Cargills</Heading>
              <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='30px'
                  objectFit='cover'
                  m={2}
                />
              </HStack>
              <Box>
              <List spacing={3}>
  <ListItem>
    <HStack boxShadow={'sm'} p={1}>
    <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
              <Text>Munchee Super Cream Cracker 500g</Text>
              
    </HStack>
  </ListItem>

  <ListItem>
    <HStack boxShadow={'sm'} p={1}>
    <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
              <Text>Munchee Super Cream Cracker 500g</Text>
    </HStack>
  </ListItem>

</List>
              </Box>

            </Box>

            <Box mt={1}>
              <HStack>
              <Heading fontSize={'md'} color='primary' fontWeight={'500'}>keells</Heading>
              <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='30px'
                  objectFit='cover'
                  m={2}
                />
              </HStack>
              
              <Box>
              <List spacing={3}>
  <ListItem>
    <HStack boxShadow={'sm'} p={1}>
    <Image
                  src='https://via.placeholder.com/150'
                  alt='Product Image'
                  boxSize='50px'
                  objectFit='cover'
                  mr={4}
                />
              <Text>Munchee Super Cream Cracker 500g</Text>
    </HStack>
  </ListItem>
  
</List>
              </Box>

            </Box>

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

export default AdminTransactions
