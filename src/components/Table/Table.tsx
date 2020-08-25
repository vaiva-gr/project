import * as React from "react";
import styled from "styled-components";

import { ServersArray, ServersType } from "../../types/Servers";
import { H1, P } from "../Text/Text";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { device } from "../../device";
import { LoadingPopup } from "../LoadingPopup/LoadingPopup";

interface TableProps {
  logoutUser: () => void;
  servers: ServersArray;
  fetchServers: () => void;
  deleteServers: () => void;
  updateServers: (servers: ServersType[], type: string) => void;
}

const Grid = styled.div`
  display: flex;
  > :first-child {
    min-width: 250px;
    margin-right: 20px;
  }
  > :nth-child(2) {
    width: 100%;
  }

  @media ${device.mobile} {
    flex-direction: column-reverse;

    > :first-child {
      margin-top: 40px;
      margin-right: 0;
    }
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;

  :not(:last-child) {
    border-bottom: solid #a6a6a6 1px;
  }

  @media ${device.mobile} {
    grid-template-columns: 3fr 2fr;
  }
`;

const RowButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 0;
  margin-bottom: 20px;

  > * {
    display: flex;
    align-items: center;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
    grid-template-columns: 3fr 2fr;
  }
`;

export const Table = ({
  logoutUser,
  servers,
  fetchServers,
  deleteServers,
  updateServers,
}: TableProps) => {
  const [showLoading, setShowLoading] = React.useState(false);

  React.useEffect(() => {
    setShowLoading(servers.loading);
  });

  console.log(servers);

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
    <React.Fragment>
      {showLoading && <LoadingPopup />}
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
                  <P fontSize={["14px", "18px"]} fontWeight={600}>
                    Country
                  </P>
                  <Dropdown
                    onClickAsc={() => updateServers(servers.servers, "AscName")}
                    onClickDesc={() =>
                      updateServers(servers.servers, "DescName")
                    }
                    ascTitle={"Ascending"}
                    descTitle={"Descending"}
                  />
                </div>
                <div>
                  <P fontSize={["14px", "18px"]} fontWeight={600}>
                    Distance
                  </P>
                  <Dropdown
                    onClickAsc={() =>
                      updateServers(servers.servers, "AscDistance")
                    }
                    onClickDesc={() =>
                      updateServers(servers.servers, "DescDistance")
                    }
                    ascTitle={"Ascending"}
                    descTitle={"Descending"}
                  />
                </div>
              </RowButton>
            ) : (
              <>
                <H1 textAlign={"center"} mt={0} fontSize={["24px", "36px"]}>
                  Welcome
                </H1>
                <P textAlign={"center"} fontSize={["14px", "16px"]}>
                  To access server please press GET COUNTRIES
                </P>
              </>
            )}

            {servers.servers &&
              Object.keys(servers.servers).length !== 0 &&
              servers.servers.map((item): any => (
                <Row key={item.name + item.distance}>
                  <P fontSize={["12px", "14px"]}>{item.name}</P>
                  <P fontSize={["12px", "14px"]}>{item.distance}</P>
                </Row>
              ))}
          </div>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
