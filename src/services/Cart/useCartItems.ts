import { SupermarketItem } from "@/hooks/useSupermarketItems";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface CartItem {
  id: number;
  quantity: number;
  consumerId?: number;
  productId: number;
  supermarketItem: SupermarketItem;
}

const apiClient = new APIClient<CartItem>("/cart_items");

const useCartItems = () => {
  return useQuery({
    queryKey: ["cart_items"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useCartItems;
