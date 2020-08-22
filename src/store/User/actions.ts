import { action } from "typesafe-actions";

import { UserActionTypes } from "./types";

export const loginUser = (data: { username: string; password: string }) =>
  action(UserActionTypes.LOGIN_REQUEST, data);
export const loginSuccess = (data: { accessToken: string }) =>
  action(UserActionTypes.LOGIN_SUCCESS, data);
export const loginFail = (error: Error) =>
  action(UserActionTypes.LOGIN_FAIL, error);
