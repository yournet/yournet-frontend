import axios from "axios";

let baseURL2;

baseURL2 = "http://34.125.163.240/";

const client2 = axios.create({
  baseURL2,
});

export default client2;
