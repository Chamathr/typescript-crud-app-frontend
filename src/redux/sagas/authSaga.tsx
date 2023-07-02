import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import { IData } from "../../interfaces/Data";
import {
  authTypes
} from "../types/authType";
import { setAccessTokenData, setAccessTokenError, setAccessTokenLoading, setSignin, setSigninLoading, setSigningError, setSignup, setSignupError, setSignupLoading } from "../actions/authAction";
import { accessTokenApi, signinApi, signupApi } from "../services/authService";
import { removeRefreshToken, setAccessToken,setRefreshToken } from "../../utils/Jwt";

/*signin*/
export function* callSignin(): Generator<any, void, unknown> {
  yield takeEvery(authTypes.FETCH_SIGNIN, function* (payload: any) {
    try {
      yield put(setSigninLoading('loading'));
      const data: IData = yield call(signinApi, payload?.payload);
      yield put(setSigninLoading('idle'));
      yield put(setSignin(data?.data?.data));
      setAccessToken(data?.data?.data?.accessToken);
      setRefreshToken(data?.data?.data?.refreshToken);
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

/*access-token by refresh-token*/
export function* callAccessToken(): Generator<any, void, unknown> {
  yield takeEvery(authTypes.FETCH_ACCESS_TOKEN, function* (payload: any) {
    try {
      yield put(setAccessTokenLoading('loading'));
      const data: IData = yield call(accessTokenApi, payload?.payload);
      yield put(setAccessTokenLoading('idle'));
      yield put(setAccessTokenData(data?.data?.data));
      setAccessToken(data?.data?.data?.accessToken);
    } catch (error: any) {
      yield put(setAccessTokenLoading('idle'));
      yield put(setAccessTokenError(error.message));
      removeRefreshToken()
    }
  });
}


export default function* rootSaga() {
  yield all([
    fork(callSignin),
    fork(callSignup),
    fork(callAccessToken)
  ]);
}
