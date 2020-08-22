import { action } from "typesafe-actions";

import { ServersActionTypes } from "./types";
import { ServersType } from "../../types/Servers";

export const fetchServersRequest = () =>
  action(ServersActionTypes.FETCH_SERVERS_REQUEST);
export const fetchServersSuccess = (data: ServersType[]) =>
  action(ServersActionTypes.FETCH_SERVERS_SUCCESS, data);
export const fetchServersError = (error: Error) =>
  action(ServersActionTypes.FETCH_SERVERS_ERROR, error);
export const deleteServers = () => action(ServersActionTypes.DELETE_SERVERS);
