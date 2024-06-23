import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
  return config;
};
export default usePlatforms;
