import APIClient from "@/services/api-client";
import { useQueries } from "@tanstack/react-query";
import { Review } from "../types";
import { DateTime } from "@/utils/Time";

const apiClient = new APIClient<Review>("/reviews");

const useReview = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ["reviews", id],
      queryFn: async () => {
        const review = await apiClient.get(id);
        return {
          ...review,
          createdAt: new DateTime(review.createdAt),
        };
      },
      staleTime: 1000 * 60 * 30, // 30 minutes
    })),
  });
};
// const useReview = (ids: number[]) => {
//   return useQueries({
//     queries: ids.map((id) => ({
//       queryKey: ["reviews", id],
//       queryFn: () => apiClient.get(id),
//       staleTime: 1000 * 60 * 30, // 30 minutes
//     })),
//   });
// };

export default useReview;
