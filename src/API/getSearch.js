import axios from "axios";
import client from "./client";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function getSearch({ hashtag }) {
  const data = await axios.get(`http://34.125.241.76/posts`, {
    params: { page: 1, size: 10, hashTag: hashtag },
  });
  console.log(data.data);
  return data.data;
}
