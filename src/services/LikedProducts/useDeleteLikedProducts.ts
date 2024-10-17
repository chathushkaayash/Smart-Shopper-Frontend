import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { LikedProducts } from "../types";


const apiClient = new APIClient<LikedProducts>("/liked_products");

const useDeleteLikedProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => apiClient.delete(id),

    onSuccess: () => {
      toast.success("Product removed from liked products");
    },

    onError: () => {
      toast.error(
        "An error occurred while removing product from liked products"
      );
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["liked_products"] });
    },
  });
};

export default useDeleteLikedProducts;
