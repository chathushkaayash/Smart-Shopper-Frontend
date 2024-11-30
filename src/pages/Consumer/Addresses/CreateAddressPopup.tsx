import MiddleContainer from "@/components/Containers/MiddleContainer";
import useCreateConsumerAddress, {
  AddressInsert,
} from "@/services/Addresses/useCreateConsumerAddress";
import { Box, Button, Heading, Input, InputGroup } from "@chakra-ui/react";
import { Label } from "flowbite-react";
import { useState } from "react";

const CreateAddressPopup = () => {
  const [addressInsert, setAddressInsert] = useState<AddressInsert>({
    addressName: "",
    address: "",
    city: "",
    location: "",
    priority: 0,
    consumerId: 0,
  });

  const createAddress = useCreateConsumerAddress();

  return (
    <MiddleContainer>
      <Box m={10} >
        <Heading mb={4}>Create Address</Heading>
        <Label>Address Name</Label>
        <Input
          value={addressInsert.addressName}
          onChange={(e) =>
            setAddressInsert({
              ...addressInsert,
              addressName: e.target.value,
            })
          }
          placeholder="Home, Work, etc"
        />

        <Label>Address</Label>
        <Input
          value={addressInsert.address}
          onChange={(e) =>
            setAddressInsert({
              ...addressInsert,
              address: e.target.value,
            })
          }
          placeholder="123, Main Street"
        />

        <Label>City</Label>
        <Input
          value={addressInsert.city}
          onChange={(e) =>
            setAddressInsert({
              ...addressInsert,
              city: e.target.value,
            })
          }
          placeholder="Colombo"
        />

        <Label>Location</Label>
        <InputGroup>
          <Input
            value={addressInsert.location}
            onChange={(e) =>
              setAddressInsert({
                ...addressInsert,
                location: e.target.value,
              })
            }
            placeholder="6.9271, 79.8612"
          />

          <Button mx={4}>Get Location</Button>
        </InputGroup>

        <Button mt={8} onClick={() => createAddress.mutate(addressInsert)}>
          Create Address
        </Button>
      </Box>
    </MiddleContainer>
  );
};

export default CreateAddressPopup;
