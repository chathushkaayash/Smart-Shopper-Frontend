import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "./useCartItem";

const apiClient = new APIClient<CartItem>("/carts");

const useCart = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useCart;
