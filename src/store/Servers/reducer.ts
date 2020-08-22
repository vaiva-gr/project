import { Reducer } from "redux";

import { ServersActionTypes } from "./types";
import { ServersType } from "../../types/Servers";

export interface State {
  servers?: ServersType[];
}

export const reducer: Reducer = (state = [], action) => {
  switch (action.type) {
    case ServersActionTypes.FETCH_SERVERS_SUCCESS:
      console.log("yay");
      return action.payload;
    case ServersActionTypes.FETCH_SERVERS_ERROR:
      console.log("no");
      return action.payload;
    default:
      return state;
  }
};
