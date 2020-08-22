import * as React from "react";

import { ServersType } from "../../types/Servers";

const axios = require("axios");

interface HomePageProps {
  logoutUser: () => void;
  servers: ServersType[];
  fetchServers?: () => void;
}

export const HomePage = ({
  logoutUser,
  servers,
  fetchServers,
}: HomePageProps) => {
  const [serverss, setServers] = React.useState([]);

  React.useEffect(() => {
    fetchServers && fetchServers();
    setServers(servers);
  }, []);

  const handleClick = () => {
    logoutUser();
  };
  // const handleClickGet = () => {
  //   const AuthStr = "Bearer ".concat("f9731b590611a5a9377fbd02f247fcdf");
  //   axios
  //     .get("https://playground.tesonet.lt/v1/servers", {
  //       headers: { Authorization: AuthStr },
  //     })
  //     .then((response: any) => {
  //       setServers(response.data);
  //     })
  //     .catch((error: any) => {
  //       console.log("error " + error);
  //     });
  // };
  console.log(servers);
  return (
    <>
      {/* <button onClick={handleClickGet}>Get</button> */}
      <button onClick={() => {}}>Destroyy</button>
      <button onClick={handleClick}>LOGOUT</button>
      {serverss.map((item): any => (
        <div key={item.name + item.distance}>{item.name}</div>
      ))}
    </>
  );
};
