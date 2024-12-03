import { Alert, AlertIcon, Box, Grid, Heading, Text } from "@chakra-ui/react";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const map_key = import.meta.env.Google_Map_Api_key;

interface SupermarketDetailsProps {
  id: any;
}

const SupermarketDetails = ({ id }: SupermarketDetailsProps) => {
  const { data: supermarket } = useSupermarket([id])[0];
  var locationLat = supermarket?.location ? parseFloat(supermarket.location.split(",")[0]) : 0;
  var locationLng = supermarket?.location ? parseFloat(supermarket.location.split(",")[1]) : 0;
  

  const centers: { lat: number; lng: number }[] = [{ lat:locationLat, lng: locationLng }]; // Centers of the map

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
      width="full"
      overflow="hidden"
      h="fit-content"
    >
      <Heading fontSize="2xl" p={5}>
        Supermarket Details
      </Heading>

      <Box px={5} w="full">
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={2}>
          <Text fontWeight={"600"}>Supermarket Name</Text>
          <Text>: {supermarket?.name}</Text>
          <Text fontWeight={"600"}>Contact Number</Text>
          <Text>: {supermarket?.contactNo}</Text>
          <Text fontWeight={"600"}>Address</Text>
          <Text>: {supermarket?.address}</Text>
        </Grid>
      </Box>

      <Box p={5} w="full" height="250px">
        <LoadScript googleMapsApiKey={map_key}>
          <GoogleMap
            center={centers[0]} // Center the map at the first location
            zoom={13}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={() => console.log("Map loaded")}
          >
            {centers.map((center, index) => (
              <Marker key={index} position={center} />
            ))}
          </GoogleMap>
        </LoadScript>
      </Box>

      <Alert status="warning" m={5} w="fit-content" borderRadius={5}>
        <AlertIcon />
        You can't change the supermarket details. If you want to change the
        details, please contact the admin.
      </Alert>
    </Box>
  );
};

export default SupermarketDetails;
