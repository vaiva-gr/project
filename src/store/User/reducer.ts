import { Reducer } from "redux";

import { UserActionTypes } from "./types";

export interface State {
  isLoggedIn: boolean;
  token?: string;
  error?: any;
  loading?: boolean;
}

const initialState = {
  isLoggedIn: false,
  loading: false,
};

export const reducer: Reducer<State> = (
  state = initialState as State,
  action
) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST: {
      return {
        isLoggedIn: false,
        loading: true,
        error: "",
      };
    }
    case UserActionTypes.LOGIN_SUCCESS: {
      return {
        isLoggedIn: true,
        token: action.payload.token,
        loading: false,
      };
    }
    case UserActionTypes.LOGIN_FAIL: {
      return { isLoggedIn: false, error: action.payload, loading: false };
    }
    case UserActionTypes.LOGOUT_REQUEST: {
      localStorage.removeItem("token");
      return { isLoggedIn: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
