import * as React from "react";
import styled from "styled-components";

import { ServersArray, ServersType } from "../../types/Servers";
import { H1, P } from "../Headers/Headers";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";

interface TableProps {
  logoutUser: () => void;
  servers: ServersArray;
  fetchServers: () => void;
  deleteServers: () => void;
  updateServers: (servers: ServersType[], type: string) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-column-gap: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;

  :not(:last-child) {
    border-bottom: solid #a6a6a6 1px;
  }
`;

const RowButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;

  > * {
    display: flex;
    align-items: center;
  }
`;

export const Table = ({
  logoutUser,
  servers,
  fetchServers,
  deleteServers,
  updateServers,
}: TableProps) => {
  const handleClickGet = () => {
    fetchServers && fetchServers();
  };

  const handleClickDelete = () => {
    deleteServers();
  };

  const handleLogoutClick = () => {
    logoutUser();
  };

  return (
    <Box>
      <Grid>
        <div>
          {!servers.servers ? (
            <Button mb={20} onClick={handleClickGet}>
              Get countries
            </Button>
          ) : (
            <Button mb={20} onClick={handleClickDelete}>
              Delete
            </Button>
          )}
          <Button onClick={handleLogoutClick}>LOGOUT</Button>
        </div>
        <div>
          {servers.servers ? (
            <RowButton>
              <div>
                Country
                <Dropdown
                  onClickAsc={() => updateServers(servers.servers, "AscName")}
                  onClickDesc={() => updateServers(servers.servers, "DescName")}
                  ascTitle={"name asc"}
                  descTitle={"name des"}
                />
              </div>
              <div>
                Distance
                <Dropdown
                  onClickAsc={() =>
                    updateServers(servers.servers, "AscDistance")
                  }
                  onClickDesc={() =>
                    updateServers(servers.servers, "DescDistance")
                  }
                  ascTitle={"distance asc"}
                  descTitle={"distance des"}
                />
              </div>
            </RowButton>
          ) : (
            <>
              <H1 textAlign={"center"} mt={0}>
                Welcome
              </H1>
              <P textAlign={"center"}>
                To access server please press GET COUNTRIES
              </P>
            </>
          )}

          {servers.servers &&
            Object.keys(servers.servers).length !== 0 &&
            servers.servers.map((item): any => (
              <Row key={item.name + item.distance}>
                <div>{item.name}</div>
                <div>{item.distance}</div>
              </Row>
            ))}
        </div>
      </Grid>
    </Box>
  );
};
