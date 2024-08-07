import Logo from '@/assets/logo.svg';
import SubmitButton from '@/components/Buttons/SubmitButton';
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { PiNotepad } from "react-icons/pi";
import { useReactToPrint } from 'react-to-print';
import DetailsBox from "../DetailsBox";
import ProductList from "../productList";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   status: string;
//   image: string;
//   qty: number;

// }

// interface Order {
//   orderid: number;
//   dateAndTime: string;
//   Status: string;
//   customerName: string;
//   customerEmail: string;
//   Collection: string;
//   Price: number;
//   imgSrc: string;
//   productList: Product[];
// }
  
  const OrderItems = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [orderId] = useState<string>("ORD123");
    const [orderPlacedOn] = useState<string>("2021-10-20");
    const [customer] = useState<string>("John Doe");
    const [contact] = useState<string>("0771234567");
    const [orderCost] = useState<string>("LKR 1000.00");

    // const openPopUp = (products: Product[] , order: Order) => {
    
    //   onOpen();
    // };

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
  
    
  
    // const navigate = useNavigate();
    // function orderNavigate(id : number) {
    //   navigate(`/order/${id}`);
    // }




    const selectedProducts = [
              { id: 1, name: "Munchee Super Cream Cracker", price: 10, status: "active" , image: "https://via.placeholder.com/50", qty: 10},
              { id: 2, name: "Product 2", price: 1, status: "inactive" , image: "https://via.placeholder.com/50", qty: 1},
              { id: 3, name: "Product 3", price: 1, status: "active" ,image: "https://via.placeholder.com/50", qty: 1},
              { id: 4, name: "Product 4", price: 4, status: "inactive" ,  image: "https://via.placeholder.com/50", qty: 1},
              { id: 5, name: "Product 5", price: 1, status: "active"  , image: "https://via.placeholder.com/50", qty: 1},
              { id: 6, name: "Product 6", price: 1, status: "inactive" , image: "https://via.placeholder.com/50", qty: 1},
          ];
    
  
    // const items = [
    //   {
    //     image: "https://via.placeholder.com/50",
    //     name: "Munchee Super Cream Cracker",
    //     price: 145,
    //     qty: 10,
    //     supermarketLogo: "https://via.placeholder.com/50",
    //   },
    //   {
    //     image: "https://via.placeholder.com/50",
    //     name: "Gradient Graphic T-shirt",
    //     price: 145,
    //     qty: 1,
    //     supermarketLogo: "https://via.placeholder.com/50",
    //   },
    // ];
  
    return (
      <>
      <Box
        bg="white"
        boxShadow="md"
        borderRadius="24"
        pt={7}
        pb={10}
        pl={20}
        pr={20}
        width="100%"
        maxWidth="1200px"
        mx="auto"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="xl" fontWeight="bold" mb={4} color="primary">
          Order Items
        </Text>
        <Flex align="center" gap={4}>
                <Button
                  size="md"
                  color="primary"
                  bg="white"
                  borderWidth={2}
                  borderColor="primary"
                  borderRadius={10}
                  _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                  _active={{
                    bg: "#E46C0A",
                    color: "#FFFFFF",
                    transform: "scale(0.98)",
                    borderColor: "#E46C0A",
                  }}
                  onClick={() => onOpen()}
                >
                  <PiNotepad size={21} />
                  Print
                </Button>
              </Flex>
              </Flex>

        {selectedProducts.map((item, index) => (
          <Flex
            p={4}
            key={index}
            bg="background"
            borderRadius={10}
            alignItems="center"
            justifyContent="space-between"
            mb={4}
          >
            <Flex alignItems="center">
              <Image
                src={item.image}
                alt={item.name}
                boxSize="50px"
                borderRadius="md"
                mr={4}
              />
              <Box>
                <Text fontWeight="bold">{item.name}</Text>
                <Text color="gray.500">{item.price} LKR</Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Text>{item.qty}</Text>
              
            </Flex>
          </Flex>
        ))}
        <Flex justifyContent="flex-end">
            <Button colorScheme="primary" size="sm">
                Complete Order
            </Button>
        </Flex>
        {/* Add Product Review Modal */}
       
          
      </Box>

      {/* --------------------- print order ------------------------- */}
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl" >
          <ModalHeader display="flex" justifyContent="center" alignItems="center">
            <Image src={Logo} alt="logo" width={50} height={50} />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={componentRef}>
            <Divider mt={0} mb={3} />
            <Flex justify={'space-between'}>
            <Text fontSize="xl" mb={4} textAlign="center" fontWeight={600}>Product List</Text>
            
            </Flex>
            <DetailsBox orderId={orderId} orderPlacedOn={orderPlacedOn} customer={customer} contact={contact} orderCost={orderCost}/>
            <ProductList productList={selectedProducts}  />
          </ModalBody>
          <ModalFooter>
            <SubmitButton onClick={handlePrint}>Print</SubmitButton>
          </ModalFooter>
        </ModalContent>
      </Modal>

      
      </>
    );
  };
  
  export default OrderItems;
  