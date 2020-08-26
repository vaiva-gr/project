import styled from "styled-components";
import {
  space,
  SpaceProps,
  FontSizeProps,
  fontSize,
  FontWeightProps,
  fontWeight,
  FontFamilyProps,
  fontFamily,
  textAlign,
  TextAlignProps,
  display,
  DisplayProps,
} from "styled-system";

export type StyledWrapperProps = SpaceProps &
  FontSizeProps &
  FontWeightProps &
  FontFamilyProps &
  TextAlignProps &
  DisplayProps;

export const StyledWrapper = styled.div<StyledWrapperProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${textAlign}
  ${display}
`;
