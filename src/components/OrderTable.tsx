import Logo from '@/assets/logo.svg';
import SubmitButton from '@/components/Buttons/SubmitButton';
import {
  Badge,
  Box,
  Divider,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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
import { useState } from "react";
import DetailsBox from './DetailsBox';
import ProductList from './productList';
// import ProductList from './ProductList';

interface Product {
  id: number;
  name: string;
  price: number;
  status: string;
}

interface Order {
  orderid: number;
  dateAndTime: string;
  Status: string;
  customerName: string;
  customerEmail: string;
  Collection: string;
  Price: number;
  imgSrc: string;
  productList: Product[];
}

const ProductTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderId, setOrderId] = useState<string>("");
  const [orderPlacedOn, setOrderPlacedOn] = useState<string>("");
  const [customer, setCustomer] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [orderCost, setOrderCost] = useState<string>("");


  const openPopUp = (products: Product[] , order: Order) => {
    setSelectedProducts(products);
    setOrderId(order.orderid.toString());
    setOrderPlacedOn(order.dateAndTime);
    setCustomer(order.customerName);
    setContact(order.customerEmail);
    setOrderCost(order.Price.toString());
  
    onOpen();
  };

  const data: Order[] = [
    {
        orderid: 1,
        dateAndTime: "2024-07-22",
        Status: "shipped",
        customerName: "Kamal Amaraweera",
        customerEmail: "kamal@example.com",
        Collection: "pick",
        Price: 1000,
        imgSrc: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/114839--01--1623926509.webp",
        productList: [
            { id: 1, name: "test one", price: 100, status: "active" },
            { id: 2, name: "Product 2", price: 200, status: "inactive" },
            { id: 3, name: "Product 3", price: 300, status: "active" },
            { id: 4, name: "Product 4", price: 400, status: "inactive" },
            { id: 5, name: "Product 5", price: 500, status: "active" },
            { id: 6, name: "Product 6", price: 600, status: "inactive" },
            { id: 7, name: "Product 7", price: 700, status: "active" },
            { id: 8, name: "Product 8", price: 800, status: "inactive" },
            { id: 9, name: "Product 9", price: 900, status: "active" },
            { id: 10, name: "Product 10", price: 1000, status: "inactive" }
        ]
    },
    {
        orderid: 2,
        dateAndTime: "2024-07-22",
        Status: "processing",
        customerName: "Nimal Perera",
        customerEmail: "nimal@example.com",
        Collection: "delivery",
        Price: 1000,
        imgSrc: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/114839--01--1623926509.webp",
        productList: [
            { id: 1, name: "Product 1", price: 100, status: "active" },
            { id: 2, name: "Product 2", price: 200, status: "inactive" },
            { id: 3, name: "Product 3", price: 300, status: "active" },
            { id: 4, name: "Product 4", price: 400, status: "inactive" },
            { id: 5, name: "Product 5", price: 500, status: "active" },
            { id: 6, name: "Product 6", price: 600, status: "inactive" },
            { id: 7, name: "Product 7", price: 700, status: "active" },
            { id: 8, name: "Product 8", price: 800, status: "inactive" },
            { id: 9, name: "Product 9", price: 900, status: "active" },
            { id: 10, name: "Product 10", price: 1000, status: "inactive" }
        ]
    },
    {
        orderid: 3,
        dateAndTime: "2024-07-22",
        Status: "delivered",
        customerName: "Sunil Fernando",
        customerEmail: "sunil@example.com",
        Collection: "delivery",
        Price: 1000,
        imgSrc: "https://thumbs.dreamstime.com/b/portrait-young-brutal-african-american-man-applying-facial-cream-his-cheek-close-up-portrait-men-s-beauty-skin-care-portrait-185903653.jpg",
        productList: [
            { id: 1, name: "Product 1", price: 100, status: "active" },
            { id: 2, name: "Product 2", price: 200, status: "inactive" },
            { id: 3, name: "Product 3", price: 300, status: "active" },
            { id: 4, name: "Product 4", price: 400, status: "inactive" },
            { id: 5, name: "Product 5", price: 500, status: "active" },
            { id: 6, name: "Product 6", price: 600, status: "inactive" },
            { id: 7, name: "Product 7", price: 700, status: "active" },
            { id: 8, name: "Product 8", price: 800, status: "inactive" },
            { id: 9, name: "Product 9", price: 900, status: "active" },
            { id: 10, name: "Product 10", price: 1000, status: "inactive" }
        ]
    },
    {
        orderid: 4,
        dateAndTime: "2024-07-22",
        Status: "cancelled",
        customerName: "Rohan Silva",
        customerEmail: "rohan@example.com",
        Collection: "pick",
        Price: 1000,
        imgSrc: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/114839--01--1623926509.webp",
        productList: [
            { id: 1, name: "Product 1", price: 100, status: "active" },
            { id: 2, name: "Product 2", price: 200, status: "inactive" },
            { id: 3, name: "Product 3", price: 300, status: "active" },
            { id: 4, name: "Product 4", price: 400, status: "inactive" },
            { id: 5, name: "Product 5", price: 500, status: "active" },
            { id: 6, name: "Product 6", price: 600, status: "inactive" },
            { id: 7, name: "Product 7", price: 700, status: "active" },
            { id: 8, name: "Product 8", price: 800, status: "inactive" },
            { id: 9, name: "Product 9", price: 900, status: "active" },
            { id: 10, name: "Product 10", price: 1000, status: "inactive" }
        ]
    },
    {
        orderid: 5,
        dateAndTime: "2024-07-22",
        Status: "returned",
        customerName: "Amara Jayasuriya",
        customerEmail: "amara@example.com",
        Collection: "pick",
        Price: 1000,
        imgSrc: "https://thumbs.dreamstime.com/b/portrait-young-brutal-african-american-man-applying-facial-cream-his-cheek-close-up-portrait-men-s-beauty-skin-care-portrait-185903653.jpg",
        productList: [
            { id: 1, name: "Product 1", price: 100, status: "active" },
            { id: 2, name: "Product 2", price: 200, status: "inactive" },
            { id: 3, name: "Product 3", price: 300, status: "active" },
            { id: 4, name: "Product 4", price: 400, status: "inactive" },
            { id: 5, name: "Product 5", price: 500, status: "active" },
            { id: 6, name: "Product 6", price: 600, status: "inactive" },
            { id: 7, name: "Product 7", price: 700, status: "active" },
            { id: 8, name: "Product 8", price: 800, status: "inactive" },
            { id: 9, name: "Product 9", price: 900, status: "active" },
            { id: 10, name: "Product 10", price: 1000, status: "inactive" }
        ]
    },
    {
        orderid: 6,
        dateAndTime: "2024-07-22",
        Status: "in transit",
        customerName: "Lakmal Dias",
        customerEmail: "lakmal@example.com",
        Collection: "pick",
        Price: 1000,
        imgSrc: "https://thumbs.dreamstime.com/b/portrait-young-brutal-african-american-man-applying-facial-cream-his-cheek-close-up-portrait-men-s-beauty-skin-care-portrait-185903653.jpg",
        productList: [
            { id: 1, name: "Product 1", price: 100, status: "active" },
            { id: 2, name: "Product 2", price: 200, status: "inactive" },
            { id: 3, name: "Product 3", price: 300, status: "active" },
            { id: 4, name: "Product 4", price: 400, status: "inactive" },
            { id: 5, name: "Product 5", price: 500, status: "active" },
            { id: 6, name: "Product 6", price: 600, status: "inactive" },
            { id: 7, name: "Product 7", price: 700, status: "active" },
            { id: 8, name: "Product 8", price: 800, status: "inactive" },
            { id: 9, name: "Product 9", price: 900, status: "active" },
            { id: 10, name: "Product 10", price: 1000, status: "inactive" }
        ]
    }
];

  return (
    <>
      <Box overflowX="auto" shadow="md" rounded="lg" border={1}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
          py={4}
          bg="white"
        ></Box>
        <Table variant="simple" colorScheme="gray" width="100%" size="sm" textAlign="left">
          <Thead fontSize="xs" textTransform="uppercase" bg="gray.50" color="gray.700">
            <Tr>
              <Th px={6} py={3}>Order</Th>
              <Th px={6} py={3}>Date Time</Th>
              <Th px={6} py={3}>Status</Th>
              <Th px={6} py={3}>Customer</Th>
              <Th px={6} py={3}>Collection</Th>
              <Th px={6} py={3}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((order) => (
              <Tr
                key={order.orderid}
                bg="white"
                borderBottom="1px"
                borderColor="gray.200"
                _hover={{ bg: "gray.50" }}
              >
                <Td px={6} py={4}>{order.orderid}</Td>
                <Td px={6} py={4}>{order.dateAndTime}</Td>
                <Td px={6} py={4}>{order.Status}</Td>
                <Th scope="row" display="flex" alignItems="center" px={6} py={4} color="gray.900">
                  <Image boxSize="10" borderRadius="full" src={order.imgSrc} alt={`${order.customerName} image`} />
                  <Box pl={3}>
                    <Text fontWeight="semibold" fontSize="base">{order.customerName}</Text>
                    <Text color="gray.500" fontWeight="normal">{order.customerEmail}</Text>
                  </Box>
                </Th>
                <Td px={6} py={4}>{order.Collection}</Td>
                <Td px={6} py={4}>
                  <Link href="#" onClick={() => openPopUp(order.productList , order)}>
                    <Badge bg="primary" textColor="white" p={1} px={4} borderRadius="20">
                      <Text>View Order</Text>
                    </Badge>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader display="flex" justifyContent="center" alignItems="center">
            <Image src={Logo} alt="logo" width={50} height={50} />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Divider mt={3} mb={3} />
            <Text fontSize="xl" mb={4} textAlign="center" fontWeight={600}>Product List</Text>
            <DetailsBox orderId={orderId} orderPlacedOn={orderPlacedOn} customer={customer} contact={contact} orderCost={orderCost}/>
            <ProductList productList={selectedProducts}  />
          </ModalBody>
          <ModalFooter>
            <SubmitButton>Save</SubmitButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductTable;
