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
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
// import EditItemDetails from "./EditItemDetails";
// import {  useState } from "react";

import useSupermarketProducts from "@/hooks/useSupermarketProducts";
import useProduct from "@/services/Products/useProduct";
import useAuthStore from "@/state-management/auth/store";

const productTable = () => {
  const { isOpen,  onClose } = useDisclosure();

  // const [image, setImage] = useState<string>("");
  // const [name, setName] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const [available, setAvailable] = useState<boolean>(true);
  // const [Price , setPrice] = useState<number>(0);
  // const [Stock , setStock] = useState<number>(0);

  // const handleEdit = (product: any) => {
  //   setImage(product.imgSrc);
  //   setName(product.name);
  //   setDescription(product.qty);
  //   setAvailable(true);
  //   onOpen();
  // };
  const { user } = useAuthStore();
  console.log(user?.id);
  const productsList = useSupermarketProducts(1);
  const products = productsList.data?.results || [];

  const setItemDetails = (id: number) => {
    const product = useProduct([id])[0].data;
    console.log(product);
    return product;
  };

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
              {/* <Th px={6} py={3}>
                Sold
              </Th> */}
              <Th px={6} py={3}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
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
                    src={setItemDetails(product.productId)?.imageUrl}
                    alt={`${product.id} image`}
                  />
                  <Box pl={3}>
                    <Text fontWeight="semibold" fontSize="base">
                      {setItemDetails(product.productId)?.name}
                    </Text>
                    {/* <Text color="gray.500" fontWeight="normal">
                      {product.availableQuantity}
                    </Text> */}
                  </Box>
                </Th>
                <Td px={6} py={4}>
                  {product.price}
                </Td>
                <Td px={6} py={4}>
                  <Box display="flex" alignItems="center">
                    <Box h="2.5" w="2.5" borderRadius="full" mr={2}></Box>
                    {product.availableQuantity}
                  </Box>
                </Td>
                {/* <Td px={6} py={4}>
                  <Box display="flex" alignItems="center">
                    <Box h="2.5" w="2.5" borderRadius="full" mr={2}></Box>
                    {product.availableQuantity}
                  </Box>
                </Td> */}
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
                      {/* <Icon as={FaEdit} onClick={() =>  handleEdit(product)} /> */}
                      <Icon as={FaEdit} />
                    </Flex>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"2xl"}
      >
        <ModalOverlay />
        <ModalContent borderRadius={15}>
          <ModalHeader>Edit Item Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <EditItemDetails
              Price={10}
              Stock={20}
              image={image}
              name={name}
              description={description}
              available={available}
            /> */}
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
