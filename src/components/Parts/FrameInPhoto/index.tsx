import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { HandWritten } from "../Handwritten";
import { Labels, PhotoFrame, StyledImage } from './style';

type Props = {
  fileName: string;
  className?: string;
}

export const FrameInPhoto:React.FC<Props> = ({ className, fileName }) => {
  console.log(fileName.split('.')[1].replace('_', ' '));
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
      <Labels>
        <HandWritten>{fileName.split('.')[1].replace('_', ' ')}</HandWritten>
      </Labels>
    </PhotoFrame>
  );
};
