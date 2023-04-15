import { addDataActions, deleteDataActions, getDataActions, getDataByIdActions, updateDataActions } from "../types/dataType";

/*get data*/
export const fetchData = (payload: any) => {
  return {
    type: getDataActions.GET_DATA,
    payload,
  };
};

export const setGetData = (payload: any) => {
  return {
    type: getDataActions.SET_GET_DATA,
    payload,
  };
};

export const setGetDataError = (payload: any) => {
  return {
    type: getDataActions.SET_GET_DATA_ERROR,
    payload,
  };
};

export const setGetDataLoading = (payload: any) => {
  return {
    type: getDataActions.SET_GET_DATA_LOADING,
    payload,
  };
};

/*add data*/
export const addData = (payload: any) => {
  return {
    type: addDataActions.ADD_DATA,
    payload,
  };
};

export const setAddData = (payload: any) => {
  return {
    type: addDataActions.SET_ADD_DATA,
    payload,
  };
};

export const setAddDataError = (payload: any) => {
  return {
    type: addDataActions.SET_ADD_DATA_ERROR,
    payload,
  };
};

export const setAddDataLoading = (payload: any) => {
  return {
    type: addDataActions.SET_ADD_DATA_LOADING,
    payload,
  };
};

/*get data by id*/
export const fetchDataById = (payload: any) => {
  return {
    type: getDataByIdActions.GET_DATA_BY_ID,
    payload,
  };
};

export const setGetDataById = (payload: any) => {
  return {
    type: getDataByIdActions.SET_GET_DATA_BY_ID,
    payload,
  };
};

export const setGetDataByIdError = (payload: any) => {
  return {
    type: getDataByIdActions.SET_GET_DATA_BY_ID_ERROR,
    payload,
  };
};

export const setGetDataByIdLoading = (payload: any) => {
  return {
    type: getDataByIdActions.SET_GET_DATA_BY_ID_LOADING,
    payload,
  };
};

/*update data*/
export const updateData = (payload: any) => {
  return {
    type: updateDataActions.UPDATE_DATA,
    payload,
  };
};

export const setUpdateData = (payload: any) => {
  return {
    type: updateDataActions.SET_UPDATE_DATA,
    payload,
  };
};

export const setUpdateDataError = (payload: any) => {
  return {
    type: updateDataActions.SET_UPDATE_DATA_ERROR,
    payload,
  };
};

export const setUpdateDataLoading = (payload: any) => {
  return {
    type: updateDataActions.SET_UPDATE_DATA_LOADING,
    payload,
  };
};

/*delete data*/
export const deleteData = (payload: any) => {
  return {
    type: deleteDataActions.DELETE_DATA,
    payload,
  };
};

export const setDeleteData = (payload: any) => {
  return {
    type: deleteDataActions.SET_DELETE_DATA,
    payload,
  };
};

export const setDeleteDataError = (payload: any) => {
  return {
    type: deleteDataActions.SET_DELETE_DATA_ERROR,
    payload,
  };
};

export const setDeleteDataLoading = (payload: any) => {
  return {
    type: deleteDataActions.SET_DELETE_DATA_LOADING,
    payload,
  };
};