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

/*update data*/
export const updateDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.put(`/update/${payload?.id}`, payload?.body));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*delete data*/
export const deleteDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.put(`/delete/${payload}`));
  } catch (error) {
    return Promise.reject(error);
  }
};