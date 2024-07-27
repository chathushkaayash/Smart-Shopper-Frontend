import ActionButton from "@/components/Buttons/ActionButton";
import LineChart from "@/components/Charts/LineChart";
import { itemsSold } from "@/data/itemsSold";
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody, Td,
  Text,
  Tfoot,
  Th,
  Thead, Tr,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
import { GiStorkDelivery } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

const AdminOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>

          <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
            <Flex w='full' gap={5}>

            <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
            <Heading size={"md"}>
            Orders by Supermarkets
          </Heading>

            <Center>
              <LineChart  width="80%"/>
              {/* <PieChart/> */}
            </Center>
          </Box>

            {/* ------- Number of items Card ------- */}
          <Box p={5} shadow="md" borderWidth="1px" w="40%" borderRadius={15}>
            <Heading size="md">Top Items Sold</Heading>
            {itemsSold.map((company, index) => (
              <VStack mt={5} key={index}>
                <HStack
                  w="full"
                  px="1vw"
                  h="10vh"
                  rounded={10}
                  borderWidth="1px"
                  borderColor="background"
                  shadow="md"
                >
                  <Image
                    src={company.image}
                    alt="Product Image"
                    boxSize="40px"
                    objectFit="cover"
                  />
                  <Text ml='0.3rem'>{company.name}</Text>
                  <Text ml="auto">{company.count}</Text>
                </HStack>
              </VStack>
            ))}
            <ActionButton inverted={true} className="!w-full mt-5">
              View All
            </ActionButton>
          </Box>
          </Flex>

          <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
          <Flex justifyContent="space-between" px={20} py={10}>
            <Heading as="h3" size="md">
              Order Details
            </Heading>
            <Flex>
              <Box px={2}>
                <Select placeholder="Select option">
                  <option value="option1">August</option>
                  <option value="option2">September</option>
                  <option value="option3" selected>
                    October
                  </option>
                </Select>
              </Box>
            </Flex>
          </Flex>

          <TableContainer width={{ base: "100%", lg: "90%" }} ml={{ base: '0%', lg: '5%' }}>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Order ID</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Cost</Th>
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
            <Td>#1234</Td>
            <Td>2024.06.12</Td>
            <Td>
                <HStack>
                <Circle bg='primary' size='10px'></Circle>
                <Text>Delivered</Text>
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
            <Td>#1234</Td>
            <Td>2024.06.12</Td>
            <Td>
                <HStack>
                <Circle bg='red' size='10px'></Circle>
                <Text>Cancelled</Text>
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
            <Td>#1234</Td>
            <Td>2024.06.12</Td>
            <Td>
            <HStack>
                <Circle bg='yellow' size='10px'></Circle>
                <Text>Collected</Text>
                </HStack>
            </Td>
            <Td>Rs.2000</Td>
            <Td><Button bg='primary' size='sm'>View More</Button></Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>



          </Box>
          </VStack>


 
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
              <Text fontSize={'sm'}>kaveesha.hettige@gmail.com</Text>
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
    </>
  )
}

export default AdminOrders
