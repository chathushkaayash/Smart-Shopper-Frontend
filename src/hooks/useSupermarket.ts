import APIClient from "@/services/api-client";
import { User } from "@/state-management/auth/store";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

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
export interface SupermarketWithRelations {
  supermarketManager: User;
  //storeprice: Storeprice[]
  //opportunitysupermarket: any[]
  //supermarketorder: Supermarketorder[]
  id: number;
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  //supermarketmanagerId: number
}
const apiClient = new APIClient<SupermarketWithRelations>("/supermarkets");

const useSupermarket = (id: number) => {
  return useQuery({
    queryKey: ["Supermarkets", id],
    queryFn: () =>
      apiClient.get(id).catch((err) => {
        toast.error(err.message);
        throw err;
      }),
    staleTime: 1000 * 60 * 30, // 30 minute
  });
};

export default useSupermarket;
