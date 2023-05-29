import client from "./client";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function postLike({ postId }) {
  const response = await client.post(
    "/likes",
    { postId },
    {
      headers: {
        Authorization: `${cookies.get("token")}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
}
