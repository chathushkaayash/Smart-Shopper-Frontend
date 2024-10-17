import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Supermarket } from "../types";

const apiClient = new APIClient<Supermarket>("/supermarkets");

const useSuperMarkets = () => {
  return useQuery({
    queryKey: ["supermarkets"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 30, // 30 minute
  });
};

export default useSuperMarkets;