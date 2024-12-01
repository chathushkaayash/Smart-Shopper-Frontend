import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export interface BaseCartItem {
  id: number;
  consumerId: number;
  productId: number;
  quantity: number;
  supermarketitemId: number;
  orderId: number; // if the item is in an order, default -1
}

const apiClient = new APIClient<BaseCartItem>("/cart_items");

const useCreateCartItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<BaseCartItem, "id">) => apiClient.create(data),

    onSuccess: () => {
      toast.success("Cart item added successfully");
    },

    onError: () => {
      toast.error("An error occurred while adding cart item");
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["cart_items"] });
    },
  });
};

export default useCreateCartItems;
