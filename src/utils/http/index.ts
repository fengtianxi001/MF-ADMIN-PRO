import axios from "axios";
import setupRequestInterceptors from "./setupRequestInterceptors";
import setupResponseInterceptors from "./setupResponseInterceptors";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10 * 1000,
  withCredentials: true,
});

setupRequestInterceptors(http);
setupResponseInterceptors(http);

export default http;
