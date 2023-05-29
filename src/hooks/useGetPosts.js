import { useQuery } from "react-query";
import { getPosts } from "../API/getPosts";

export const useGetPosts = ({ id }) => {
  return useQuery("getPosts", () => getPosts({ id }), {
    onSuccess: () => {},
  });
};
