import { generateMedia } from "styled-media-query";

export const customMedia = generateMedia({
  desktop: "980px",
  tablet: "60em",
  mobile: "46em"
});