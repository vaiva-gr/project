import * as React from "react";
// import { sortBy, prop, reverse } from "ramda";

import { ServersType } from "../../types/Servers";
import { Layout } from "../../components/Layout/Layout";

interface HomePageProps {
  logoutUser: () => void;
  servers: ServersType[];
  fetchServers: () => void;
  deleteServers: () => void;
}

export const HomePage = ({
  logoutUser,
  servers,
  fetchServers,
  deleteServers,
}: HomePageProps) => {
  // const [serversList, setServersList] = React.useState(servers);

  const handleClickGet = () => {
    fetchServers && fetchServers();
    // setServersList(servers);
  };

  const handleClickDelete = () => {
    deleteServers();
    // setServersList([]);
  };

  const handleClick = () => {
    logoutUser();
  };

  // const sortRows = (initialRows: any, sortColumn: any, sortDirection: any) => (
  //   rows
  // ) => {
  //   const comparer = (a, b) => {
  //     if (sortDirection === "ASC") {
  //       return a[sortColumn] > b[sortColumn] ? 1 : -1;
  //     } else if (sortDirection === "DESC") {
  //       return a[sortColumn] < b[sortColumn] ? 1 : -1;
  //     }
  //   };
  //   return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
  // };

  // const sortByFullName = sortBy(prop('fullName'));
  // R.sort(diff, [4,2,7,5]);
  console.log(servers);
  console.log(Object.keys(servers).length === 0);
  return (
    <>
      <button onClick={handleClickGet}>Get</button>
      <button onClick={handleClickDelete}>Destroyy</button>
      <button onClick={handleClick}>LOGOUT</button>

      {Object.keys(servers).length !== 0 &&
        servers.map((item): any => (
          <div key={item.name + item.distance}>
            {item.name}
            {"    "}
            {item.distance}
          </div>
        ))}
    </>
  );
};
