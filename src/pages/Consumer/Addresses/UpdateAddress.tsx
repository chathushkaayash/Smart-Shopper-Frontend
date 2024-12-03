import MiddleContainer from "@/components/Containers/MiddleContainer";
import useAddress from "@/services/Addresses/useAddress";
import useUpdateAddress from "@/services/Addresses/useUpdateAddress";
import { BaseAddress } from "@/services/types";
import { Box, Button, Heading, Input, InputGroup } from "@chakra-ui/react";
import { Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const UpdateAddress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return null;

  const { data: address } = useAddress(Number(id.toString()));

  const [addressUpdate, setAddressUpdate] = useState<BaseAddress>({
    id: 0,
    addressName: "",
    address: "",
    city: "",
    location: "",
    priority: 0,
    consumerId: 0,
  });

  useEffect(() => {
    setAddressUpdate({
      id: address?.id || 0,
      addressName: address?.addressName || "",
      address: address?.address || "",
      city: address?.city || "",
      location: address?.location || "",
      priority: address?.priority || 0,
      consumerId: address?.consumerId || 0,
    });
  }, [address]);

  console.log(addressUpdate);

  const updateAddress = useUpdateAddress();

  const BackToPage = () => {
    navigate("/profile/addresses");
  };

  return (
    <MiddleContainer>
      <FaArrowLeft onClick={BackToPage} fontSize={25} style={{ margin: "10px 0px 0px 10px", cursor: "pointer" }}/>
      <Box m={10}>
        <Heading mb={4}>Update Address</Heading>
        <Label>Address Name</Label>
        <Input
          value={addressUpdate.addressName}
          onChange={(e) =>
            setAddressUpdate({
              ...addressUpdate,
              addressName: e.target.value,
            })
          }
        />

        <Label>Address</Label>
        <Input
          value={addressUpdate.address}
          onChange={(e) =>
            setAddressUpdate({
              ...addressUpdate,
              address: e.target.value,
            })
          }
        />

        <Label>City</Label>
        <Input
          value={addressUpdate.city}
          onChange={(e) =>
            setAddressUpdate({
              ...addressUpdate,
              city: e.target.value,
            })
          }
        />

        <Label>Location</Label>
        <InputGroup>
          <Input
            value={addressUpdate.location}
            onChange={(e) =>
              setAddressUpdate({
                ...addressUpdate,
                location: e.target.value,
              })
            }
          />

          <Button mx={4}>Get Location</Button>
        </InputGroup>

        <Button
          mt={8}
          onClick={() => {
            updateAddress.mutate(addressUpdate);
            navigate("/profile/addresses");
          }}
        >
          Update Address
        </Button>
      </Box>
    </MiddleContainer>
  );
};

export default UpdateAddress;
