import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "../types";

const apiClient = new APIClient<CartItem>("/cart_items");

const useCartItems = () => {
  return useQuery({
    queryKey: ["cart_items"],
    queryFn: () => apiClient.getAll({}),
    onError: () => {},
  });
};

export default useCartItems;
