import { getDataActions } from "../types/dataType";

export const getData = (payload: any) => {
  return {
    type: getDataActions.GET_DATA,
    payload,
  };
};

export const setData = (payload: any) => {
  return {
    type: getDataActions.SET_DATA,
    payload,
  };
};

export const setDataError = (payload: any) => {
  return {
    type: getDataActions.SET_DATA_ERROR,
    payload,
  };
};

export const setDataLoading = (payload: any) => {
  return {
    type: getDataActions.SET_DATA_LOADING,
    payload,
  };
};