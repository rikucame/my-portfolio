import styled from 'styled-components';

import { COLOR } from '../../../theme/constants';
import { customMedia } from '../../../theme/customMedia';
import { LinkText as defaultLinkText } from '../../Parts/LinkText';

export const BackHome = styled(defaultLinkText)`
  margin: 0;
`;

export const Navigation = styled.nav<{ isDisplay: boolean }>`
  max-height: ${({ isDisplay }) => (isDisplay ? '600px' : '0px')};
  transition: all 0.5s linear;
  display: flex;
  flex-flow: nowrap row;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ isDisplay }) => (isDisplay ? '30px 0 10px' : '0px')};
  margin-left: 20px;
  ${customMedia.greaterThan('desktop')`
    max-height: auto;
    margin-left: 0;
    margin-top: 70px;
    padding: ({ isDisplay }) => (isDisplay ? '0' : '0');
  `}
`;

export const LinkList = styled.ul<{ isDisplay: boolean }>`
  opacity: ${({ isDisplay }) => (isDisplay ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  transition-delay: ${({ isDisplay }) => (isDisplay ? '0.3s' : '0s')};
  ${customMedia.greaterThan('desktop')`
    opacity: 1;
  `}
`;

export const LinkItem = styled.li`
  display: block;
  padding: 6px 0;
  ${customMedia.greaterThan('desktop')`
    padding: 8px 0;
  `}
`;

export const BorderLinkItem = styled(LinkItem)`
  display: block;
  padding-top: 14px;
  border-top: 2px solid #888;
  margin-top: 9px;
  ${customMedia.greaterThan('desktop')`
    padding-top: 17px;
  `}
`;

export const LinkText = styled(defaultLinkText)<{ isDisplay: boolean }>`
  display: flex;
  padding: 3px;
  pointer-events: ${({ isDisplay }) => (isDisplay ? 'auto' : 'none')};
  ${customMedia.greaterThan('desktop')`
    pointer-events: auto;
  `}
`;
