import styled from "styled-components";
import { NameText } from "../NameText";
import { COLOR } from "../../../theme/constants";
import media from "styled-media-query";

export const Section = styled.section<{ photographerSide: boolean }>`
  padding: 30px 0;
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${({ photographerSide }) =>
    photographerSide
      ? `flex-direction: row-reverse; 
         align-items: flex-end;`
      : ""};
  ${media.lessThan("medium")`
    padding: 30px 15px;
    width: 100%;
  `}
`;

export const MySide = styled.h1<{ photographerSide: boolean }>`
  font-size: 30px;
  align-self: center;
  color: ${({ photographerSide }) =>
    photographerSide ? COLOR.BLACK : COLOR.WHITE};
  font-family: ${({ photographerSide }) =>
    photographerSide ? "'851MkPOP'" : "SANS"};
  ${media.lessThan("medium")`
    font-size: 20px;
  `}
`;

export const WrapNameText = styled(NameText)`
  margin-bottom: auto;
  color: red;
  ${media.lessThan("medium")`
    width: 70px;
  `}
`;

export const DummyBox = styled.div`
  content: "";
  width: 15px;
  ${media.lessThan("medium")`
    width: 70px;
  `}
`;
