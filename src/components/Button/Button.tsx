import * as React from "react";
import styled from "styled-components";
import { space } from "styled-system";

import { StyledWrapperProps } from "../Wrapper/StyledWrapper";

interface ButtonProps extends StyledWrapperProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.button<Partial<ButtonProps>>`
  width: 100%;
  background-color: rgb(57, 69, 122);
  height: 40px;
  color: white;
  border: none;
  width: 100%;
  border-radius: 4px;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  width: ${({ width }: Partial<ButtonProps>) => (width ? width : "100%")};
  ${space}
`;

export const Button = ({
  children,
  type,
  width,
  onClick,
  ...rest
}: ButtonProps) => (
  <ButtonWrapper type={type} width={width} onClick={onClick} {...rest}>
    {children}
  </ButtonWrapper>
);
