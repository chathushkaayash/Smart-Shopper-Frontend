import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface SupermarketItem {
  id: number;
  productId: number;
  supermarketId: number;
  price: number;
  discount: number;
  availableQuantity: number;
}

const apiClient = new APIClient<SupermarketItem>("/supermarketitems");

// get SupermarketItem[] for a product
const useSupermarketItems = (productId: number = 0) => {
  return useQuery({
    queryKey: ["store_prices_for_product", productId],
    queryFn: () => apiClient.getAll({ params: { productId } }),
    staleTime: 1000 * 60 * 2, // 2 minute
  });
};

export default useSupermarketItems;
