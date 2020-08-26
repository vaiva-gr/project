import { action } from "typesafe-actions";

import { ServersActionTypes } from "./types";
import { ServersType } from "../../types/Servers";

export const fetchServersRequest = () =>
  action(ServersActionTypes.FETCH_SERVERS_REQUEST);
export const fetchServersSuccess = (servers: ServersType[]) =>
  action(ServersActionTypes.FETCH_SERVERS_SUCCESS, servers);
export const fetchServersError = (error: Error) =>
  action(ServersActionTypes.FETCH_SERVERS_ERROR, error);
export const deleteServers = () => action(ServersActionTypes.DELETE_SERVERS);
export const updateServers = (servers: ServersType[], type: string) =>
  action(ServersActionTypes.UPDATE_SERVERS, { servers, type });
