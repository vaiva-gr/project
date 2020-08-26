import * as React from "react";
import styled from "styled-components";

import { LoadingIcon } from "../../assets/icons";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

const LoadingBox = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  animation-name: spinner;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  svg {
    transform: scale(3);
    fill: white;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingPopup = () => {
  return (
    <LoadingWrapper>
      <LoadingBox>
        <LoadingIcon />
      </LoadingBox>
    </LoadingWrapper>
  );
};
