import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IData } from "../../interfaces/Data";
import {
  dataTypes
} from "../types/dataType";
import {
  setAddData,
  setAddDataError,
  setAddDataLoading,
  setDeleteData,
  setDeleteDataError,
  setDeleteDataLoading,
  setGetData,
  setGetDataById,
  setGetDataByIdError,
  setGetDataByIdLoading,
  setGetDataError,
  setGetDataLoading,
  setUpdateData,
  setUpdateDataError,
  setUpdateDataLoading
} from "../actions/dataAction";
import {
  addDataApi,
  deleteDataApi,
  getDataApi,
  getDataByIdApi,
  updateDataApi,
} from "../services/dataService";

/*get data*/
export function* fetchDetails(): Generator<any, void, unknown> {
  yield takeEvery(dataTypes.GET_DATA, function* (payload: any) {
    try {
      yield put(setGetDataLoading('loading'));
      const data: IData = yield call(getDataApi, payload?.payload);
      yield put(setGetDataLoading('idle'));
      yield put(setGetData(data?.data?.data));
    } catch (error: any) {
      yield put(setGetDataLoading('idle'));
      yield put(setGetDataError(error.message));
    }
  });
}

/*add data*/
export function* addDetails(): Generator<any, void, unknown> {
  yield takeEvery(dataTypes.ADD_DATA, function* (payload: any) {
    try {
      yield put(setAddDataLoading('loading'));
      const data: IData = yield call(addDataApi, payload?.payload);
      yield put(setAddDataLoading('idle'));
      yield put(setAddData(data?.data?.data));
    } catch (error: any) {
      yield put(setAddDataLoading('idle'));
      yield put(setAddDataError(error.message));
    }
  });
}

/*get data by id*/
export function* getDetailsById(): Generator<any, void, unknown> {
  yield takeEvery(dataTypes.GET_DATA_BY_ID, function* (payload: any) {
    try {
      yield put(setGetDataByIdLoading('loading'));
      const data: IData = yield call(getDataByIdApi, payload?.payload);
      yield put(setGetDataByIdLoading('idle'));
      yield put(setGetDataById(data?.data?.data));
    } catch (error: any) {
      yield put(setGetDataByIdLoading('idle'));
      yield put(setGetDataByIdError(error.message));
    }
  });
}

/*update data*/
export function* updateDetails(): Generator<any, void, unknown> {
  yield takeEvery(dataTypes.UPDATE_DATA, function* (payload: any) {
    try {
      yield put(setUpdateDataLoading('loading'));
      const data: IData = yield call(updateDataApi, { id: payload?.payload?.id, body: payload?.payload?.payload });
      yield put(setUpdateDataLoading('idle'));
      yield put(setUpdateData(data?.data?.data));
    } catch (error: any) {
      yield put(setUpdateDataLoading('idle'));
      yield put(setUpdateDataError(error.message));
    }
  });
}

/*delete data*/
export function* deleteDetails(): Generator<any, void, unknown> {
  yield takeEvery(dataTypes.DELETE_DATA, function* (payload: any) {
    try {
      yield put(setDeleteDataLoading('loading'));
      const data: IData = yield call(deleteDataApi, payload?.payload);
      yield put(setDeleteDataLoading('idle'));
      yield put(setDeleteData(data?.data?.data));
    } catch (error: any) {
      yield put(setDeleteDataLoading('idle'));
      yield put(setDeleteDataError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchDetails),
    fork(addDetails),
    fork(getDetailsById),
    fork(updateDetails),
    fork(deleteDetails)
  ]);
}
