import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  const config = useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient.getAll();
    },
    staleTime: ms("24h"),
    // initialData: { count: platforms.length, results: platforms, next: null },
    initialData: platforms,
  });
  return config;
};
export default usePlatforms;
