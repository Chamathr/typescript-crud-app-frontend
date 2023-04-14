import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IData } from "../../interfaces/Data";
import {
  addDataActions,
  getDataActions,
} from "../types/dataType";
import {
  setAddData,
  setAddDataError,
  setAddDataLoading,
  setGetData,
  setGetDataError,
  setGetDataLoading
} from "../actions/dataAction";
import {
  addDataApi,
  getDataApi,
} from "../services/dataService";

/*get data*/
export function* getData(): Generator<any, void, unknown> {
  yield takeEvery(getDataActions.GET_DATA, function* (payload: any) {
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
export function* addForm(): Generator<any, void, unknown> {
  yield takeEvery(addDataActions.ADD_DATA, function* (payload: any) {
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

export default function* rootSaga() {
  yield all([
    fork(getData),
    fork(addForm)
  ]);
}
