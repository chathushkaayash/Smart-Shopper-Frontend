import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Advertisement{
    id: number;
    image:string;
    status:string;
    startDate:string;
    endDate:string;
    priority:string;
  
}
const apiClient = new APIClient<Advertisement>("/advertisements");
const useAdvertisement = (id: number) => {
  return useQuery({
    queryKey: ["advertisement", id],
    queryFn: () => apiClient.get(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useAdvertisement;
