import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<{name:string,earning:number}>("stats/earnings");

const useEarnings = () => {
  return useQuery({
    queryKey: ["earnings"],
    queryFn: () =>
      apiClient.getAll({
      }),
    staleTime: 1000 * 5, // 5 seconds
  });
};

export default useEarnings;
