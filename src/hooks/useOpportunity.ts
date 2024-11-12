import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Consumer } from "./useConsumer";
import { DateTime } from "@/utils/Time";

export interface Opportunity {
  id: string;
  opportunitysupermarket: { id: string; supermarketId: number }[];
  totalDistance: number;
  tripCost: number;

  orderPlacedOn: DateTime;
  consumer: Consumer;
  deliveryCost: number;
  startLocation: string;
  deliveryLocation: string;
  status: string;

  _orderId: number;
  driverId: number;
}
const apiClient = new APIClient<Opportunity>("/opportunities");
const useOpportunity = (id: number) => {
  return useQuery({
    queryKey: ["opportunity", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useOpportunity;
