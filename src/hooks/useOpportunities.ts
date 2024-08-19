import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Opportunity } from "./useOpportunity";

const apiClient = new APIClient<Opportunity>("/opportunities");
const useOpportunities = (status: string) => {
  return useQuery({
    queryKey: ["opportunity"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          status,
        },
      }),
  });
};

export default useOpportunities;
