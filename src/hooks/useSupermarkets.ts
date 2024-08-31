import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { SupermarketWithRelations } from "./useSupermarket";

const apiClient = new APIClient<SupermarketWithRelations>("/supermarkets");

const useSuperMarkets = () => {
  return useQuery({
    queryKey: ["supermarkets"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 30, // 30 minute
  });
};

export default useSuperMarkets;
