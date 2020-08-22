import { createSelector, Selector } from "reselect";

import { RootState } from "../reducers";
import { State } from "./reducer";

export const selectUserData: Selector<RootState, State> = (state: RootState) =>
  state.User;

export const selectIsUserLoggedIn = createSelector(
  selectUserData,
  (User) => User.isLoggedIn
);

// // export const selectUserToken
