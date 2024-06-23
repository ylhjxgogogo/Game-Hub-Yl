import axios from "axios";
import { AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "16a8a4faadc64c02a1128e23ecd308e9",
  },
});
export interface FetchResponse<T> {
  next: string | null;
  count: number;
  results: T[];
}
class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
