import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IData } from "../../interfaces/Data";
import {
  authTypes
} from "../types/authType";
import { setSignin, setSigninLoading, setSigningError, setSignup, setSignupError, setSignupLoading } from "../actions/authAction";
import { signinApi, signupApi } from "../services/authService";
import { setAccessToken } from "../../utils/Jwt";

/*signin*/
export function* callSignin(): Generator<any, void, unknown> {
  yield takeEvery(authTypes.FETCH_SIGNIN, function* (payload: any) {
    try {
      yield put(setSigninLoading('loading'));
      const data: IData = yield call(signinApi, payload?.payload);
      yield put(setSigninLoading('idle'));
      yield put(setSignin(data?.data?.data));
      setAccessToken(data?.data?.data);
    } catch (error: any) {
      yield put(setSigninLoading('idle'));
      yield put(setSigningError(error.message));
    }
  });
}

/*signup*/
export function* callSignup(): Generator<any, void, unknown> {
  yield takeEvery(authTypes.FETCH_SIGNUP, function* (payload: any) {
    try {
      yield put(setSignupLoading('loading'));
      const data: IData = yield call(signupApi, payload?.payload);
      yield put(setSignupLoading('idle'));
      yield put(setSignup(data?.data?.data));
    } catch (error: any) {
      yield put(setSignupLoading('idle'));
      yield put(setSignupError(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(callSignin),
    fork(callSignup)
  ]);
}
