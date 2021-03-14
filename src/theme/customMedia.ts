import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
  desktop: '980px',
  tablet: '520px',
  mobile: '46em',
});
