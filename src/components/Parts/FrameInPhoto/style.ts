import styled from 'styled-components';
import { customMedia } from '../../../theme/customMedia';
import { Image } from '../Image';

export const PhotoFrame = styled.div<{ bgImage: string }>`
  width: 100%;
  margin-bottom: 40px;
  padding: 25px;
  background-color: #f1f1f1;
  background-image: url(${({ bgImage }) => bgImage});
  border: solid 8px #0b0b0b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${customMedia.greaterThan('tablet')`
    padding: 40px;
  `}
  ${customMedia.greaterThan('desktop')`
    width: 50%;
    &:nth-child(even){
      border-left: none;
    }
  `}
  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  &::after {
    width: calc(100% + 13px);
    height: calc(100% + 13px);
    content: '';
    display: block;
    filter: blur(2px);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -10;
    background: linear-gradient(225deg, transparent 4px, #535353 4px),
      linear-gradient(135deg, transparent 10px, #535353 10px),
      linear-gradient(45deg, transparent 4px, #535353 4px),
      linear-gradient(315deg, transparent 0px, #535353 0px);
    background-position: top right, top left, bottom left, bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
`;

export const StyledImage = styled(Image)`
  border: solid 1px #f0f0f0;
  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border: solid 11px;
    border-color: #333 #f1f1f1 #f1f1f1 #333;
    z-index: 100;
    left: -6px;
    top: -6px;
    filter: blur(1px);
  }
`;

export const Labels = styled.div`
  content: '';
  position: absolute;
  right: 0;
  bottom: 8px;
  width: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: flex-end;
`;
