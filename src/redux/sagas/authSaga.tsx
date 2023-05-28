import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IData } from "../../interfaces/Data";
import {
  authTypes
} from "../types/authType";
import { setSignin, setSigninLoading, setSigningError } from "../actions/authAction";
import { signinApi } from "../services/authService";

/*signin*/
export function* callSignin(): Generator<any, void, unknown> {
  yield takeEvery(authTypes.FETCH_SIGNIN, function* (payload: any) {
    try {
      yield put(setSigninLoading('loading'));
      const data: IData = yield call(signinApi, payload?.payload);
      yield put(setSigninLoading('idle'));
      yield put(setSignin(data?.data?.data));
    } catch (error: any) {
      yield put(setSigninLoading('idle'));
      yield put(setSigningError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(callSignin)
  ]);
}
