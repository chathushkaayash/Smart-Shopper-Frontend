import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { SupermarketItemWithRelations } from "./useSupermarketItems";

const apiClient = new APIClient<SupermarketItemWithRelations>("/supermarketitems");

// get SupermarketItem by id
const useSupermarketItem = (id: number) => {
  return useQuery({
    queryKey: ["store_price", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useSupermarketItem;
