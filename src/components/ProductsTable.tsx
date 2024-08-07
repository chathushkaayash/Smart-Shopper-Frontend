import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
import EditItemDetails from "./EditItemDetails";
import { useState } from "react";


const productTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [selectedproducts, setSelectedproducts] = useState([]);

  // const handleDropdownToggle = () => {
  //   setDropdownOpen(!dropdownOpen);

  const [image , setImage] = useState<string>('');
  const [name , setName] = useState<string>('');
  const [description , setDescription] = useState<string>('');
  const [available , setAvailable] = useState<boolean>(true);
  // const [Price , setPrice] = useState<number>(0);
  // const [Stock , setStock] = useState<number>(0);


  const handleEdit = (product: any) => {
    setImage(product.imgSrc);
    setName(product.name);
    setDescription(product.qty);
    setAvailable(true);
    // setPrice(product.price);
    // setStock(product.stock);
    onOpen();
  }



  const products = [
    {
      id: 1,
      name: "Munchee Super Cream Cracker",
      qty: "200g",
      price: 250,
      stock: 5,
      sold: 10,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/114839--01--1623926509.webp",
    },
    {
      id: 2,
      name: "Lanka Soy",
      qty: "1L",
      price: 350,
      stock: 15,
      sold: 20,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic96986.jpg",
    },
    {
      id: 3,
      name: "Sunlight Light",
      qty: "100 bags",
      price: 500,
      stock: 10,
      sold: 30,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic116196.jpg",
    },
    {
      id: 4,
      name: "EGB ",
      qty: "500ml",
      price: 450,
      stock: 20,
      sold: 50,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic99367.jpg",
    },
    {
      id: 5,
      name: "Munchee Snack Cracker",
      qty: "100g",
      price: 150,
      stock: 25,
      sold: 40,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic19124.jpg",
    },
    {
      id: 6,
      name: "Kohomba Soap",
      qty: "1kg",
      price: 300,
      stock: 12,
      sold: 15,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic120704.jpg",
    },
    {
      id: 7,
      name: "Lisol Bathroom cleaner",
      qty: "100g",
      price: 50,
      stock: 50,
      sold: 70,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic12304.jpg",
    },
    {
      id: 8,
      name: "Small Blend Tea",
      qty: "150g",
      price: 200,
      stock: 30,
      sold: 45,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic73441.jpg",
    },
    {
      id: 9,
      name: "Ginger Buiscuits",
      qty: "500g",
      price: 600,
      stock: 18,
      sold: 25,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/ItemAsset/Pic4845.jpg",
    },
    {
      id: 10,
      name: "Preema Stella Noodles",
      qty: "250g",
      price: 400,
      stock: 8,
      sold: 12,
      imgSrc:
        "https://essstr.blob.core.windows.net/essimg/350x/Small/Pic112825.jpg",
    },
  ];

  return (
    <>
      <Box
        overflowX="auto"
        shadow="md"
        rounded="lg"
        position="relative"
        border={1}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
          py={4}
          bg="white"
        ></Box>
        <Table
          variant="simple"
          colorScheme="gray"
          width="100%"
          size="sm"
          textAlign="left"
        >
          {/* <Box as="caption" fontSize="sm" color="gray.500" ml={6} textAlign="left">Products</Box>  */}

          <Thead
            fontSize="xs"
            textTransform="uppercase"
            bg="gray.50"
            color="gray.700"
          >
            <Tr>
              <Th px={6} py={3}>
                Product Name
              </Th>
              <Th px={6} py={3}>
                Price
              </Th>
              <Th px={6} py={3}>
                Stock
              </Th>
              <Th px={6} py={3}>
                Sold
              </Th>
              <Th px={6} py={3}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody >
            {products.map((product) => (
              <Tr
                key={product.id}
                bg="white"
                borderBottom="1px"
                borderColor="gray.200"
                _hover={{
                  bg: "gray.50",
                  dark: {
                    bg: "gray.600",
                  },
                }}
              >
                <Th
                  scope="row"
                  display="flex"
                  alignItems="center"
                  px={6}
                  py={4}
                  color="gray.900"
                >
                  <Image
                    boxSize="10"
                    borderRadius="full"
                    src={product.imgSrc}
                    alt={`${product.name} image`}
                  />
                  <Box pl={3}>
                    <Text fontWeight="semibold" fontSize="base">
                      {product.name}
                    </Text>
                    <Text color="gray.500" fontWeight="normal">
                      {product.qty}
                    </Text>
                  </Box>
                </Th>
                <Td px={6} py={4}>
                  {product.price}
                </Td>
                <Td px={6} py={4}>
                  <Box display="flex" alignItems="center">
                    <Box h="2.5" w="2.5" borderRadius="full" mr={2}></Box>
                    {product.sold}
                  </Box>
                </Td>
                <Td px={6} py={4}>
                  <Box display="flex" alignItems="center">
                    <Box h="2.5" w="2.5" borderRadius="full" mr={2}></Box>
                    {product.sold}
                  </Box>
                </Td>
                <Td px={6} py={4}>
                  <Link
                    href="#"
                    display="inline-block"
                    p={1}
                    color="gray.500"
                    _hover={{
                      color: "gray.600",
                      dark: {
                        color: "gray.400",
                      },
                    }}
                  >
                    <Flex alignItems="center">
                      <Icon as={FaEdit} onClick={() => handleEdit(product)}/>
                    </Flex>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>


      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'} >
        <ModalOverlay />
        <ModalContent borderRadius={15}>
          <ModalHeader>Edit Item Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditItemDetails Price={10} Stock={20} image={image} name={name} description={description} available={available} />
            
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
      
      
    </>
  );
};

export default productTable;
