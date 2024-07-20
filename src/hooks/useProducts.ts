import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../react-query/constants";
import { ProductQuery } from "../App";
import APIClient, { FetchResponse } from "@/services/api-client";


export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


const apiClient = new APIClient<Product>("/products");

const useProducts = (productQuery: ProductQuery) => {
  return useInfiniteQuery<FetchResponse<Product>, Error>({
    queryKey: CACHE_KEY_GAMES(productQuery),
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: productQuery.genreId,
          platforms: productQuery.platformId,
          ordering: productQuery.sortOrder,
          search: productQuery.searchText,
          page: pageParam,
        },
      }),

    // return products.ts file as fake data
    //   return { data: products, count: products.length, next: null, results: products };

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useProducts;
