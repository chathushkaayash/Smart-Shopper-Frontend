
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const map_key = import.meta.env.Google_Map_Api_key;

interface MapProps {
  centers: { lat: number; lng: number }[]; // Array of location objects
}

const Map: React.FC<MapProps> = ({ centers }) => {
  return (
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
  );
};

export default Map;
