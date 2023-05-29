import client from "./client";

export async function postRegister({ email, name, password }) {
  const response = await client.post("/user/register", {
    email,
    name,
    password,
  });
  console.log(response);
  return response.data;
}
