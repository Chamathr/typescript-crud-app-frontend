import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IData } from "../../interfaces/Data";
import {
  getDataActions,
} from "../types/dataType";
import {
  setData,
  setDataError,
  setDataLoading
} from "../actions/dataAction";
import {
  getDataApi,
} from "../services/dataService";

export function* getData(): Generator<any, void, unknown> {
  yield takeEvery(getDataActions.GET_DATA, function* (payload: any) {
    try {
      yield put(setDataLoading('loading'));
      const data: IData = yield call(getDataApi, payload?.payload);
      yield put(setDataLoading('idle'));
      yield put(setData(data?.data?.data));
    } catch (error: any) {
      yield put(setDataLoading('idle'));
      yield put(setDataError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getData)
  ]);
}
