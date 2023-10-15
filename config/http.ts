import Axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_REST_ENDPOINT as string;

const axios = Axios.create({
  baseURL,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const useApi = () => {
  return { axios };
};

export default axios;
