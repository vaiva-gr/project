import { createSelector, Selector } from "reselect";

import { RootState } from "../reducers";
import { State } from "./reducer";

export const selectUserData: Selector<RootState, State> = (
  state: RootState
) => {
  return state.User;
};

export const selectIsUserLoggedIn = createSelector(
  selectUserData,
  (User) => User.isLoggedIn
);
