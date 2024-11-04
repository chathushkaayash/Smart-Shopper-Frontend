import APIClient from "@/services/api-client";
import { SupermarketItem } from "@/services/types";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<SupermarketItem>("/supermarket_items");

// get SupermarketItem by id
const useSupermarketItem = (id: number) => {
  return useQuery({
    queryKey: ["supermarket_items", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useSupermarketItem;
