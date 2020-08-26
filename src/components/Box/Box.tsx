import * as React from "react";
import styled from "styled-components";

import { colors } from "../../theme/colors";
import { device } from "../../device";

interface BoxProps {
  children: React.ReactNode;
  width?: string;
}

const BoxWrapper = styled.div<Partial<BoxProps>>`
  background-color: ${colors.white};
  padding: 60px 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 76px 14px rgba(0, 0, 0, 0.4);
  width: ${({ width }: Partial<BoxProps>) => (width ? width : "100%")};

  @media ${device.mobile} {
    padding: 40px 20px;
  }
`;

export const Box = ({ children, width }: BoxProps) => (
  <BoxWrapper width={width}>{children}</BoxWrapper>
);
