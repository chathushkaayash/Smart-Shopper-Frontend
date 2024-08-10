import SubmitButton from "@/components/Buttons/SubmitButton";
import useProduct, { Product } from "@/hooks/useProduct";
import useSupermarketItems, {
  SupermarketItem,
} from "@/hooks/useSupermarketItems";
import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
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
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "reactjs-popup/dist/index.css";
import ProductPreviewCard from "./ProductPreviewCard";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/services/api-client";

const apiClient = new APIClient("/supermarketitems");

const SupermarketManagerProductTable = () => {
  const supermarketItems = useSupermarketItems();
  const queryClient = useQueryClient();

  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [selectedSupermarketItem, setSelectedSupermarketItem] =
    useState<SupermarketItem>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutate } = useMutation({
    mutationFn: () =>
      apiClient.create(selectedSupermarketItem).then(() => {
        queryClient.invalidateQueries({ queryKey: ["store_prices_for_product"] });
        onClose();
      }),
  });

  const handleEdit = (supermarketItem: SupermarketItem, product: Product) => {
    setSelectedSupermarketItem(supermarketItem);
    setSelectedProduct(product);
    onOpen();
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
              <Th px={6} py={3}>
                Sold
              </Th>
              <Th px={6} py={3}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {supermarketItems.data?.results.map((supermarketItem, index) => (
              <ProductRow
                key={index}
                supermarketItem={supermarketItem}
                handleEdit={handleEdit}
              />
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
            <ProductPreviewCard
              image={selectedProduct?.imageUrl || ""}
              name={selectedProduct?.name || ""}
              description={selectedProduct?.description || ""}
              available={(selectedSupermarketItem?.availableQuantity || 0) > 0}
            />
            <Box className="border" borderRadius={7}>
              <div className="edit-item-details p-5">
                <Text mb="8px">Price</Text>
                <Input
                  variant="filled"
                  value={selectedSupermarketItem?.price}
                  onChange={(e) =>
                    setSelectedSupermarketItem({
                      ...(selectedSupermarketItem as SupermarketItem),
                      price: Number(e.target.value),
                    })
                  }
                />
                <Text mb="8px">Stock</Text>
                <Input
                  variant="filled"
                  value={selectedSupermarketItem?.availableQuantity}
                  onChange={(e) =>
                    setSelectedSupermarketItem({
                      ...(selectedSupermarketItem as SupermarketItem),
                      availableQuantity: Number(e.target.value),
                    })
                  }
                />
              </div>
            </Box>
            <SubmitButton className="mt-5 mb-5" onClick={mutate}>
              Save
            </SubmitButton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

interface ProductRowProps {
  handleEdit: (supermarketItem: SupermarketItem, product: Product) => void;
  supermarketItem: SupermarketItem;
}

const ProductRow = ({ supermarketItem, handleEdit }: ProductRowProps) => {
  const product = useProduct(supermarketItem.productId);

  return (
    <>
      <Tr
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
            src={product.data?.imageUrl}
            alt={`${product.data?.name} image`}
          />
          <Box pl={3}>
            <Text fontWeight="semibold" fontSize="base">
              {product.data?.name}
            </Text>
          </Box>
        </Th>
        <Td px={6} py={4}>
          Rs. {supermarketItem.price}
        </Td>
        <Td px={6} py={4}>
          <Box display="flex" alignItems="center">
            <Box h="2.5" w="2.5" borderRadius="full" mr={2}></Box>
            {supermarketItem.availableQuantity}
          </Box>
        </Td>
        <Td px={6} py={4}>
          <Box display="flex" alignItems="center">
            <Box h="2.5" w="2.5" borderRadius="full" mr={2}></Box>
            {/* {product.sold} */}
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
              <Icon
                as={FaEdit}
                onClick={() =>
                  handleEdit(supermarketItem, product.data as Product)
                }
              />
            </Flex>
          </Link>
        </Td>
      </Tr>
    </>
  );
};

export default SupermarketManagerProductTable;
