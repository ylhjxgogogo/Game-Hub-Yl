import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store/strore";
export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; //整数
}
const apiClient = new APIClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const fetchGames = ({ pageParam = 1 }) => {
    return apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });
  };
  const config = useInfiniteQuery({
    queryKey: ["games", gameQuery], //这表示gamequery里面任何参数变化，就会重新发起请求
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // console.log("lastPage---", lastPage);
      // console.log("allPages---", allPages); //[[...],[...]]
      return lastPage.next ? allPages.length + 1 : undefined; //有下一页吗，有的话页码加1
    },
    queryFn: fetchGames,
    staleTime: ms("24h"),
  });
  return config;
};
export default useGames;
