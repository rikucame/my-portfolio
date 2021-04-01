import styled from 'styled-components';
import { customMedia } from '../../../theme/customMedia';
import { Caption } from '../../Parts/Caption';
import { SvgImage } from '../../Parts/SvgIcon';

export const Text = styled.p`
  width: 100%;
  line-height: 1.5;
`;

export const StyledCaption = styled(Caption)`
  width: 100%;
  max-height: 500px;
  padding: 50px 25px;
  display: flex;
  flex-wrap: wrap;
  ${customMedia.between('tablet', 'desktop')`
    padding: 50px 60px;
  `}
`;

export const Row = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${customMedia.greaterThan('desktop')`
    width: 50%;
  `}
`;

export const Column = styled.div`
  width: 100%;
  text-align: center;
  ${customMedia.greaterThan('desktop')`
    text-align: left;
  `}
`;

export const SnsWrap = styled(Column)`
  width: 100%;
  margin: 20px 0;
  display: flex;
`;

export const ProfileColumn = styled(Column)`
  margin-bottom: 10px;
  ${customMedia.greaterThan('desktop')`
  `};
`;

export const DescriptionColumn = styled(Column)`
  ${customMedia.greaterThan('desktop')`
  `};
`;

export const HalfColumn = styled.div`
  width: 50%;
`;

export const IconsWrap = styled.div``;

export const Icon = styled(SvgImage)`
  width: 30px;
  height: 30px;
`;
