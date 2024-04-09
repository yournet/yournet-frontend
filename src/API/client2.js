import axios from "axios";

let baseURL2;

baseURL2 = "localhost:8080/";

const client2 = axios.create({
  baseURL2,
});

export default client2;
