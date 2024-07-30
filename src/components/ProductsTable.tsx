import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Image,
  Link,
  Icon,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter

} from "@chakra-ui/react";
import { Badge } from "flowbite-react";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
import EditItemDetails from "./EditItemDetails";
import { Button, useDisclosure } from "@chakra-ui/react";


const productTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedproducts, setSelectedproducts] = useState([]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
      name: "Kist Mango Juice",
      qty: "1L",
      price: 350,
      stock: 15,
      sold: 20,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/104839--01--1623926509.webp",
    },
    {
      id: 3,
      name: "Ceylon Tea Bags",
      qty: "100 bags",
      price: 500,
      stock: 10,
      sold: 30,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/110839--01--1623926509.webp",
    },
    {
      id: 4,
      name: "Nestle Milk Powder",
      qty: "400g",
      price: 450,
      stock: 20,
      sold: 50,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/102839--01--1623926509.webp",
    },
    {
      id: 5,
      name: "Lays Potato Chips",
      qty: "100g",
      price: 150,
      stock: 25,
      sold: 40,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/115839--01--1623926509.webp",
    },
    {
      id: 6,
      name: "Sunlight Detergent Powder",
      qty: "1kg",
      price: 300,
      stock: 12,
      sold: 15,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/106839--01--1623926509.webp",
    },
    {
      id: 7,
      name: "Lifebuoy Soap",
      qty: "100g",
      price: 50,
      stock: 50,
      sold: 70,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/103839--01--1623926509.webp",
    },
    {
      id: 8,
      name: "Colgate Toothpaste",
      qty: "150g",
      price: 200,
      stock: 30,
      sold: 45,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/115464--01--1623926539.webp",
    },
    {
      id: 9,
      name: "Milo Energy Drink",
      qty: "500g",
      price: 600,
      stock: 18,
      sold: 25,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/108839--01--1623926509.webp",
    },
    {
      id: 10,
      name: "Anchor Butter",
      qty: "250g",
      price: 400,
      stock: 8,
      sold: 12,
      imgSrc:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/109839--01--1623926509.webp",
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
                      <Icon as={FaEdit} onClick={onOpen}/>
                    </Flex>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>


      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditItemDetails Price={10} Stock={20} />
            
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
