import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { SupermarketItem } from "./useSupermarketItems";

export interface CartItem {
  // [x: string]: any;
  id: number;
  quantity: number;
  consumerId?: number;
  supermarketItem: SupermarketItem;
}

const apiClient = new APIClient<CartItem>(`/carts`);

const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useCart;
