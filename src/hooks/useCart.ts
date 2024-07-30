import APIClient from "@/services/api-client";
import { CartItem } from "@/state-management/cart/store";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<CartItem>("/carts");

const useCart = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useCart;
