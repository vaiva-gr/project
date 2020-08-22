import { combineReducers } from "redux";

import { reducer as User } from "./User/reducer";

export interface RootState {
  User: any;
}

export const rootReducer = combineReducers<RootState>({
  User,
});
