import { apiInstance } from "../../http/apiInstance";

/*signin*/
export const signinApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.post(`/auth/signin`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};

/*signin*/
export const signupApi: any = async (payload: any) => {
  try {
    return Promise.resolve(await apiInstance.post(`/auth/signup`, payload));
  } catch (error) {
    return Promise.reject(error);
  }
};