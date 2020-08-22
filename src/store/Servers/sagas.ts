import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import { ServersActionTypes } from "./types";
import { fetchServersSuccess, fetchServersError } from "./actions";

function* fetchServersSaga() {
  // const auth = getAuthHeader(window.localStorage.getItem('token'));
  const AuthStr = "Bearer ".concat("f9731b590611a5a9377fbd02f247fcdf");
  try {
    const { data } = yield call(
      axios.get,
      `https://playground.tesonet.lt/v1/servers`,
      { headers: { Authorization: AuthStr } }
    );
    yield put(fetchServersSuccess(data));
  } catch (e) {
    yield put(fetchServersError(e));
  }
}

export function* ServersSaga() {
  yield takeEvery(ServersActionTypes.FETCH_SERVERS_REQUEST, fetchServersSaga);
}
