import { useQuery } from "react-query";
import { getRecommend } from "../API/getRecommend";

export const useGetRecommend = () => {
  return useQuery("getRecommend", () => getRecommend(), {
    enabled: true,
    onSuccess: () => {},
  });
};
