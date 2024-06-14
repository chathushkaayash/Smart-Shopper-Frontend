import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],

    queryFn: ({ pageParam=1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),

    staleTime: 1 * 60 * 1000, // 10 seconds
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < query.pageSize ? undefined : allPages.length + 1;
    },
  });
};

export default usePosts;