import { COLOR } from "../../../theme/constants";
import styled, { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

export const TopPage = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  ${media.lessThan("medium")`
    flex-direction: column;
  `};
`;

export const TopPageStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${COLOR.BLACK},
      ${COLOR.GRAY} 45%,
      ${COLOR.WHITE}
    );
    ${media.lessThan("medium")`
      background: linear-gradient(
        ${COLOR.BLACK},
        ${COLOR.GRAY} 45%,
        ${COLOR.WHITE}
      );
    `}
  }
  body {
    width: 100%;
    height: 100%;
  }
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;
