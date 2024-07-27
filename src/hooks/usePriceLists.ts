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

const apiClient = new APIClient<SupermarketItem>("/storeprices");

// get SupermarketItem[] for a product
const usePriceLists = ({ productId }: { productId: string }) => {
  return useQuery({
    queryKey: ["store_prices_for_product", productId],
    queryFn: () => apiClient.getAll({ params: { productId } }),
  });
};

export default usePriceLists;
