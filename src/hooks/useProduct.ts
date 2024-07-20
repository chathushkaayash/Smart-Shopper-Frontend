import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
const apiClient = new APIClient<Product>("/products");

const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useProduct;
