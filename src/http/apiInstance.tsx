import axios from "axios";
import { BASE_URL, BASE_URL_PREFIX } from "../constants/apiConstants";
import { getAccessToken, getRefreshToken, removeAccessToken } from "../utils/Jwt";
import { fetchAccessToken } from "../redux/actions/authAction";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../redux/selectors/authSelector";
import { dispatch } from "../redux/store";

const apiInstance = axios.create({
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

apiInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error?.response?.status === 401) {
      const refreshToken = getRefreshToken()
      dispatch(fetchAccessToken(refreshToken))
      return Promise.resolve(apiInstance(error.config))
    }
    return Promise.reject(error);
  }
);

export { apiInstance } 