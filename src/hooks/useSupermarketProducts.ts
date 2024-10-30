import APIClient from "@/services/api-client";
import { SupermarketItem } from "@/services/types";
import { useQuery } from "@tanstack/react-query";




const apiClient = new APIClient<SupermarketItem>("/pricelists/supermarket");

// get SupermarketItem[] for a product
// const useSupermarketProducts = (supermarketId: number) => {
//   return useQuery({
//     queryKey: ["supermarket_items", supermarketId],
//     queryFn: () => apiClient.getAll({ params: { supermarketId } }),
//     staleTime: 1000 * 60 * 2, // 2 minute
//   });
// };

const useSupermarketProducts = (supermarketId: number) => {
  return useQuery({
    queryKey: ["supermarket_items", supermarketId],
    queryFn: () => apiClient.getAll({ params: { SupermarketId: supermarketId } }), // Use uppercase 'S'
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};


export default useSupermarketProducts;
