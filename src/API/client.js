import axios from "axios";

let baseURL;

baseURL = "http://localhost:8080/";

const client = axios.create({
  baseURL,
});

export default client;
