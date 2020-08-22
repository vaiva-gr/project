import { all, fork } from "redux-saga/effects";

import { UserSaga } from "./User/sagas";
import { ServersSaga } from "./Servers/sagas";

const sagas: any[] = [UserSaga, ServersSaga];

export function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
