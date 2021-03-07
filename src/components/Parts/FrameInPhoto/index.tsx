import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { PhotoFrame, StyledImage } from './style';

type Props = {
  fileName: string;
  className?: string;
}

export const FrameInPhoto:React.FC<Props> = ({ className, fileName }) => {
  // const hoge = useStaticQuery(
  //   graphql`
  //     query PhotoFrameBgImageQuery {
  //       allFile(filter: {relativePath: {eq: "frame_bg.png"}}) {
  //         edges {
  //           node {
  //             publicURL
  //           }
  //         }
  //       }
  //     }
  //   `
  //   );
  // console.log(hoge)
  return (
    <PhotoFrame className={className} bgImage={"/static/19da0106e83258779c005a2fb46171ce/frame_bg.png"}>
      <StyledImage fileName={fileName} />
    </PhotoFrame>
  );
};
