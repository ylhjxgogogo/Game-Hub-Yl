import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import APIClient from "../services/api-client";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; //整数
}
const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () => {
    return apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    });
  };
  const config = useQuery({
    queryKey: ["games", gameQuery], //这表示gamequery里面任何参数变化，就会重新发起请求
    queryFn: fetchGames,
  });
  return config;
};
export default useGames;
