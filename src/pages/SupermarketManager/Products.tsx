import MainContainer from "@/components/MainContainer";
import ProductsTable from "@/components/ProductsTable";
import { Text } from "@chakra-ui/react";

const ProductDetails = () => {
    return (
        <>
            <MainContainer>
                <Text fontSize="2xl" fontWeight="semibold" mb={4}>
                    Product Details 
                </Text>
                <ProductsTable />
            </MainContainer>
        </>
    );
};

export default ProductDetails;