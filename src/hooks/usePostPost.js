import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { postPost } from "../API/postPost";

export function usePostPost() {
  const navigate = useNavigate();
  return useMutation(postPost, {
    onMutate() {},
    onSuccess: () => {
      alert("작성이 완료 되었습니다!");
      navigate("/");
    },
  });
}
