import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Consumer } from "../../hooks/useConsumer";
import { CACHE_KEY_CONSUMERS } from "../cache-keys";

const apiClient = new APIClient<Consumer>("/consumers");

export interface ConsumerQuery {
  searchText: string;
  month?: number;
  page?: number;
  limit?: number;
}

const useConsumers = (consumerQuery: ConsumerQuery) => {
  return useQuery<FetchResponse<Consumer>, Error>({
    queryKey: [CACHE_KEY_CONSUMERS, consumerQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          searchText: consumerQuery.searchText || "",
          month: consumerQuery.month || 0,
          page: consumerQuery.page || 1,
          _limit: consumerQuery.limit || 10,
        },
      }),
      staleTime: 1000 * 5, // 5 seconds
  });
};

export default useConsumers;
