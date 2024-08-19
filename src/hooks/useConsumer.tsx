import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Consumer {
  id: number;
  name: string;
  phoneNumber: string;
  email: number;
  image: string;
  address: string;
}

const apiClient = new APIClient<Consumer>("/consumers");

const useConsumer = (id: number) => {
  return useQuery({
    queryKey: ["consumers", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 30, 
  });
};

export default useConsumer;
