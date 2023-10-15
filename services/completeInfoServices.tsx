import axios from "@/config/http";
import { useQuery } from "@tanstack/react-query";

export const useGetUserAddresses = () => {
  return useQuery(["userAddresses"], async () =>
    axios.get("/my-addresses").then((res) => res.data)
  );
};
