import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Opportunity {
  id: string;
  opportunitysupermarket: { id: string; supermarketId: number }[];
  totalDistance: number;
  tripCost: number;

  orderPlacedOn: string;
  customer: string;
  deliveryCost: number;
  startLocation: string;
  deliveryLocation: string;
  status: string;
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
