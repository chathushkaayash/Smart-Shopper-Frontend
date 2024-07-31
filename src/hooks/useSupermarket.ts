import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Supermarket {
  [x: string]: any;
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  supermarketmanagerId: number;
}
const apiClient = new APIClient<Supermarket>("/supermarkets");

const useSupermarket = (id: number) => {
  return useQuery({
    queryKey: ["Supermarket", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useSupermarket;