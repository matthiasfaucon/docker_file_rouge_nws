import axios from "axios";

export default axios.create({
  baseURL: "http://db:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json"
  }
});