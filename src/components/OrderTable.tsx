import {
  Badge,
  Box,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


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

  // const componentRef = useRef(null);
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });


  

  const navigate = useNavigate();
  function orderNavigate(id : number) {
    navigate(`/order/${id}`);
  }



  


  const data: Order[] = [
    {
        orderid: 1,
        dateAndTime: "2024-07-22",
        Status: "Not packed",
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
        Status: "Not packed",
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
        Status: "Packed",
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
        Status: "Packed",
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
        Status: "Packed",
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
        Status: "Packed",
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
        {/* <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
          py={4}
          bg="white"
        >Orders - 1</Box> */}
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
                <Th px={6} py={4}>
                  
                    <Text fontWeight="semibold" fontSize="base">{order.customerName}</Text>
                    
                 
                </Th>
                <Td px={6} py={4}>{order.Collection}</Td>
                <Td px={6} py={4}>
                  {/* onclick navigate to /order/id */}
                  <Link onClick={() => orderNavigate(order.orderid)}>
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

      
    </>
  );
};

export default ProductTable;
