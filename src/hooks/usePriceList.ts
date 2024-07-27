import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { SupermarketItem } from "./usePriceLists";

const apiClient = new APIClient<SupermarketItem>("/storeprices");

// get SupermarketItem by id
const usePriceLists = (id: string) => {
  return useQuery({
    queryKey: ["store_price", id],
    queryFn: () => apiClient.get(id),
  });
};

export default usePriceLists;
