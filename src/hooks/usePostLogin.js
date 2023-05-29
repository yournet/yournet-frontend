import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { postLogin } from "../API/postLogin";

const cookies = new Cookies();

export function usePostLogin() {
  const navigate = useNavigate();
  return useMutation(postLogin, {
    onMutate() {},
    onSuccess: () => {
      navigate("/");
    },
  });
}
