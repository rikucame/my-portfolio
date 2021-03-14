import styled from 'styled-components';
import { customMedia } from '../../../theme/customMedia';

export const StyledHandWritten = styled.p`
  @import url('../../../theme/fonts/851MkPOP.ttf');
  font-family: '851MkPOP';
  font-size: 10px;
  color: #777;
  font-weight: bold;
  letter-spacing: 0.11rem;
  ${customMedia.greaterThan('desktop')`
  `}
`;
