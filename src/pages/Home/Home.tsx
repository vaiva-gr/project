import * as React from "react";
const axios = require("axios");

interface HomePageProps {
  logoutUser: () => void;
}

export const HomePage = ({ logoutUser }: HomePageProps) => {
  const handleClick = () => {
    logoutUser();
  };
  const handleClickGet = () => {
    const AuthStr = "Bearer ".concat("f9731b590611a5a9377fbd02f247fcdf");
    axios
      .get("https://playground.tesonet.lt/v1/servers", {
        headers: { Authorization: AuthStr },
      })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log("error " + error);
      });
  };
  return (
    <>
      <button onClick={handleClickGet}>Get</button>
      <button onClick={handleClick}>LOGOUT</button>
    </>
  );
};
