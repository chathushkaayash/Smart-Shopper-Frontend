import { Box, Input, Text } from '@chakra-ui/react';
import SubmitButton from './Buttons/SubmitButton';
import ProductPreviewCard from './ProductPreviewCard';
interface props {
    // Define the props for the component here
    Price: number;
    Stock: number;
}

const EditItemDetails  = ({Price , Stock}:props) => {

   
  console.log(Price, Stock);
    

    return (
        <>
        
        <Box className='border rounded' borderRadius='lg'>
            <ProductPreviewCard image='https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/114839--01--1623926509.webp' name='Munchee Super Cream Cracker' description='200g' available={true} />
            {/* Add your JSX code here */}
            <div className="edit-item-details p-5">
            <Text mb='8px'>Price</Text>
            <Input variant='filled' placeholder='Enter New Price' />
            <Text mb='8px'>Stock</Text>
            <Input variant='filled' placeholder='Enter Stock' />
            </div>

        </Box>
                <SubmitButton  className='mt-5 mb-5' >Save</SubmitButton>
                </>

        
    );
};

export default EditItemDetails;