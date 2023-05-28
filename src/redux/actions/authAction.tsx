import { authTypes } from "../types/authType";

/*signin*/
export const fetchSignin = (payload: any) => {
  return {
    type: authTypes.FETCH_SIGNIN,
    payload,
  };
};

export const setSignin = (payload: any) => {
  return {
    type: authTypes.SET_SIGNIN,
    payload,
  };
};

export const setSigninLoading = (payload: any) => {
  return {
    type: authTypes.SET_SIGNIN_LOADING,
    payload,
  };
};

export const setSigningError = (payload: any) => {
  return {
    type: authTypes.SET_SIGNIN_ERROR,
    payload,
  };
};
