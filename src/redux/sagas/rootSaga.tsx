import { all } from "redux-saga/effects";

import dataSaga from "./dataSaga";
import authSaga from "./authSaga"

export default function* rootSaga() {
  yield all([
    dataSaga(),
    authSaga()
  ]);
}
