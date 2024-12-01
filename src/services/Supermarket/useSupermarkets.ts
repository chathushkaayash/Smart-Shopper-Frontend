import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Supermarket } from "../types";

const apiClient = new APIClient<Supermarket>("/supermarkets");

export interface SupermarketQuery {
  searchText?: string;
  page?: number;
  limit?: number;
  month?: number;
}

const useSuperMarkets = (supermarketQuery?: SupermarketQuery) => {
  return useQuery<FetchResponse<Supermarket>, Error>({
    queryKey: ["supermarkets", supermarketQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          searchText: supermarketQuery?.searchText || "",
          // Remove 'month' or define it in SupermarketQuery interface
          month: supermarketQuery?.month || 0,
          page: supermarketQuery?.page || 1,
          _limit: supermarketQuery?.limit || 10,
        },
      }),
  });
};

export default useSuperMarkets;
