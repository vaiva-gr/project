import * as React from "react";
import styled from "styled-components";

import { colors } from "../../theme/colors";
import { ArrowDownIcon } from "../../assets/icons";

interface DropdownProps {
  onClickAsc: () => void;
  onClickDesc: () => void;
  ascTitle: string;
  descTitle: string;
}

const DropDownContainer = styled("div")`
  width: 50px;
`;

const DropDownList = styled("ul")`
  padding: 0;
  width: 150px;
  background-color: ${colors.darkBlue};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${colors.white};
  position: absolute;
  margin: 10px 0 0 -50px;
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: ${colors.lightBlue};
  }
`;

const ArrowWrapper = styled.div<any>`
  margin: 0 10px;
  display: flex;
  svg {
    padding: 5px;
    transform: ${({ isOpen }: any) => isOpen && "rotate(180deg)"};
  }
`;

export const Dropdown = ({
  onClickAsc,
  onClickDesc,
  ascTitle,
  descTitle,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <DropDownContainer>
      <ArrowWrapper onClick={toggling} isOpen={isOpen}>
        <ArrowDownIcon />
      </ArrowWrapper>
      {isOpen && (
        <DropDownList>
          <ListItem
            onClick={() => {
              onClickAsc();
              toggling();
            }}
          >
            {ascTitle}
          </ListItem>
          <ListItem
            onClick={() => {
              onClickDesc();
              toggling();
            }}
          >
            {descTitle}
          </ListItem>
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
