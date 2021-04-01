import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { COLOR } from '../../../theme/constants';

export const Name = styled(Link)<{ photographer: boolean }>`
  @import url('../../../theme/fonts/851MkPOP.ttf');
  font-size: 22px;
  font-weight: 200;
  letter-spacing: 0.18rem;
  color: ${({ photographer }) => (photographer ? COLOR.BLACK : COLOR.WHITE)};
  font-family: ${({ photographer }) => (photographer ? "'851MkPOP'" : 'SANS')};
  ${media.lessThan('medium')`
    font-size: 17px;
  `}
`;
