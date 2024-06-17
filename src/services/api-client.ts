import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "16a8a4faadc64c02a1128e23ecd308e9",
  },
});
