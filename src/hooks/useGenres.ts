import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  // return useData<Genre>("/genres");
  const config = useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.getAll();
    },
    staleTime: 24 * 60 * 60 * 1000, //2 days;
    //返回值期待FetchResponse<Genre>类型，因此我们要把初始数据也设置为这种类型
    //1.要么在原始数据里进行修改-》{count,T[]}，2.直接在结构上修改
    //在staleTime时间内使用初始数据进行展示，超出时间后重新请求
    // initialData: { count: genres.length, results: genres, next: null }, //使用数据进行初始化，就不用展示旋转器了，提高用户体验
    initialData: genres,
  });
  return config;
};
export default useGenres;
