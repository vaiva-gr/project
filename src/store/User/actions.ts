import { action } from "typesafe-actions";

import { UserActionTypes } from "./types";

export const loginUser = (data: { username: string; password: string }) =>
  action(UserActionTypes.LOGIN_REQUEST, data);

export const loginSuccess = (token: string) =>
  action(UserActionTypes.LOGIN_SUCCESS, token);

export const loginFail = (error: Error) =>
  action(UserActionTypes.LOGIN_FAIL, error);

export const logoutUser = () => action(UserActionTypes.LOGOUT_REQUEST);
