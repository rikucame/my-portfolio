import { COLOR } from '../../../theme/constants';
import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import { customMedia } from '../../../theme/customMedia';

export const StyledLayout = styled.div`
  height: 100%;
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`;

export const Main = styled.main`
  margin: 70px 20px 0;
  ${customMedia.greaterThan('tablet')`
    margin: 70px 40px 0;
  `}
  ${customMedia.greaterThan('desktop')`
    margin: 40px 50px 0 250px;
  `}
`;

export const CurentPage = styled.h1`
  @import url('../../../theme/fonts/851MkPOP.ttf');
  font-family: '851MkPOP';
  margin-bottom: 30px;
  text-align: center;
`;

export const PhotoGrapherStyle = createGlobalStyle`
  html {
    background: ${COLOR.WHITE};
    ${media.lessThan('medium')``}
  }
  body {
  }
`;
