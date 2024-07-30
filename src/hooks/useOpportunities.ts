import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Opportunity } from "./useOpportunity";


const apiClient = new APIClient<Opportunity>("/opportunities");
const useOpportunities = () => {
  return useQuery({
    queryKey: ["opportunity"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useOpportunities;
