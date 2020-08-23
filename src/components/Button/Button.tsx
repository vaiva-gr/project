import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  width?: string;
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
`;

export const Button = ({ children, type, width }: ButtonProps) => (
  <ButtonWrapper type={type} width={width}>
    {children}
  </ButtonWrapper>
);
