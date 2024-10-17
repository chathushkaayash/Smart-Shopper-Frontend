import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


const apiClient = new APIClient("/cart_items");

const useDeleteCartItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => apiClient.delete(id),

    onSuccess: () => {
      toast.success("Cart item removed successfully");
    },

    onError: () => {
      toast.error(
        "An error occurred while removing cart item"
      );
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["cart_items"] });
    },
  });
};

export default useDeleteCartItems;
