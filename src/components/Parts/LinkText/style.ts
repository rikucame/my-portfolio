import styled from 'styled-components';
import { customMedia } from '../../../theme/customMedia';
import { Link } from 'gatsby';
import { COLOR } from '../../../theme/constants';

export const StyledLink = styled(Link)`
  @import url('../../../theme/fonts/851MkPOP.ttf');
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.11rem;
  color: ${COLOR.BLACK};
  ${customMedia.greaterThan('desktop')`
    font-size: 18px;
  `}
`;
