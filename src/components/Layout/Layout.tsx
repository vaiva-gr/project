import * as React from "react";
import styled from "styled-components";

import { device } from "../../device";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    160deg,
    rgb(102, 126, 234) 0%,
    rgb(118, 75, 162) 100%
  );
  padding: 100px 80px;

  @media ${device.mobile} {
    padding: 60px 40px;
  }
`;

export const Layout = ({ children }: LayoutProps) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
