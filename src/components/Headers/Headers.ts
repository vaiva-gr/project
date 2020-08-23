import styled from "styled-components";
import {
  space,
  width,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  textAlign,
} from "styled-system";
import { StyledWrapperProps } from "../Wrapper/StyledWrapper";

export const H1 = styled.h1<StyledWrapperProps>`
  ${space}
  ${width}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${textAlign}
`;

H1.defaultProps = {
  m: 0,
  mt: [3, 3, 4],
  mb: [3, 3, 4],
  fontSize: 5,
  fontWeight: 400,
};

export const P = styled.p<StyledWrapperProps>`
  ${space}
  ${width}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${textAlign}
`;

P.defaultProps = {
  mt: 0,
  mb: 0,
  fontSize: 2,
};
