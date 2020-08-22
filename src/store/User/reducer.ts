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
      return {
        isLoggedIn: true,
        token: action.payload.token,
      };
    }
    case UserActionTypes.LOGIN_FAIL: {
      return { isLoggedIn: false, error: action.payload };
    }
    case UserActionTypes.LOGOUT_REQUEST: {
      return { isLoggedIn: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
