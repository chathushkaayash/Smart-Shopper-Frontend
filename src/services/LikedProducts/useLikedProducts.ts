import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { LikedProducts } from "../types";

const apiClient = new APIClient<LikedProducts>("/liked_products");

const useLikedProducts = () => {
  return useQuery({
    queryKey: ["liked_products"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useLikedProducts;
