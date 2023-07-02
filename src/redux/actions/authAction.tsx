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

/*access-token by refresh-token*/
export const fetchAccessToken = (payload: any) => {
  return {
    type: authTypes.FETCH_ACCESS_TOKEN,
    payload,
  };
};

export const setAccessTokenData = (payload: any) => {
  return {
    type: authTypes.SET_ACCESS_TOKEN,
    payload,
  };
};

export const setAccessTokenLoading = (payload: any) => {
  return {
    type: authTypes.SET_ACCESS_TOKEN_LOADING,
    payload,
  };
};

export const setAccessTokenError = (payload: any) => {
  return {
    type: authTypes.SET_ACCESS_TOKEN_ERROR,
    payload,
  };
};
