import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ScreenShot from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  const config = useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => {
      return apiClient.getAll();
    },
  });
  return config;
};
export default useScreenshots;
