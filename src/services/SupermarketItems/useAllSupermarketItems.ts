import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { SupermarketItem } from "@/services/types";

const apiClient = new APIClient<SupermarketItem>("/supermarket_items_all");

const useAllSupermarketItems = () => {
  return useQuery({
    queryKey: ["supermarket_items_all"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useAllSupermarketItems;
