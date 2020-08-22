import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { AnyAction } from "redux";

import { loginSuccess, loginFail } from "./actions";
import { UserActionTypes } from "./types";

// try {
//   console.log("==");
//   console.log(payload);
//   console.log("==");
//   const { data } = yield call(axios.post, `https://playground.tesonet.lt/v1/tokens`, payload);
//   if (data) {
//     console.log("success");
//     // yield put(loginSuccess({ accessToken: data }));
//     // localStorage.setItem("token", data);
//   }
// } catch (e) {
//   console.log("err");
//   yield put(loginFail(e));
// }

function* loginUserSaga({ payload }: AnyAction) {
  try {
    console.log("==");
    console.log(payload);
    console.log("==");
    const { data } = yield call(
      axios.post,
      `https://playground.tesonet.lt/v1/tokens`,
      payload
    );
    if (data) {
      console.log(data);
      yield put(loginSuccess(data));
      // localStorage.setItem("token", data);
    }
  } catch (e) {
    console.log("err");
    yield put(loginFail(e));
  }
}

export function* UserSaga() {
  yield takeLatest(UserActionTypes.LOGIN_REQUEST, loginUserSaga);
}

// axios
//   .post("https://playground.tesonet.lt/v1/tokens", payload)
//   .then(function (response: any) {
//     // handle success
//     put(loginSuccess());
//     localStorage.setItem("token", response.data.token);
//     console.log(response.data.token);
//   })
//   .catch(function (error: any) {
//     // handle error
//     put(loginFail(error));
//     console.log("error" + error);
//   });
