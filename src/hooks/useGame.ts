import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";
const apiClient = new APIClient<Game>("/games");
const useGame = (slug: string) => {
  const config = useQuery({
    queryKey: ["games", slug],
    queryFn: () => {
      return apiClient.get(slug);
    },
  });
  return config;
};
export default useGame;
