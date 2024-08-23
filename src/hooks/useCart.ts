import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CartItem } from "./useCartItem";
import useAuthStore from "@/state-management/auth/store";

const apiClient = new APIClient<CartItem>("/carts");

const useCart = () => {
  const { user } = useAuthStore();

  if (!user || user.role !== "Consumer")
    return {} as UseQueryResult<FetchResponse<CartItem>, Error>;

  return useQuery({
    queryKey: ["carts"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useCart;
