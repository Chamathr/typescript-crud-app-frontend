import axios from "axios";
import { BASE_URL, BASE_URL_PREFIX } from "../constants/apiConstants";

export const apiInstance = axios.create({
  baseURL: `${BASE_URL}/${BASE_URL_PREFIX}`,
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

export const authApiInstance = axios.create({
  baseURL: `${BASE_URL}/${BASE_URL_PREFIX}`,
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
    referrer: "no-referrer"
  },
});

const token = localStorage.getItem('token')
if (token) {
    authApiInstance.defaults.headers.common['Authorization'] = token;
} else {
  delete authApiInstance.defaults.headers.common['Authorization'];
}