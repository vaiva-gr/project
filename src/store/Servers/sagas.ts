import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import { ServersActionTypes } from "./types";
import { fetchServersSuccess, fetchServersError } from "./actions";
import { getAuthHeader } from "../../utils/user";

function* fetchServersSaga() {
  const Auth = getAuthHeader(window.localStorage.getItem("token"));

  try {
    const { data } = yield call(
      axios.get,
      `https://playground.tesonet.lt/v1/servers`,
      Auth
    );
    yield put(fetchServersSuccess(data));
  } catch (e) {
    yield put(fetchServersError(e));
  }
}

export function* ServersSaga() {
  yield takeEvery(ServersActionTypes.FETCH_SERVERS_REQUEST, fetchServersSaga);
}
