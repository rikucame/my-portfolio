import React from "react";
import { PhotoFramesList, StyledFrameInPhoto } from './style';

type Props = {
  fileNames: string[];
}

export const FrameInPhotosList:React.FC<Props> = ({ fileNames }) => {
  return (
    <PhotoFramesList>
      {fileNames.map((fileName: string) => {
        return <StyledFrameInPhoto key={fileName} fileName={fileName} />
      })} 
    </PhotoFramesList>
  );
};
