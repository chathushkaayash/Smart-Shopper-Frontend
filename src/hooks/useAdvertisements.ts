import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Advertisement } from "./useAdvertisement";


const apiClient = new APIClient<Advertisement>("/advertisements");
const useOpportunities = () => {
  return useQuery({
    queryKey: ["advertisements"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useOpportunities;
