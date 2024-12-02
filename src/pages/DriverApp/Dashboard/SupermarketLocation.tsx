import Map from "@/pages/Public/Map";
import useSupermarket from "@/services/Supermarket/useSupermarket";

interface SupermarketRowInterface {
  supermarketIds: number[];
}

const SupermarketLocation = ({ supermarketIds }: SupermarketRowInterface) => {
  const supermarkets = useSupermarket(supermarketIds);

  const centers = supermarkets
    .map((supermarket) => supermarket.data?.location)
    .filter(Boolean)
    .map((location) => {
      const [lat, lng] = location?.split(",").map(Number) || [];
      return { lat, lng };
    });
  return <Map centers={centers} />;
};

export default SupermarketLocation;