import { apiInstance } from "../../http/apiInstance";

export const getDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.get(`/get?page=${payload}`));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.post(`/add`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};