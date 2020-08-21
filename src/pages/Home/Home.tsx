import * as React from "react";
const axios = require("axios");

export const Home = () => {
  const handleClick = () => {
    axios
      .post("https://playground.tesonet.lt/v1/tokens", {
        username: "tesonet",
        password: "partyanimal",
      })
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      .catch(function (error: any) {
        // handle error
        console.log("error" + error);
      });
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
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClickGet}>Get</button>
    </>
  );
};
