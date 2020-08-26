import * as React from "react";

import { Layout } from "../../components/Layout/Layout";
import { Box } from "../../components/Box/Box";
import { H1, P } from "../../components/Text/Text";

export const ErrorPage = () => (
  <Layout>
    <Box>
      <H1 fontSize={["48px", "72px"]} textAlign={"center"}>
        404
      </H1>
      <P textAlign={"center"}>Page does not exist</P>
    </Box>
  </Layout>
);
