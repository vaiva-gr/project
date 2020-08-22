import { combineReducers } from "redux";

import { reducer as User } from "./User/reducer";
import { reducer as Servers, State as ServersState } from "./Servers/reducer";

export interface RootState {
  User: any;
  Servers: ServersState;
}

export const rootReducer = combineReducers<RootState>({
  User,
  Servers,
});
