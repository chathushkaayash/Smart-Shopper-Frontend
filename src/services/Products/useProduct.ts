import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { Product } from "../types";

const apiClient = new APIClient<Product>("/products");

const useProduct = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["products", id],
      queryFn: () => apiClient.get(id),
      staleTime: 1000 * 60 * 30, // 30 minutes
    })),
  });
};

export default useProduct;
