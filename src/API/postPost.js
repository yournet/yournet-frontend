import client from "./client";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function postPost({ title, content, hashtag }) {
  console.log(hashtag);
  const _hashtag = [];
  hashtag.forEach((element) => {
    _hashtag.push({ name: element });
  });
  console.log(_hashtag);
  const response = await client.post(
    "/post",
    { title, content, image: "", hashTag: _hashtag },
    {
      headers: {
        Authorization: `${cookies.get("token")}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
}
