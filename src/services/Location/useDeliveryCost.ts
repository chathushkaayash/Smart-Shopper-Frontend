import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface DeliveryCostRequest {
  supermarketLocations: string[];
  deliveryLocation: string;
}

const apiClient = new APIClient<DeliveryCostRequest,number>(
  "/locations/delivery_cost"
);

const useDeliveryCost = (
  supermarketLocations: string[],
  deliveryLocation: string
) => {
  return useQuery({
    queryKey: ["delivery_cost", supermarketLocations],
    queryFn: () => apiClient.create({ supermarketLocations, deliveryLocation }),
    staleTime: 1000 * 60 * 2, // 2 minute
    retry: 0,
  });
};

export default useDeliveryCost;
