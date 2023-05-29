import axios from "axios";

let baseURL;

baseURL = "http://34.125.241.76/";

const client = axios.create({
  baseURL,
});

export default client;
