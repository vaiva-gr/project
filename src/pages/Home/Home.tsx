import * as React from "react";

import { ServersType } from "../../types/Servers";

const axios = require("axios");

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
  console.log(servers);
  console.log(Object.keys(servers).length === 0);
  return (
    <>
      <button onClick={handleClickGet}>Get</button>
      <button onClick={handleClickDelete}>Destroyy</button>
      <button onClick={handleClick}>LOGOUT</button>
      {Object.keys(servers).length !== 0 &&
        servers.map((item): any => (
          <div key={item.name + item.distance}>{item.name}</div>
        ))}
    </>
  );
};
