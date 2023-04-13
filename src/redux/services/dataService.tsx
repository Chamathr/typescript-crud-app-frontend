import { apiInstance } from "../../http/apiInstance";

export const getDataApi = async () => {
    try {
      return Promise.resolve(await apiInstance.get('/get?page=1'));
    } catch (error) {
      return Promise.reject(error);
    }
  };