import { Cookies } from "react-cookie";
import client from "./client";

const cookies = new Cookies();

export async function postLogin({ email, password }) {
  const response = await client.post("/user/login", {
    email,
    password,
  });
  cookies.set("token", response.headers.authorization);
  cookies.set("userId", response.data.userId);
  console.log(cookies.get("userId"));
  return response.data;
}
