import { COLOR } from "../../../theme/constants";
import styled, { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

export const StyledLayout = styled.div`
  height: 100%;
  ${media.lessThan("medium")`
    flex-direction: column;
  `};
`;

export const Main = styled.main`
  margin: 50px 40px 0;
`;

export const CurentPage = styled.h1``;

export const PhotoGrapherStyle = createGlobalStyle`
  html {
    background: ${COLOR.WHITE};
    ${media.lessThan("medium")``}
  }
  body {
  }
`;
