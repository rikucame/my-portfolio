import styled from 'styled-components';
import { customMedia } from '../../../theme/customMedia';

export const Paper = styled.article<{ bgImage: string }>`
  width: 100%;
  background-color: #f1f1f1;
  background-image: url(${({ bgImage }) => bgImage});
  position: relative;

  ${customMedia.greaterThan('tablet')`
  `}
  ${customMedia.greaterThan('desktop')`
    
  `}
  &::after {
    width: calc(100% + 13px);
    height: calc(100% + 13px);
    content: '';
    display: block;
    filter: blur(2px);
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -10;
    background: linear-gradient(225deg, transparent 4px, #535353 4px),
      linear-gradient(135deg, transparent 10px, #535353 10px), linear-gradient(45deg, transparent 4px, #535353 4px),
      linear-gradient(315deg, transparent 0px, #535353 0px);
    background-position: top right, top left, bottom left, bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
`;
