import * as React from "react";

import { ServersArray, ServersType } from "../../types/Servers";
import { Layout } from "../../components/Layout/Layout";

interface HomePageProps {
  logoutUser: () => void;
  servers: ServersArray;
  fetchServers: () => void;
  deleteServers: () => void;
  updateServers: (servers: ServersType[], type: string) => void;
}

export const HomePage = ({
  logoutUser,
  servers,
  fetchServers,
  deleteServers,
  updateServers,
}: HomePageProps) => {
  const handleClickGet = () => {
    fetchServers && fetchServers();
  };

  const handleClickDelete = () => {
    deleteServers();
  };

  const handleClick = () => {
    logoutUser();
  };

  return (
    <>
      <button onClick={handleClickGet}>Get</button>
      <button onClick={handleClickDelete}>Destroyy</button>
      <button onClick={handleClick}>LOGOUT</button>
      <button onClick={() => updateServers(servers.servers, "AscName")}>
        Asc Name
      </button>
      <button onClick={() => updateServers(servers.servers, "DescName")}>
        Desc Name
      </button>
      <button onClick={() => updateServers(servers.servers, "AscDistance")}>
        Asc Distance
      </button>
      <button onClick={() => updateServers(servers.servers, "DescDistance")}>
        Desc Distance
      </button>

      {servers.servers &&
        Object.keys(servers.servers).length !== 0 &&
        servers.servers.map((item): any => (
          <div key={item.name + item.distance}>
            {item.name}
            {"    "}
            {item.distance}
          </div>
        ))}
    </>
  );
};
