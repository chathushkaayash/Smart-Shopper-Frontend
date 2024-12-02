import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
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
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import useOrders from "@/services/Orders/useOrders";
import useSuperMarkets, { SupermarketQuery } from "@/services/Supermarket/useSupermarkets";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartFlatbed, FaLocationDot } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import { MdFeedback, MdNavigateNext } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
//import LineChart from "../../components/Charts/LineChart";
import useSupermarketEarning from "@/hooks/useSupermarketEarning";
import PieChart from "@/components/Charts/PieChart";
import useSupermarketEarnings from "@/hooks/useSupermarketEarnings";
import { Supermarket } from "@/services/types";
import SearchBar from "@/components/SearchBar";
import BarGraph from "@/components/Charts/BarGraph";
const AdminSuperMarkets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [supermarketQuery, setSupermarketQuery] = useState<SupermarketQuery>(
    {} as SupermarketQuery
  );
  const supermarkets = useSuperMarkets(supermarketQuery);

  const [selectedSm, setSelectedSm] = useState<Supermarket | null>();

  const handleEditClick = (supermarket: Supermarket) => {
    setSelectedSm(supermarket);
    onOpen();
  };

  const earningBySupermarket = useSupermarketEarnings();
  console.log(earningBySupermarket.data)
  // console.log("earningBYSU",earningBySupermarket.data);
  // const { data: earningsData } = useSupermarketEarnings();
  // console.log("Earnings Data:", earningsData);

  const names =
    earningBySupermarket.data?.results.map((item) => item.name) || [];
  const earnings =
    earningBySupermarket.data?.results.map((item) => item.earnings) || [];

  // Log or use the extracted arrays
  console.log("Names:", names);
  console.log("Earnings:", earnings);

  const [visibleRows, setVisibleRows] = useState(5);

  const handleViewMore = () => {
    setVisibleRows(visibleRows + 3);
  };

  return (
    <>
      <Heading size={"md"} my={4} px={10}>
        Super Market Earnings
      </Heading>

      <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
        <Flex w="full" gap={5}>
          {/*
          Supermarket Earnings Card
          */}
          <Box
            shadow="md"
            borderWidth="1px"
            w="40%"
            borderRadius={15}
            display={"flex"}
            alignItems="center"
            justifyContent="center"
          >
            <PieChart chartData={earnings} labels={names} textPosition="bottom"/>
          </Box>

          {/*
          Supermarket Earnings Card
          */}
          <Box shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
            <Box>
              {/* <Heading as="h3" size="lg">
              Customers
              </Heading> */}

              <BarGraph chartData={earnings} labels={names} />
            </Box>
          </Box>
        </Flex>

        <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
          <Flex justifyContent="space-between" px={20} py={10}>
            <Heading as="h3" size="md">
              Super Market Details
            </Heading>
            <SearchBar
              width="65%"
              value={supermarketQuery.searchText || ""}
              setValue={(value: any) => {
                if (value != supermarketQuery.searchText)
                  setSupermarketQuery({ ...supermarketQuery, searchText: value });
              }}
            />
            <Flex>
              <Box px={2}>
                <Select placeholder="Select option" defaultValue={"August"}>
                  <option value="option1">August</option>
                  <option value="option2">September</option>
                  <option value="option3">October</option>
                </Select>
              </Box>
              {/* <ActionButton url="/addcustomer">Add Customer</ActionButton> */}
            </Flex>
          </Flex>

          <Center>
            <TableContainer
              width={{ base: "100%", lg: "90%" }}
              ml={{ base: "0%", lg: "5%" }}
            >
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Address</Th>
                    {/* <Th>Manager Name</Th> */}
                    <Th>Contact Number</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {supermarkets.data?.results
                    .slice(0, visibleRows)
                    .map((supermarket, index) => (
                      <Tr key={index}>
                        <Td>
                          <HStack>
                            <Image
                              src={supermarket.logo|| "https://via.placeholder.com/150"}
                              alt="SM Image"
                              boxSize="30px"
                              objectFit="contain"
                              aspectRatio={16 / 9}
                              borderRadius="50%"
                              mr={4}
                            />
                            <Text>{supermarket.name}</Text>
                          </HStack>
                        </Td>
                        <Td>{supermarket.address}</Td>
                        {/* <Td>{supermarket.supermarketManager.name}</Td> */}
                        <Td>{supermarket.contactNo}</Td>
                        <Td>
                          <Button
                            bg="primary"
                            size="sm"
                            onClick={() => handleEditClick(supermarket)}
                            color={"white"}
                          >
                            View More
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>

              {/* Position the "More Data" button below the table */}
              {supermarkets.data && supermarkets.data.count > visibleRows && (                
                <Button
                  size="md" mt={8} fontWeight="bold" bg="background"
                  onClick={handleViewMore}
                  
                >
                  More
                  
             </Button>
)}
            </TableContainer>
          </Center>
        </Box>
      </VStack>
      {selectedSm && (
        <Popup isOpen={isOpen} onClose={onClose} selectedSm={selectedSm} />
      )}
    </>
  );
};

interface PopupProps {
  onClose: () => void;
  isOpen: boolean;
  selectedSm: Supermarket;
  //earning:number;
}

const Popup = ({ onClose, isOpen, selectedSm }: PopupProps) => {
  const orders = useOrders(selectedSm.id);
  const customerCount = new Set(
    orders.data?.results.map((order) => order.consumerId)
  ).size;
  console.log(orders);
  const earingBySupermarket = useSupermarketEarning(selectedSm.id);
  console.log("earningBYSU", earingBySupermarket);

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box borderBottomWidth={"1px"} p={2}>
            <VStack>
              <Image
                src={selectedSm.logo}
                alt="Product Image"
                boxSize="100px"
                objectFit="cover"
                borderRadius="50%"
                mr={4}
              />
              <Text fontSize={"xl"}>{selectedSm.name}</Text>
              <Flex>
                <Icon as={FaLocationDot} boxSize={5} color={"primary"} />
                <Text fontSize={"sm"} ml={2}>
                  {selectedSm.address}
                </Text>
              </Flex>

              <Box>
                <HStack
                  fontSize={{ base: "sm", md: "md" }}
                  spacing={2}
                  color="yellow.400"
                >
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
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
                    <Icon as={SiCashapp} boxSize={5} color={"primary"} />
                  </Box>
                  <Box mb={8}>
                    <Icon as={GrUserWorker} boxSize={5} color={"primary"} />
                  </Box>
                  <Box mb={7}>
                    <Icon as={FaCartFlatbed} boxSize={5} color={"primary"} />
                  </Box>
                </VStack>
              </Box>

              <Box ml={1}>
                <VStack>
                  <VStack>
                    <Text fontSize={"lg"} fontWeight={"500"}>
                      Earning
                    </Text>
                    <Text fontSize={"sm"}>{earingBySupermarket.data}</Text>
                  </VStack>
                  <VStack>
                    <Text fontSize={"lg"} fontWeight={"500"}>
                      Manager
                    </Text>
                    <Text fontSize={"sm"}>
                      {selectedSm.supermarketManager.name}
                    </Text>
                  </VStack>
                  <VStack>
                    <Text fontSize={"lg"} fontWeight={"500"}>
                      Order Count
                    </Text>
                    <Text fontSize={"sm"}>{orders.data?.count}</Text>
                  </VStack>
                </VStack>
              </Box>

              <Box ml={10}>
                <VStack>
                  <Box mb={8}>
                    <Icon as={FaUser} boxSize={5} color={"primary"} />
                  </Box>
                  <Box mb={8}>
                    <Icon as={MdFeedback} boxSize={5} color={"primary"} />
                  </Box>
                  <Box mb={7}>
                    <Icon as={IoStarSharp} boxSize={5} color={"primary"} />
                  </Box>
                </VStack>
              </Box>

              <Box ml={1}>
                <VStack>
                  <VStack>
                    <Text fontSize={"lg"} fontWeight={"500"}>
                      Customers Shopped
                    </Text>
                    <Text fontSize={"sm"}>{customerCount}</Text>
                  </VStack>
                  <VStack>
                    <Text fontSize={"lg"} fontWeight={"500"}>
                      Feedbacks
                    </Text>
                    <HStack>
                      <Text fontSize={"sm"}>23</Text>
                      <Button
                        bg="white"
                        color="primary"
                        border="2px"
                        borderColor="primary"
                        size="xs"
                        ml={5}
                      >
                        View
                        <Icon as={MdNavigateNext} />
                      </Button>
                    </HStack>
                  </VStack>
                  <VStack>
                    <Text fontSize={"lg"} fontWeight={"500"}>
                      Rating
                    </Text>
                    <Text fontSize={"sm"}>5/5</Text>
                  </VStack>
                </VStack>
              </Box>
            </Flex>
          </Center>
        </ModalBody>

        <ModalFooter>
          <Button bg="primary" color="white" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AdminSuperMarkets;
