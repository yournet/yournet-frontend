import { useMutation } from "react-query";
import { postLike } from "../API/postLike";

export function usePostLike() {
  return useMutation(postLike, {
    onMutate() {},
    onSuccess: () => {
      alert("이 글을 좋아합니다.");
    },
  });
}
