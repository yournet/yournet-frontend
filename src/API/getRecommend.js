import axios from "axios";
import client2 from "./client2";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function getRecommend() {
  const userId = cookies.get("userId");
  const data = await axios.get(
    `http://localhost:8080/users/${userId}/recommend`,
    {
      headers: { Authorization: `${cookies.get("token")}` },
    }
  );

  console.log(data.data);
  return data.data;
}
