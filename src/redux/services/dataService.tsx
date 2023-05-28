import { authApiInstance } from "../../http/apiInstance";

/*get data*/
export const getDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await authApiInstance.get(`/crud/get?page=${payload}`));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*add data*/
export const addDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await authApiInstance.post(`/crud/add`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*get data by id*/
export const getDataByIdApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await authApiInstance.get(`/crud/get/${payload}`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*update data*/
export const updateDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await authApiInstance.put(`/crud/update/${payload?.id}`, payload?.body));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*delete data*/
export const deleteDataApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await authApiInstance.put(`/crud/delete/${payload}`));
  } catch (error) {
    return Promise.reject(error);
  }
};