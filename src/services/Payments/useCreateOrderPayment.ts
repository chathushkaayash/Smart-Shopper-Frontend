import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { PayhereRequest } from "../types";

const apiClient = new APIClient<PayhereRequest>("/payments/orders");

const useCreateOrderPayment = (id: number) => {
  return useQuery({
    queryKey: ["payments", "orders", id],
    queryFn: () => apiClient.get(id),
  });
};

export default useCreateOrderPayment;
