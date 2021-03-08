import styled from "styled-components";

import { COLOR } from "../../../theme/constants";
import { customMedia } from "../../../theme/customMedia";
import { LinkText } from "../../Parts/LinkText";
import { StyledLink } from "../../Parts/LinkText/style";

export const StyledHeader = styled.header<{isOpen: boolean}>`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  /* border: 2px solid ${COLOR.BLACK}; */
  box-shadow: 0px 2px 4px #333;
  ${customMedia.greaterThan('desktop')`
    border-right: 1px solid ${COLOR.BLACK};
    width: 130px;
    height: 100%;
  `}
`;

export const BackHome = styled(LinkText)`
  margin: 0;
`;

export const MenuButton = StyledLink.withComponent('p');
