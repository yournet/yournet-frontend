import { useQuery } from "react-query";
import { getRecommend } from "../API/getRecommend";
import { getSimilarUser } from "../API/getSimilarUser";

export const useGetSimilarUser = () => {
  return useQuery("getSimilarUser", () => getSimilarUser(), {
    enabled: true,
    onSuccess: () => {},
  });
};
