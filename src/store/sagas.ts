import { all, fork } from "redux-saga/effects";

import { UserSaga } from "./User/sagas";

const sagas: any[] = [UserSaga];

export function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
