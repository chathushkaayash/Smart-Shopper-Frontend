import APIClient, { FetchResponse } from "@/services/api-client";
import useProductQueryStore from "@/state-management/productQuery/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "./useProduct";
import { toast } from "sonner";

const apiClient = new APIClient<Product>("/products");

const useProducts = () => {
  const productQuery = useProductQueryStore((s) => s.productQuery);

  return useInfiniteQuery<FetchResponse<Product>, Error>({
    queryKey: ["Products", productQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .getAll({
          params: {
            category: productQuery.category || "",
            price: productQuery.price || 0.0,
            ordering: productQuery.sortOrder || "",
            searchText: productQuery.searchText || "",
            page: pageParam,
            _limit: 20,
          },
        })
        .catch((err) => {
          toast.error(err.message);
          throw err;
        }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: 0,
  });
};

export default useProducts;
