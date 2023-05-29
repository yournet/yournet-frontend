import axios from "axios";
import client from "./client";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function getPosts({ id }) {
  const data = await axios.get(`http://34.125.241.76/post/${id}`, {
    params: { postId: id },
  });

  return data.data;
}
