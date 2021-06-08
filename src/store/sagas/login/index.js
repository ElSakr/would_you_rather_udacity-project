import { call, takeLatest } from "redux-saga/effects";
import API from "../../../network/apis/login.js";
import { LOGIN_ACTION_TYPES } from "../../types/login";

export function* login({ payload }) {
  try {
    yield call(API.login, payload.credentials);
  } catch (e) {
    console.log(e);
  }
}

export function* logout() {
  try {
    yield call(API.logout);
  } catch (e) {
    console.log(e);
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_ACTION_TYPES.login, login);
  yield takeLatest(LOGIN_ACTION_TYPES.logout, logout);
}
