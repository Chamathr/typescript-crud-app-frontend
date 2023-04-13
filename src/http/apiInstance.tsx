import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    cache: "no-cache",
    mode: "cors",
    redirect: "follow",
    withCredentials: true,
    referrer: "no-referrer",
  },
});