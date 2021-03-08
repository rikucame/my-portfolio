import styled from "styled-components";

import { COLOR } from "../../../theme/constants";
import { customMedia } from "../../../theme/customMedia";
import { LinkText as defaultLinkText } from "../../Parts/LinkText";

export const BackHome = styled(defaultLinkText)`
  margin: 0;
`;

export const Navigation = styled.nav<{isDisplay: boolean}>`
  max-height: ${({isDisplay}) => isDisplay ? '300px' : '0px'};
  transition: all 0.5s linear;
  display: flex;
  flex-flow: nowrap row;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({isDisplay}) => isDisplay ? '30px 0 10px' : '0px'};;
  margin-left: 20px;
`;

export const LinkList = styled.ul<{isDisplay: boolean}>`
  opacity: ${({isDisplay}) => isDisplay ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  transition-delay: ${({isDisplay}) => isDisplay ? '0.3s' : '0s'};
`;

export const LinkItem = styled.li`
  display: block;
  margin: 7px 0;
`;

export const LinkText = styled(defaultLinkText)`
  padding: 3px;
`;
