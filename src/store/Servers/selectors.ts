import { createSelector, Selector } from "reselect";

import { RootState } from "../reducers";
import { State } from "./reducer";

export const selectServers: Selector<RootState, State> = (state: RootState) =>
  state.Servers;
