import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  const config = useQuery({
    queryKey: ["trailers", id],
    queryFn: () => {
      return apiClient.getAll();
    },
  });
  return config;
};
export default useTrailers;
