import styled from "styled-components";
import { customMedia } from "../../../theme/customMedia";
import { Link } from "gatsby";
import {
  COLOR,
  PHOTOGRAPHER_FONTS,
} from "../../../theme/constants";

export const StyledLink = styled(Link)`
  @import url("../../../theme/fonts/851MkPOP.ttf");
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.18rem;
  color: ${COLOR.BLACK};
  /* font-family: ${PHOTOGRAPHER_FONTS}; */
  ${customMedia.greaterThan("desktop")`
    font-size: 18px;
  `}
`;
