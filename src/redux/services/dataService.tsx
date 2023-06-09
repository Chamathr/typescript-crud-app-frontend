import { apiInstance } from "../../http/apiInstance";

/*get data*/
export const getDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.get(`/get?page=${payload}`));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*add data*/
export const addDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.post(`/add`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*get data by id*/
export const getDataByIdApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.get(`/get/${payload}`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};