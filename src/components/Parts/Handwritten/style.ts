import styled from 'styled-components';
import { customMedia } from '../../../theme/customMedia';

export const StyledHandWritten = styled.p`
  @import url('/static/feb99264ba5a797b54b4206f28d0ee04/851MkPOP.ttf');
  font-family: '851MkPOP';
  font-size: 10px;
  color: #777;
  font-weight: bold;
  letter-spacing: 0.11rem;
  ${customMedia.greaterThan('desktop')`
  `}
`;
