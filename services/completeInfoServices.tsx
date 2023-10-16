import axios from "@/config/http";
import { useMutation, useQuery } from "@tanstack/react-query";

type CompleteInfoPayload = {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
};

export const useGetUserAddresses = () => {
  return useQuery(
    ["userAddresses"],
    async () => axios.get("/my-addresses").then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );
};

export const useCompeleteInfo = () => {
  return useMutation(
    (payload: CompleteInfoPayload) =>
      axios.post("/order/completion/", payload).then((res) => res.data),
    {
      onError: (error: any) => {
        console.log(error);
      },
    }
  );
};
