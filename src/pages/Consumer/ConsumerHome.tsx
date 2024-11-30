import { Box, HStack, Show, VStack } from "@chakra-ui/react";
import ProductGrid from "../../components/ProductGrid";

import DropDown from "@/components/Buttons/DropDown";
import SearchBar from "@/components/SearchBar";
import useProductQueryStore from "@/state-management/productQuery/store";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ConsumerHome = () => {
  const { productQuery, setSearchText } = useProductQueryStore();

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
            w={"75%"}
            boxShadow={"md"}
            borderWidth={1}
            borderRadius={15}
            py={5}
            gap={5}
          >
            <SearchBar
              value={productQuery.searchText || ""}
              setValue={setSearchText}
            />
            <FilterProducts />
          </VStack>
          <Box>
            <ProductGrid />
          </Box>
        </VStack>
        <Footer />
      </Box>
    </>
  );
};

export default ConsumerHome;

const FilterProducts = () => {
  const { productQuery, setCategory, setPrice, setSortOrder } =
    useProductQueryStore();

  const filters = [
    {
      label: "Category",
      value: productQuery.category,
      values: [
        "All Categories",
        "Condiment",
        "Drinks",
        "Baking",
        "Food",
        "Decorative Accessories",
        "Household & Cleaning Supplies",
        "Electronics",
        "Clothing",
        "Shoes",
        "Furniture",
      ],
      fn: setCategory,
    },
    {
      label: "Price",
      value: productQuery.price,
      values: [
        "All",
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
        // "Best Selling",
        "Price: Low to High",
        "Price: High to Low",
      ],
      fn: setSortOrder,
    },
  ];

  return (
    <HStack
      w="full"
      gap={10}
      px={10}
      flexDirection={{ base: "column", md: "row" }}
    >
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
