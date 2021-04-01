import styled from 'styled-components';
import { COLOR } from '../../../theme/constants';
import { customMedia } from '../../../theme/customMedia';
import { LinkText } from '../../Parts/LinkText';

export const StyledHeader = styled.header<{ isOpen: boolean }>`
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
    width: 200px;
    height: 100%;
    flex-direction: column;
    border-right: 1px solid ${COLOR.BLACK};
  `}
`;

export const BackHome = styled(LinkText)`
  margin: 0;
  letter-spacing: 0.1rem;
`;

export const MenuButton = styled.p`
  cursor: pointer;
  @import url('../../../theme/fonts/851MkPOP.ttf');
  font-size: 16px;
  font-weight: bold;
  color: ${COLOR.BLACK};
  ${customMedia.greaterThan('desktop')`
    display: none;
  `}
`;
