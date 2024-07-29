import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Opportunity {
  id: string;
  supermarketList: string[];
  totalDistance: number;
  tripCost: number;

  orderPlacedOn: string;
  customer: string;
  deliveryCost: number;
  startLocation: string;
  deliveryLocation: string;
}
const apiClient = new APIClient<Opportunity>("/opportunities");
const useOpportunity = (id:string) => {
  return useQuery({
    queryKey: ["opportunity", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useOpportunity;
