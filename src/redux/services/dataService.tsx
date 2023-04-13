import { apiInstance } from "../../http/apiInstance";

export const getDataApi = async () => {
    try {
      return Promise.resolve(await apiInstance.get('/todos'));
    } catch (error) {
      return Promise.reject(error);
    }
  };