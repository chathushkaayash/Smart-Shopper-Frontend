import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Opportunity } from "./useOpportunity";

const apiClient = new APIClient<Opportunity>("/opportunities");

export interface OpportunityQuery {
  status?: string;
  month?: string;
  limit?: number;
}

const useOpportunities = (opportunityQuery: OpportunityQuery) => {
  return useQuery({
    queryKey: ["opportunity", opportunityQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          status: opportunityQuery.status || "",
          month: opportunityQuery.month || "",
          _limit: opportunityQuery.limit || 10,
        },
      }),
    staleTime: 1000 * 5, // 5 seconds
  });
};

export default useOpportunities;
