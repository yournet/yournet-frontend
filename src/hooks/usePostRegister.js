import { useMutation } from "react-query";
import { postRegister } from "../API/postRegister";
import { useNavigate } from "react-router-dom";

export function usePostRegister() {
  const navigate = useNavigate();
  return useMutation(postRegister, {
    onMutate() {},
    onSuccess: () => {
      navigate("/signin");
    },
  });
}
