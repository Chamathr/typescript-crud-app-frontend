import { apiInstance } from "../../http/apiInstance";

export const getDataApi: any = async (payload: any) => {
    try {
      return Promise.resolve(await apiInstance.get(`/get?page=${payload}`));
    } catch (error) {
      return Promise.reject(error);
    }
  };