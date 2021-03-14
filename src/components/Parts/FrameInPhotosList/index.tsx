import React from "react";
import { FrameInPhoto } from "../FrameInPhoto";
import { PhotoFramesList } from './style';

type Props = {
  fileNames: string[];
}

export const FrameInPhotosList:React.FC<Props> = ({ fileNames }) => {
  return (
    <PhotoFramesList>
      {fileNames.map((fileName: string) => {
        return <FrameInPhoto key={fileName} fileName={fileName} />
      })} 
    </PhotoFramesList>
  );
};
