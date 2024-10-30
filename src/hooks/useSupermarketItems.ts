import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { SupermarketItem } from "@/services/types";

const apiClient = new APIClient<SupermarketItem>("/supermarket_items");

// You can use this hook to 
//    1) get all supermarket items 
//    2) supermarket items filter by productId

const useSupermarketItems = (productId: number = 0) => {
  return useQuery({
    queryKey: ["supermarket_items", productId],
    queryFn: () => apiClient.getAll({ params: { productId } }),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useSupermarketItems;
