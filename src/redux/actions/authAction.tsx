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

/*signup*/
export const fetchSignup = (payload: any) => {
  return {
    type: authTypes.FETCH_SIGNUP,
    payload,
  };
};

export const setSignup = (payload: any) => {
  return {
    type: authTypes.SET_SIGNUP,
    payload,
  };
};

export const setSignupLoading = (payload: any) => {
  return {
    type: authTypes.SET_SIGNUP_LOADING,
    payload,
  };
};

export const setSignupError = (payload: any) => {
  return {
    type: authTypes.SET_SIGNUP_ERROR,
    payload,
  };
};
