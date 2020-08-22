import { Reducer } from "redux";

import { UserActionTypes } from "./types";

export interface State {
  isLoggedIn: boolean;
  token?: string;
  error?: Error;
}

const initialState = {
  isLoggedIn: false,
};

export const reducer: Reducer<State> = (
  state = initialState as State,
  action
) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS: {
      console.log(action.payload);
      return {
        isLoggedIn: true,
        token: action.payload.accessToken,
      };
    }
    case UserActionTypes.LOGIN_FAIL: {
      console.log(action.payload);
      return { isLoggedIn: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
