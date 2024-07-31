import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface CartItem {
  [x: string]: any;
  id: number;
  quantity: number;
  consumerId: number;
  supermarketitemId: number;
}

const apiClient = new APIClient<CartItem>(`/carts`);

const useCart = (userId: 1) => {
  return useQuery({
    queryKey: ["cart", userId],
    queryFn: () => apiClient.getAll({ params: { userId } }),
  });
};

export default useCart;
