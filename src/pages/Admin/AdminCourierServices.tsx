import ActionButton from "@/components/Buttons/ActionButton";
import RatingStars from "@/components/Inputs/Rating";
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
import { AiOutlineFieldNumber } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { IoBusiness, IoCall } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
// import LineChart from "../../components/Charts/LineChart";
import { IoStarSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import useDrivers from "@/services/Driver/useDrivers";
import { Driver } from "@/services/types";
import useOpportunities, { OpportunityQuery } from "@/hooks/useOpportunities";
import BarGraph from "@/components/Charts/BarGraph";
import { getImageUrl } from "@/lib/utils";
const AdminCourierServices = () => {
  const drivers = useDrivers();
  console.log("drivers", drivers.data?.results);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDriver, setSelecteddriver] = useState<Driver | null>();
  const [visibleRows, setVisibleRows] = useState(5);

  const handleClickMore = () => {
    setVisibleRows(visibleRows + 3);
  };

  console.log("drivers", drivers.data?.results);
  const driverArray = drivers.data?.results;
  console.log("driverArray", driverArray);

  const companyImages: Record<string, string> = {
    USPS: "https://www.savethepostoffice.com/wp-content/uploads/2024/08/USPS-logo.jpg",
    DHL: "https://logodownload.org/wp-content/uploads/2015/12/dhl-logo-2.png",
    WeCourier:
      "https://logo.com/image-cdn/images/kts928pd/production/9abf4e49d08444bee7a8f1f9c22f6cb9864563de-408x408.png?w=1080&q=72&fm=webp ",
    FedEx:
      "https://lh3.googleusercontent.com/YtXTsa-6SaaMl02-OUo8iRztlX5Thu4aCLavunIV1M5hm9y4ySTPpMjpY44fL4ayz7Se",
  };

  const companyMap = new Map<string, { profilePic: string; count: number }>();
  drivers.data?.results.forEach((item) => {
    const company = item.courierCompany || "Promt";
    const profilePic =
      companyImages[company] || "https://via.placeholder.com/150";

    if (companyMap.has(company)) {
      const data = companyMap.get(company)!;
      companyMap.set(company, {
        profilePic: companyImages[company],
        count: data.count + 1,
      });
    } else {
      companyMap.set(company, { profilePic, count: 1 });
    }
  });

  const companyDriverCounts = Array.from(companyMap).map(([name, data]) => ({
    name,
    ...data,
  }));

  console.log("companyDriverCounts", companyDriverCounts);

  const opportunityQuery: OpportunityQuery = {
    status: "",
    month: "",
    limit: 10,
  };

  const opportunityData = useOpportunities(opportunityQuery);
  console.log("opportunityData", opportunityData.data?.results);

  //nned to take cost , driver id from opportunityData and match with driverArray to get the company name
  const courierEarningData = opportunityData.data?.results.reduce(
    (acc, opportunity) => {
      const driver = driverArray?.find(
        (driver) => driver.id === opportunity.driverId
      );
      const company = driver?.courierCompany || "Unknown Company";
      const deliveryCost = opportunity.deliveryCost || 0; // Default to 0 if undefined
      acc[company] = (acc[company] || 0) + deliveryCost;
      return acc;
    },
    {} as Record<string, number>
  );

  const labels = Object.keys(courierEarningData || {});
  console.log("Labels:", labels);
  if (labels.length === 0) {
    console.warn("No labels found.");
  }
  const data = courierEarningData
    ? labels.map((label) => courierEarningData[label])
    : [];

  console.log("Data:", data);
  console.log("labels", labels);

  const driverBoxRef = useRef<HTMLDivElement>(null);
  const scrollToBox = () => {
    driverBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const deliveryPersonPopup = [
    [
      {
        icon: <Icon as={SiCashapp} boxSize={5} color={"primary"} />,
        title: "Earning",
        value: `${(Math.random() * 4000).toFixed(0)}`,
      },
      {
        icon: <Icon as={MdFeedback} boxSize={5} color={"primary"} />,
        title: "Feedbacks",
        value: `${(Math.random() * 30).toFixed(0)}`,
      },
    ],
    [
      {
        icon: <Icon as={TbTruckDelivery} boxSize={6} color={"primary"} />,
        title: "Deliveries",
        value: `${(Math.random() * 20).toFixed(0)}`,
      },
      {
        icon: <Icon as={IoStarSharp} boxSize={6} color={"primary"} />,
        title: "Ratings",
        value: `${(Math.random() * 5).toFixed(1)}/5`,
      },
    ],
    [
      {
        icon: <Icon as={IoIosColorPalette} boxSize={6} color={"primary"} />,
        title: "Vehicle Color",
        value: selectedDriver?.vehicleColor,
      },
      {
        icon: <Icon as={AiOutlineFieldNumber} boxSize={6} color={"primary"} />,
        title: "Vehicle Number",
        value: selectedDriver?.vehicleNumber,
      },
    ],
  ];

  const handleEditClick = (driver: Driver) => {
    setSelecteddriver(driver);
    onOpen();
  };

  return (
    <>
      <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
        <Flex w="full" gap={5}>
          {/* ------- Courier Company Earnings ------- */}
          <Box p={5} shadow="md" borderWidth="1px" w="52%" borderRadius={15}>
            <Heading size="md">Courier Company Earnings</Heading>

            <BarGraph chartData={data} labels={labels} />
          </Box>

          {/* ------- Number of Drivers Card ------- */}
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            w="48%"
            borderRadius={15}
            display="flex"
            flexDirection="column"
          >
            <Heading size="md">Number of Drivers</Heading>
            <VStack mt={5} flex="1" spacing={4}>
              {companyDriverCounts &&
                companyDriverCounts.slice(0, 3).map((company, index) => (
                  <HStack
                    key={index}
                    w="full"
                    px="1vw"
                    h="10vh"
                    rounded={10}
                    borderWidth="1px"
                    borderColor="background"
                    shadow="md"
                  >
                    <Image
                      src={companyImages[company.name]}
                      alt="Product Image"
                      boxSize="40px"
                      objectFit="cover"
                    />
                    <Text ml="0.3rem">{company.name}</Text>
                    <Text ml="auto">{company.count}</Text>
                  </HStack>
                ))}
            </VStack>
            <ActionButton
              inverted={true}
              className="!w-full mt-5"
              onClick={scrollToBox}
            >
              View All
            </ActionButton>
          </Box>
        </Flex>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          w="full"
          borderRadius={15}
          ref={driverBoxRef}
        >
          <Flex justifyContent="space-between" px={20} py={10}>
            <Heading as="h3" size="md">
              Delivery Person Details
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
              {/* <ActionButton url="/addcustomer">Add Customer</ActionButton> */}
            </Flex>
          </Flex>

          <TableContainer
            width={{ base: "100%", lg: "90%" }}
            ml={{ base: "0%", lg: "5%" }}
          >
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Contact Number</Th>
                  <Th>Company</Th>
                  <Th>Vehicle Type</Th>
                  <Th>Vehicle Model</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {driverArray &&
                  Array.isArray(driverArray) &&
                  driverArray.slice(0, visibleRows).map((driver) => (
                    <Tr>
                      <Td>
                        <HStack>
                          <Image
                            src={"https://via.placeholder.com/150"} //{driver.user.profilePic}
                            alt="driver Image"
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="50%"
                            mr={4}
                          />
                          <Text>{driver.user.name}</Text>
                        </HStack>
                      </Td>
                      <Td>{driver.user.number}</Td>
                      <Td>{driver.courierCompany}</Td>
                      <Td>{driver.vehicleType}</Td>
                      <Td>{driver.vehicleName}</Td>
                      <Td>
                        <Button
                          bg="primary"
                          size="sm"
                          onClick={() => handleEditClick(driver)}
                        >
                          View More
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
          {driverArray &&
            visibleRows < driverArray.length && ( // Show button only if more items exist
              <Button
                size="md"
                mt={8}
                fontWeight="bold"
                bg="background"
                onClick={handleClickMore}
              >
                More
              </Button>
            )}
        </Box>

        {/* 
          Modal for viewing more details of the delivery person
         */}
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius={15}>
            <ModalHeader>
              <VStack borderBottomWidth={"1px"} p={2}>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="50%"
                  mr={4}
                />
                <Text fontSize={"xl"}>{selectedDriver?.user.name}</Text>
                <Flex>
                  <Icon as={IoBusiness} boxSize={5} color={"primary"} />
                  <Text fontSize={"sm"} ml={2}>
                    {selectedDriver?.courierCompany}
                  </Text>
                </Flex>

                <RatingStars value={4} />
                <HStack>
                  <Icon as={IoCall} boxSize={4} color={"primary"} />
                  <Text fontSize="sm">{selectedDriver?.user.number}</Text>
                </HStack>
              </VStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack gap="4vh">
                {deliveryPersonPopup.map((row, index) => (
                  <HStack w="80%" justifyContent="space-between" key={index}>
                    {/* ----------- One Description ----------- */}
                    {row.map((option, index) => (
                      <HStack gap={4} key={index}>
                        <Box w="1.5vw">{option.icon}</Box>
                        <Box w="6rem">
                          <Text fontSize={"lg"} fontWeight={"500"}>
                            {option.title}
                          </Text>
                          <Text fontSize={"sm"}>{option.value}</Text>
                        </Box>
                      </HStack>
                    ))}
                  </HStack>
                ))}
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Center w="full">
                <Button bg="primary" color="white" onClick={onClose}>
                  Close
                </Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </>
  );
};

export default AdminCourierServices;
