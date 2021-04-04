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
  padding: 40px 20px 70px;
  margin-bottom: 40px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  ${customMedia.between('tablet', 'desktop')`
    padding: 50px 60px 80px;
  `}
  ${customMedia.greaterThan('desktop')`
    min-height: 550px;
    padding: 10% 10% 15%;
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
    padding-top: 15px;
  `}
`;

export const Japanese = styled(Row)`
  ${customMedia.greaterThan('desktop')`
    width: 45%;
    border-right: 2px solid #333;
    margin-right: 10%;
  `}
`;

export const English = styled(Row)`
  border-top: 2px solid #333;
  padding-top: 40px;
  ${customMedia.greaterThan('desktop')`
    width: 45%;
    border-top: none;
    padding-top: 15px;
  `}
`;

export const Column = styled.div`
  width: 100%;
  text-align: center;
  ${customMedia.greaterThan('desktop')`
    text-align: left;
  `}
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

export const SnsWrap = styled(Column)`
  margin: 0;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const SnsLink = styled.a``;

export const Icon = styled(SvgImage)`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  fill: #555;
`;
