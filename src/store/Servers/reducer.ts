import { Reducer } from "redux";
import * as R from "ramda";

import { ServersActionTypes } from "./types";
import { ServersType } from "../../types/Servers";

export interface State {
  servers?: ServersType[];
  type?: string;
}

export const reducer: Reducer = (state = [], action) => {
  switch (action.type) {
    case ServersActionTypes.FETCH_SERVERS_SUCCESS:
      return { servers: action.payload };
    case ServersActionTypes.FETCH_SERVERS_ERROR:
      return action.payload;
    case ServersActionTypes.UPDATE_SERVERS: {
      const desN = R.sortWith([R.descend(R.prop("name"))]);
      const ascN = R.sortWith([R.ascend(R.prop("name"))]);
      const desD = R.sortWith([R.descend(R.prop("distance"))]);
      const ascD = R.sortWith([R.ascend(R.prop("distance"))]);
      let updatedServers;

      if (action.payload.servers) {
        switch (action.payload.type) {
          case "AscName":
            updatedServers = ascN(action.payload.servers);
            break;
          case "DescName":
            updatedServers = desN(action.payload.servers);
            break;
          case "AscDistance":
            updatedServers = ascD(action.payload.servers);
            break;
          case "DescDistance":
            updatedServers = desD(action.payload.servers);
            break;
          default:
            updatedServers = action.payload.servers;
        }
      }

      return { servers: updatedServers, type: action.payload.type };
    }

    case ServersActionTypes.DELETE_SERVERS: {
      return {};
    }

    default:
      return state;
  }
};

// export const selectUpdatedServers = createSelector(
//   selectServers,
//   (Servers) =>
//     Servers.type &&
//     Servers.type === "Asc" &&
//     sortBy(prop("name"), Servers.servers)
// );
