import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { BaseCartItem } from "../types";

const apiClient = new APIClient<BaseCartItem>("/cart_items");

const useUpdateCartItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BaseCartItem) => apiClient.update(data.id, data),

    onError: () => {
      toast.error("An error occurred while updating cart item");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart_items"] });
    },
  });
};

export default useUpdateCartItems;
