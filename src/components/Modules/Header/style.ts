import styled from "styled-components";

import { COLOR } from "../../../theme/constants";
import { customMedia } from "../../../theme/customMedia";
import { LinkText as defaultLinkText } from "../../Parts/LinkText";

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

export const BackHome = styled(defaultLinkText)`
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-flow: nowrap row;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0 20px;
  margin-left: 20px;
`;

export const LinkList = styled.ul``;

export const LinkItem = styled.li`
  display: block;
  margin: 7px 0;
`;

export const NameText = styled(defaultLinkText)``;

export const LinkText = styled(defaultLinkText)`
  padding: 3px;
`;
