import styled from "styled-components";
import { Image } from "../Image";
import { FrameInPhoto } from "../FrameInPhoto";
import { customMedia } from "../../../theme/customMedia";

export const PhotoFramesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const StyledFrameInPhoto = styled(FrameInPhoto)`
  width: 100%;
  margin-bottom: 40px;
  ${customMedia.greaterThan('desktop')`
    width: 50%;
    &:nth-child(even){
      border-left: none;
    }
  `}
`;
