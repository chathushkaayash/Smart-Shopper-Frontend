import {
  Box,
  Center,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  VStack,
} from "@chakra-ui/react";
import ProductGrid from "../../components/ProductGrid";

import DropDown from "@/components/Buttons/DropDown";
import useProductQueryStore from "@/state-management/productQuery/store";
import useDebounce from "@/utils/useDebounce";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ConsumerHome = () => {
  return (
    <>
      <Show below="md">
        <Navbar />
      </Show>

      <Box w="100%" h="90vh" className="w-[100vw] h-[90vh] overflow-x-hidden">
        <VStack
          justifyContent="center"
          alignItems="center"
          gap={"5vh"}
          pt="5vh"
        >
          <VStack
            boxShadow={"md"}
            borderWidth={1}
            borderRadius={15}
            w="70vw"
            py={5}
            gap={5}
          >
            <SearchBar />
            <FilterProducts />
          </VStack>

          <ProductGrid />
        </VStack>
        <Footer />
      </Box>
    </>
  );
};

export default ConsumerHome;

const SearchBar = () => {
  const { productQuery, setSearchText } = useProductQueryStore();
  const [SearchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(SearchValue);

  useEffect(() => {
    setSearchText(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Center w="full">
      <InputGroup
        borderColor={productQuery.searchText !== "" ? "primary" : ""}
        w="80%"
      >
        <InputLeftElement>
          <Icon as={IoSearchSharp} color="primary" />
        </InputLeftElement>
        <Input
          value={SearchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search..."
          borderRadius="full"
          focusBorderColor="primary"
        />
      </InputGroup>
    </Center>
  );
};

const FilterProducts = () => {
  const { productQuery, setCategory, setPrice, setSortOrder } =
    useProductQueryStore();

  const filters = [
    {
      label: "Category",
      value: productQuery.category,
      values: [
        "All Categories",
        "Electronics",
        "Clothing",
        "Shoes",
        "Food",
        "Furniture",
      ],
      fn: setCategory,
    },
    {
      label: "Price",
      value: productQuery.price,
      values: [
        "Lower than Rs 250",
        "Rs 250 - Rs 500",
        "Rs 500 - Rs 1000",
        "Rs 1000 - Rs 2000",
        "Rs 2000 - Rs 5000",
        "More than Rs 5000",
      ],
      fn: setPrice,
    },
    {
      label: "Sort By",
      value: productQuery.sortOrder,
      values: [
        "Newest",
        "Oldest",
        "Best Selling",
        "Price: Low to High",
        "Price: High to Low",
      ],
      fn: setSortOrder,
    },
  ];

  return (
    <HStack w="full" gap={10} px={10}>
      {filters.map((filter) => (
        <DropDown
          key={filter.label}
          label={filter.label}
          value={filter.value || filter.values[0]}
          values={filter.values}
          onClick={(value) => filter.fn(value)}
        />
      ))}
    </HStack>
  );
};
