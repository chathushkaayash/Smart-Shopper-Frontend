import APIClient from "@/services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { LikedProducts } from "../types";

const apiClient = new APIClient<LikedProducts>("/liked_products");

const useCreateLikedProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<LikedProducts, "id">) => apiClient.create(data),

    onSuccess: () => {
      toast.success("Product added to liked products");
    },
    onError: () => {
      toast.error("An error occurred while adding product to liked products");
    },

    onSettled: () => {
      queryClient.resetQueries({ queryKey: ["liked_products"] });
    },
  });
};

export default useCreateLikedProducts;
