import * as React from "react";

import { ServersArray, ServersType } from "../../types/Servers";
import { Layout } from "../../components/Layout/Layout";
import { Table } from "../../components/Table/Table";

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
  return (
    <Layout>
      <Table
        logoutUser={logoutUser}
        servers={servers}
        fetchServers={fetchServers}
        deleteServers={deleteServers}
        updateServers={updateServers}
      />
    </Layout>
  );
};
