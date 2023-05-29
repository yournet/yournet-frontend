import { useQuery } from "react-query";
import { getSearch } from "../API/getSearch";

export const useGetSearch = ({ hashtag }) => {
  return useQuery("getSearch", () => getSearch({ hashtag }), {
    onSuccess: () => {},
  });
};
