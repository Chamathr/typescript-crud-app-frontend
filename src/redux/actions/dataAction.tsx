import { dataActions } from "../types/dataType";

/*get data*/
export const fetchData = (payload: any) => {
  return {
    type: dataActions.GET_DATA,
    payload,
  };
};

export const setGetData = (payload: any) => {
  return {
    type: dataActions.SET_GET_DATA,
    payload,
  };
};

export const setGetDataError = (payload: any) => {
  return {
    type: dataActions.SET_GET_DATA_ERROR,
    payload,
  };
};

export const setGetDataLoading = (payload: any) => {
  return {
    type: dataActions.SET_GET_DATA_LOADING,
    payload,
  };
};

/*add data*/
export const addData = (payload: any) => {
  return {
    type: dataActions.ADD_DATA,
    payload,
  };
};

export const setAddData = (payload: any) => {
  return {
    type: dataActions.SET_ADD_DATA,
    payload,
  };
};

export const setAddDataError = (payload: any) => {
  return {
    type: dataActions.SET_ADD_DATA_ERROR,
    payload,
  };
};

export const setAddDataLoading = (payload: any) => {
  return {
    type: dataActions.SET_ADD_DATA_LOADING,
    payload,
  };
};

/*get data by id*/
export const fetchDataById = (payload: any) => {
  return {
    type: dataActions.GET_DATA_BY_ID,
    payload,
  };
};

export const setGetDataById = (payload: any) => {
  return {
    type: dataActions.SET_GET_DATA_BY_ID,
    payload,
  };
};

export const setGetDataByIdError = (payload: any) => {
  return {
    type: dataActions.SET_GET_DATA_BY_ID_ERROR,
    payload,
  };
};

export const setGetDataByIdLoading = (payload: any) => {
  return {
    type: dataActions.SET_GET_DATA_BY_ID_LOADING,
    payload,
  };
};

/*update data*/
export const updateData = (payload: any) => {
  return {
    type: dataActions.UPDATE_DATA,
    payload,
  };
};

export const setUpdateData = (payload: any) => {
  return {
    type: dataActions.SET_UPDATE_DATA,
    payload,
  };
};

export const setUpdateDataError = (payload: any) => {
  return {
    type: dataActions.SET_UPDATE_DATA_ERROR,
    payload,
  };
};

export const setUpdateDataLoading = (payload: any) => {
  return {
    type: dataActions.SET_UPDATE_DATA_LOADING,
    payload,
  };
};

/*delete data*/
export const deleteData = (payload: any) => {
  return {
    type: dataActions.DELETE_DATA,
    payload,
  };
};

export const setDeleteData = (payload: any) => {
  return {
    type: dataActions.SET_DELETE_DATA,
    payload,
  };
};

export const setDeleteDataError = (payload: any) => {
  return {
    type: dataActions.SET_DELETE_DATA_ERROR,
    payload,
  };
};

export const setDeleteDataLoading = (payload: any) => {
  return {
    type: dataActions.SET_DELETE_DATA_LOADING,
    payload,
  };
};