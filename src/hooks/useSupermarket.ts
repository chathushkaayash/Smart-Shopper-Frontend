import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Supermarket {
  id: number;
  name: string;
  description: string;
  price: number;
  logo: string;
  location: string;
  address: string;
  supermarketmanagerId: number;
}

const apiClient = new APIClient<Supermarket>("/supermarkets");

const useSupermarket = (id: number) => {
  return useQuery({
    queryKey: ["supermarkets", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useSupermarket;
