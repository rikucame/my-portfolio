import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { PhotoFrame, StyledImage } from './style';

type Props = {
  fileName: string;
  className?: string;
}

export const FrameInPhoto:React.FC<Props> = ({ className, fileName }) => {
  const { file } = useStaticQuery(
    graphql`
      query PhotoFrameBgImageQuery {
        file(relativePath: {eq: "frame_bg.png"}) {
          publicURL
        }
      }
    `
  );
  return (
    <PhotoFrame className={className} bgImage={file.publicURL}>
      <StyledImage fileName={fileName} />
    </PhotoFrame>
  );
};
