import * as React from "react";
import styled from "styled-components";

import { CloseIcon } from "../../assets/icons";
import { Box } from "../Box/Box";
import { P } from "../Text/Text";

interface ErrorPopupProps {
  onClick: () => void;
}

const ErrorWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

const BoxWrapper = styled.div`
  position: absolute;
  top: 30%;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ErrorPopup = ({ onClick }: ErrorPopupProps) => {
  return (
    <ErrorWrapper>
      <BoxWrapper>
        <Box width={"70%"}>
          <Close onClick={onClick}>
            <CloseIcon />
          </Close>
          <P>Username or password incorrect</P>
        </Box>
      </BoxWrapper>
    </ErrorWrapper>
  );
};
