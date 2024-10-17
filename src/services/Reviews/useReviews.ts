import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Review } from "../types";

const apiClient = new APIClient<Review>("/reviews");

export interface ReviewQuery {
  reviewType?: string; // supermarketItem, driver
  targetId?: number;
}

const useReviews = (reviewQuery: ReviewQuery) => {
  return useQuery({
    queryKey: ["reviews", reviewQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          reviewType: reviewQuery.reviewType || "",
          targetId: reviewQuery.targetId || 0,
        },
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useReviews;
