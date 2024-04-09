import axios from "axios";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

export async function getSimilarUser() {
  const userId = cookies.get("userId");
  const data = await axios.get(
    `http://localhost:8080/users/${userId}/similar`,
    {
      headers: { Authorization: `${cookies.get("token")}` },
    }
  );

  console.log(data.data);
  return data.data;
}
