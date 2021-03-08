import styled from "styled-components";

export const ImageWrap = styled.div<{aspectRatio: number}>`
  width : calc(100% * ${({aspectRatio}) => aspectRatio < 1 ? aspectRatio : 1});
  height: calc(100% / ${({aspectRatio}) => aspectRatio > 1 ? aspectRatio : 1});
`;