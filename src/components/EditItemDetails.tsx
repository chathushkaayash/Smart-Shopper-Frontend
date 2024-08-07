import { Box, Input, Text } from '@chakra-ui/react';
import SubmitButton from './Buttons/SubmitButton';
import ProductPreviewCard from './ProductPreviewCard';
interface props {
    // Define the props for the component here
    Price: number;
    Stock: number;
    image: string;
    name: string;
    description: string;
    available: boolean;
}

const EditItemDetails  = ({Price , Stock , image , name , description, available}:props) => {

   
  console.log(Price, Stock);
    

    return (
        <>
        
        <Box className='border' borderRadius={7}>
            <ProductPreviewCard image={image} name={name} description={description} available={available} />
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