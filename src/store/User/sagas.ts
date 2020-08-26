import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { AnyAction } from "redux";

import { loginSuccess, loginFail } from "./actions";
import { UserActionTypes } from "./types";

function* loginUserSaga({ payload }: AnyAction) {
  try {
    const { data } = yield call(
      axios.post,
      `https://playground.tesonet.lt/v1/tokens`,
      payload
    );
    if (data) {
      yield put(loginSuccess(data));
      localStorage.setItem("token", data.token);
    }
  } catch (e) {
    yield put(loginFail(e));
  }
}

export function* UserSaga() {
  yield takeLatest(UserActionTypes.LOGIN_REQUEST, loginUserSaga);
}
